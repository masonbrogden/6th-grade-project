"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ScoutMascot from "@/components/ScoutMascot";

/** Matches the per-message cap in /api/chat so nothing is silently truncated. */
const MAX_CHARS = 1000;

type Role = "user" | "assistant";
type ChatMessage = { id: string; role: Role; content: string };

type ChatWidgetProps = {
  classId: string;
  /** Scout's opening line, shown before the student says anything. */
  greeting: string;
  /** Tappable openers, usually built from the unit's topics. */
  starters?: string[];
};

export default function ChatWidget({
  classId,
  greeting,
  starters = [],
}: ChatWidgetProps) {
  const reduceMotion = useReducedMotion();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const idCounter = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const nextId = () => `m${idCounter.current++}`;

  // Keep the newest message in view as the conversation grows.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isSending]);

  async function send(rawText: string) {
    const text = rawText.trim().slice(0, MAX_CHARS);
    if (!text || isSending || isClosed) return;

    const outgoing: ChatMessage = { id: nextId(), role: "user", content: text };
    const history = [...messages, outgoing];

    setMessages(history);
    setDraft("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          classId,
          messages: history.map(({ role, content }) => ({ role, content })),
        }),
      });

      // Every response carries `reply`, including the error shapes.
      const data: { reply?: string; outsideHours?: boolean } = await response
        .json()
        .catch(() => ({}));

      setMessages((current) => [
        ...current,
        {
          id: nextId(),
          role: "assistant",
          content:
            data.reply ??
            "My radio's crackling and I couldn't hear that one. Try again in a minute?",
        },
      ]);

      if (data.outsideHours) setIsClosed(true);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: nextId(),
          role: "assistant",
          content:
            "I couldn't reach the trail just now — check your internet and try again in a minute.",
        },
      ]);
    } finally {
      setIsSending(false);
      inputRef.current?.focus();
    }
  }

  const slideIn = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 } };

  const showStarters = messages.length === 0 && starters.length > 0;

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border bg-parchment px-5 py-4">
          <ScoutMascot size={40} />
          <div className="min-w-0">
            <p className="font-heading text-base font-semibold leading-tight text-forest">
              Ask Scout
            </p>
            <p className="truncate text-xs text-trail-light">
              Hints and questions — never the answers
            </p>
          </div>
        </div>

        {/* Transcript */}
        <div
          ref={scrollRef}
          role="log"
          aria-live="polite"
          aria-label="Conversation with Scout"
          className="flex min-h-[15rem] max-h-[26rem] flex-col gap-4 overflow-y-auto px-5 py-6 sm:min-h-[17rem] sm:max-h-[30rem]"
        >
          <ScoutBubble>{greeting}</ScoutBubble>

          <AnimatePresence initial={false}>
            {messages.map((message) =>
              message.role === "assistant" ? (
                <motion.div
                  key={message.id}
                  {...slideIn}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ScoutBubble>{message.content}</ScoutBubble>
                </motion.div>
              ) : (
                <motion.div
                  key={message.id}
                  {...slideIn}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="flex justify-end"
                >
                  <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-md bg-forest px-4 py-2.5 text-sm leading-relaxed text-parchment">
                    {message.content}
                  </p>
                </motion.div>
              ),
            )}
          </AnimatePresence>

          {isSending ? (
            <ThinkingIndicator reduceMotion={!!reduceMotion} />
          ) : null}
        </div>

        {/* Starters */}
        {showStarters ? (
          <div className="flex flex-wrap gap-2 border-t border-border bg-parchment px-5 py-4">
            {starters.map((starter) => (
              <button
                key={starter}
                type="button"
                onClick={() => send(starter)}
                className="min-h-11 rounded-full border border-border bg-surface px-4 py-2.5 text-xs font-medium text-trail transition-colors hover:border-amber hover:text-amber-shade"
              >
                {starter}
              </button>
            ))}
          </div>
        ) : null}

        {/* Composer */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            send(draft);
          }}
          className="border-t border-border bg-parchment px-5 py-4"
        >
          <div className="flex items-end gap-3">
            <label htmlFor="scout-input" className="sr-only">
              Ask Scout a question
            </label>
            <textarea
              id="scout-input"
              ref={inputRef}
              rows={1}
              value={draft}
              maxLength={MAX_CHARS}
              disabled={isClosed}
              placeholder={
                isClosed ? "Scout is off the trail" : "Ask Scout a question…"
              }
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  send(draft);
                }
              }}
              className="max-h-32 min-h-[2.75rem] flex-1 resize-none rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-forest placeholder:text-trail-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30 disabled:opacity-60"
            />
            <motion.button
              type="submit"
              disabled={!draft.trim() || isSending || isClosed}
              whileHover={reduceMotion ? undefined : { y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-amber px-5 text-sm font-semibold text-warm-white transition-opacity disabled:opacity-40"
            >
              Send
              <span aria-hidden>→</span>
            </motion.button>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-trail-light">
            <span>Enter to send · Shift + Enter for a new line</span>
            {draft.length > MAX_CHARS - 120 ? (
              <span>
                {draft.length}/{MAX_CHARS}
              </span>
            ) : null}
          </div>
        </form>
      </div>
    </MotionConfig>
  );
}

/* ------------------------------------------------------------------ */

function ScoutBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0">
        <ScoutMascot size={32} />
      </span>
      <p className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-tl-md bg-forest-tint px-4 py-2.5 text-sm leading-relaxed text-forest">
        {children}
      </p>
    </div>
  );
}

/** A friendly wait state — Scout pauses to think rather than a bare spinner. */
function ThinkingIndicator({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3"
    >
      <span className="shrink-0">
        <ScoutMascot size={32} />
      </span>
      <div className="flex items-center gap-2.5 rounded-2xl rounded-tl-md bg-forest-tint px-4 py-3">
        <span className="text-sm italic text-forest">Scout is thinking</span>
        <span className="flex gap-1" aria-hidden>
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="block h-1.5 w-1.5 rounded-full bg-amber"
              animate={reduceMotion ? undefined : { opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: dot * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </span>
      </div>
    </motion.div>
  );
}
