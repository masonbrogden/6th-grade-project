/**
 * Rewrites the vocabulary definitions at a 5th-6th grade reading level.
 *
 * The originals come straight from the course textbook and run around grade 8.5,
 * with some past grade 15. This rewrites them for the reading level the site
 * targets while keeping the science exact. The textbook wording is preserved on
 * each entry as `source`, so nothing is lost and the change is reviewable.
 *
 * Run:  node --env-file=.env scripts/simplify-vocabulary.mjs
 * Writes src/lib/vocabulary.ts in place.
 */

import fs from "node:fs";
import Anthropic from "@anthropic-ai/sdk";

import { VOCABULARY } from "../src/lib/vocabulary.ts";

const MODEL = "claude-haiku-4-5-20251001";
const BATCH = 12;

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error("ANTHROPIC_API_KEY is not set. Try: node --env-file=.env ...");
  process.exit(1);
}
const client = new Anthropic({ apiKey });

const SYSTEM = `You rewrite science glossary definitions for 11-year-olds.

For each term you are given, rewrite the definition so a 5th or 6th grader can
read it easily. Rules:

- Keep the science exactly right. Never add a fact that is not in the original,
  and never drop one that matters. If the original gives an example, keep it.
- Use short, common words. Break one long sentence into two short ones.
- Aim for roughly 10 to 25 words. Never go past two sentences.
- Do not use the term itself inside its own definition. If the original does,
  find another way to say it.
- Do not start with "This is" or "It is". Start with what the thing IS.
- Plain text only. No markdown, no quotes around the definition.
- Keep proper nouns (Earth, Chesapeake Bay) and real units as they are.

Reply with a JSON object only: keys are the exact terms given, values are the
rewritten definitions. No other text.`;

const out = [];
for (let i = 0; i < VOCABULARY.length; i += BATCH) {
  const slice = VOCABULARY.slice(i, i + BATCH);
  const payload = slice
    .map((entry) => `${entry.term} :: ${entry.definition}`)
    .join("\n");

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 2000,
    system: SYSTEM,
    messages: [{ role: "user", content: payload }],
  });

  const text = response.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("");

  let parsed;
  try {
    parsed = JSON.parse(text.slice(text.indexOf("{"), text.lastIndexOf("}") + 1));
  } catch {
    console.error(`batch ${i / BATCH} failed to parse; keeping originals`);
    parsed = {};
  }

  for (const entry of slice) {
    const rewritten = parsed[entry.term];
    out.push({
      term: entry.term,
      definition: typeof rewritten === "string" && rewritten.trim()
        ? rewritten.trim()
        : entry.definition,
      source: entry.definition,
    });
  }
  process.stdout.write(`\r  ${out.length}/${VOCABULARY.length} rewritten`);
}
console.log();

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const body = out
  .map(
    (e) =>
      `  {\n    term: "${esc(e.term)}",\n    definition: "${esc(e.definition)}",\n    source: "${esc(e.source)}",\n  },`,
  )
  .join("\n");

fs.writeFileSync(
  "src/lib/vocabulary.ts",
  `/**
 * Investigations in Earth Science vocabulary.
 *
 * Terms come from the MCPS Grade 6 curriculum packet ("grade 6 info.pdf",
 * pages 3-15). \`definition\` is rewritten for a 5th-6th grade reading level by
 * scripts/simplify-vocabulary.mjs; \`source\` is the packet's original wording,
 * kept so the rewrite stays checkable.
 *
 * Course content, not app logic — regenerate wholesale rather than hand-editing.
 */

export type VocabEntry = {
  term: string;
  /** Student-facing wording, written for this site's reading level. */
  definition: string;
  /** The curriculum packet's original definition. */
  source: string;
};

export const VOCABULARY: VocabEntry[] = [
${body}
];

/** First letters present in the list, for the A-Z jump bar. */
export const VOCAB_LETTERS: string[] = [
  ...new Set(VOCABULARY.map((entry) => entry.term[0].toUpperCase())),
].sort();
`,
);
console.log(`wrote src/lib/vocabulary.ts (${out.length} entries)`);
