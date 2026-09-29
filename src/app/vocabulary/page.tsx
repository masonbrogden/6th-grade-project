import type { Metadata } from "next";
import Link from "next/link";

import ScoutMascot from "@/components/ScoutMascot";
import { TreeLine } from "@/components/Scenery";
import { VOCABULARY, VOCAB_LETTERS } from "@/lib/vocabulary";

import VocabularyBrowser from "./VocabularyBrowser";

export const metadata: Metadata = {
  title: "Vocabulary — Investigations in Earth Science",
  description: `All ${VOCABULARY.length} vocabulary words from the Investigations in Earth Science list.`,
};

export default function VocabularyPage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden bg-parchment px-6 pb-10 pt-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-32 h-72"
          style={{
            background:
              "radial-gradient(55% 55% at 70% 45%, var(--amber-tint) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-3xl">
          <Link
            href="/"
            className="group -my-3 inline-flex min-h-11 items-center gap-2 py-3 text-sm font-medium text-trail transition-colors hover:text-forest"
          >
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
            Home
          </Link>

          <div className="mt-8 flex items-center gap-5">
            <ScoutMascot size={72} />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trail-light">
                Investigations in Earth Science
              </p>
              <h1 className="mt-1 font-heading text-3xl font-semibold leading-tight text-forest sm:text-4xl">
                Word list
              </h1>
            </div>
          </div>

          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-trail">
            Every word from your science word list, written to be easy to read.
            Search for one, or jump to a letter.
          </p>
        </div>
      </section>

      <section className="bg-parchment-deep px-6 pb-20 pt-2">
        <div className="mx-auto w-full max-w-3xl">
          <VocabularyBrowser entries={VOCABULARY} letters={VOCAB_LETTERS} />
        </div>
      </section>

      <section className="bg-parchment-deep">
        <TreeLine />
      </section>

      <section className="bg-forest-deep px-6 pb-16 pt-10 text-parchment">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 text-center">
          <h2 className="text-2xl font-semibold text-parchment">
            Still stuck on a word?
          </h2>
          <p className="max-w-md text-[0.975rem] leading-relaxed text-parchment/80">
            Ask Scout to explain it another way. It won&apos;t give you test
            answers, but it will help you figure out what a word means.
          </p>
          <Link
            href="/class/6th-grade-science"
            className="group inline-flex items-center gap-2.5 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-forest-deep shadow-lift"
          >
            Ask Scout
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
