import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

import { buildSystemPrompt, getClassById } from "@/lib/classes";
import { isWithinSchoolHours, OUTSIDE_HOURS_MESSAGE } from "@/lib/hours";

/* The in-memory rate limiter and process.env both need a Node runtime, and the
   response must never be cached — every turn is different. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MODEL = "claude-haiku-4-5-20251001";
/** Scout is instructed to answer in 2-5 sentences; this is a generous ceiling. */
const MAX_TOKENS = 1024;

const MAX_MESSAGE_CHARS = 1000;
const MAX_HISTORY_MESSAGES = 12;

const RATE_LIMIT_MAX_REQUESTS = 15;
const RATE_LIMIT_WINDOW_MS = 60_000;

/* Every response — success or failure — carries a `reply` the UI can drop
   straight into a chat bubble, so a student never sees a raw error. */
const RATE_LIMITED_REPLY =
  "Whoa, slow down there! You're sending messages faster than I can hike. Take a breath and try again in a few seconds.";
const INVALID_REQUEST_REPLY =
  "Something about that message didn't come through right. Want to try typing it again?";
const BUSY_REPLY =
  "A lot of students are asking me things right now. Give me a minute and try again!";
const GENERIC_ERROR_REPLY =
  "My radio's crackling and I couldn't hear that one. Try again in a minute — and if I keep dropping out, let your teacher know.";

type RateLimitEntry = { count: number; resetAt: number };

/* Held on globalThis so the dev server's hot reload doesn't hand every student
   a fresh quota on each file save. */
const globalForRateLimit = globalThis as unknown as {
  __scoutRateLimit?: Map<string, RateLimitEntry>;
};
const rateLimits = (globalForRateLimit.__scoutRateLimit ??= new Map<
  string,
  RateLimitEntry
>());

function checkRateLimit(ip: string): {
  allowed: boolean;
  retryAfterSeconds: number;
} {
  const now = Date.now();

  // Sweep expired buckets occasionally so the map can't grow without bound.
  if (rateLimits.size > 500) {
    for (const [key, value] of rateLimits) {
      if (value.resetAt <= now) rateLimits.delete(key);
    }
  }

  const entry = rateLimits.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((entry.resetAt - now) / 1000)),
    };
  }

  return { allowed: true, retryAfterSeconds: 0 };
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first;
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

/**
 * Drop anything malformed, cap each message, then keep the most recent turns.
 *
 * The API rejects a history that opens on an assistant turn, which is easy to
 * produce by slicing a long conversation, so trim leading assistant messages
 * after the slice.
 */
function normalizeMessages(raw: unknown): Anthropic.MessageParam[] | null {
  if (!Array.isArray(raw) || raw.length === 0) return null;

  const cleaned: Anthropic.MessageParam[] = [];
  for (const item of raw) {
    if (typeof item !== "object" || item === null) continue;
    const { role, content } = item as { role?: unknown; content?: unknown };
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;

    const text = content.trim().slice(0, MAX_MESSAGE_CHARS);
    if (!text) continue;

    cleaned.push({ role, content: text });
  }

  const recent = cleaned.slice(-MAX_HISTORY_MESSAGES);
  while (recent.length > 0 && recent[0].role !== "user") {
    recent.shift();
  }

  return recent.length > 0 ? recent : null;
}

/* One client per server instance so the SDK can reuse connections. */
let anthropic: Anthropic | null = null;
function getAnthropicClient(apiKey: string): Anthropic {
  anthropic ??= new Anthropic({ apiKey });
  return anthropic;
}

export async function POST(request: NextRequest) {
  if (!isWithinSchoolHours(new Date())) {
    return NextResponse.json({
      reply: OUTSIDE_HOURS_MESSAGE,
      outsideHours: true,
    });
  }

  const { allowed, retryAfterSeconds } = checkRateLimit(getClientIp(request));
  if (!allowed) {
    return NextResponse.json(
      { reply: RATE_LIMITED_REPLY, rateLimited: true },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

  let body: { classId?: unknown; messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ reply: INVALID_REQUEST_REPLY }, { status: 400 });
  }

  const classInfo =
    typeof body.classId === "string" ? getClassById(body.classId) : undefined;
  if (!classInfo) {
    return NextResponse.json({ reply: INVALID_REQUEST_REPLY }, { status: 400 });
  }

  const messages = normalizeMessages(body.messages);
  if (!messages) {
    return NextResponse.json({ reply: INVALID_REQUEST_REPLY }, { status: 400 });
  }

  /* Server-only. Not NEXT_PUBLIC_, never returned in a response, and never
     included in an error message sent to the browser. */
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("[chat] ANTHROPIC_API_KEY is not set.");
    return NextResponse.json({ reply: GENERIC_ERROR_REPLY }, { status: 500 });
  }

  try {
    const response = await getAnthropicClient(apiKey).messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: buildSystemPrompt(classInfo),
      messages,
    });

    if (response.stop_reason === "refusal") {
      return NextResponse.json({
        reply:
          "I'm not able to help with that one. Let's get back to what we're studying in class!",
      });
    }

    const reply = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("\n")
      .trim();

    if (!reply) {
      console.error(
        `[chat] Empty reply, stop_reason=${response.stop_reason ?? "unknown"}`,
      );
      return NextResponse.json({ reply: GENERIC_ERROR_REPLY }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    // Log the detail server-side; send the student something friendly.
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("[chat] Anthropic rejected the API key.");
    } else if (error instanceof Anthropic.RateLimitError) {
      console.error("[chat] Anthropic rate limit reached.");
      return NextResponse.json({ reply: BUSY_REPLY }, { status: 503 });
    } else if (error instanceof Anthropic.BadRequestError) {
      console.error("[chat] Bad request to Anthropic:", error.message);
    } else if (error instanceof Anthropic.APIError) {
      console.error(`[chat] Anthropic error ${error.status}:`, error.message);
    } else {
      console.error("[chat] Unexpected error:", error);
    }

    return NextResponse.json({ reply: GENERIC_ERROR_REPLY }, { status: 502 });
  }
}
