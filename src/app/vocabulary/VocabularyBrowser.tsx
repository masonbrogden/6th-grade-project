"use client";

import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import type { VocabEntry } from "@/lib/vocabulary";

export default function VocabularyBrowser({
  entries,
  letters,
}: {
  entries: VocabEntry[];
  letters: string[];
}) {
  const reduceMotion = useReducedMotion();
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return entries;
    return entries.filter(
      (entry) =>
        entry.term.toLowerCase().includes(needle) ||
        entry.definition.toLowerCase().includes(needle),
    );
  }, [entries, query]);

  /* Group into letter sections so the jump bar has somewhere to land. */
  const sections = useMemo(() => {
    const byLetter = new Map<string, VocabEntry[]>();
    for (const entry of matches) {
      const letter = entry.term[0].toUpperCase();
      const bucket = byLetter.get(letter);
      if (bucket) bucket.push(entry);
      else byLetter.set(letter, [entry]);
    }
    return [...byLetter.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [matches]);

  const activeLetters = new Set(sections.map(([letter]) => letter));

  return (
    <MotionConfig reducedMotion="user">
      <div>
        {/* Search */}
        <div className="sticky top-0 z-10 -mx-6 border-b border-border bg-parchment-deep/95 px-6 py-4 backdrop-blur">
          <label htmlFor="vocab-search" className="sr-only">
            Search the vocabulary list
          </label>
          <input
            id="vocab-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search a word or its meaning…"
            className="min-h-11 w-full rounded-full border border-border bg-surface px-5 py-3 text-sm text-forest placeholder:text-trail-light focus:border-amber focus:outline-none focus:ring-2 focus:ring-amber/30"
          />

          <div className="mt-3 flex flex-wrap gap-1">
            {letters.map((letter) => {
              const enabled = activeLetters.has(letter);
              return enabled ? (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold text-trail transition-colors hover:bg-forest-tint hover:text-forest"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold text-trail-light/40"
                >
                  {letter}
                </span>
              );
            })}
          </div>

          <p className="mt-3 text-xs text-trail-light" aria-live="polite">
            {matches.length === entries.length
              ? `${entries.length} words`
              : `${matches.length} of ${entries.length} words`}
          </p>
        </div>

        {/* Results */}
        {sections.length === 0 ? (
          <p className="mt-16 text-center text-trail">
            No words match “{query.trim()}”. Try a shorter search.
          </p>
        ) : (
          <div className="mt-10 flex flex-col gap-10">
            {sections.map(([letter, items]) => (
              <section key={letter} id={`letter-${letter}`} className="scroll-mt-44">
                <h2 className="font-heading text-2xl font-semibold text-amber-shade">
                  {letter}
                </h2>
                <dl className="mt-4 flex flex-col gap-3">
                  {items.map((entry) => (
                    <motion.div
                      key={entry.term}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22 }}
                      className="rounded-2xl border border-border bg-surface p-5 shadow-card"
                    >
                      <dt className="font-heading text-base font-semibold text-forest">
                        {entry.term}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-trail">
                        {entry.definition}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </section>
            ))}
          </div>
        )}
      </div>
    </MotionConfig>
  );
}
