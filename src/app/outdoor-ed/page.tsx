import type { Metadata } from "next";
import Link from "next/link";

import ScoutMascot from "@/components/ScoutMascot";
import { RidgeScene, TrailMarker, TreeLine } from "@/components/Scenery";
import { CLASSES } from "@/lib/classes";
import {
  accentForGrade,
  accents,
  splitUnit,
  stripPlaceholder,
} from "@/lib/classDisplay";

export const metadata: Metadata = {
  title: "Outdoor Ed — Class, but outside",
  description: "Where we're going, what to pack, and how the trip ties into class.",
};

/**
 * ⚠️ EVERY VALUE BELOW IS PLACEHOLDER. Each string is prefixed with
 * "PLACEHOLDER —" so `grep -rn "PLACEHOLDER —" src/` finds them all. The draft
 * banner in the trip section stays up until these are real — delete it then.
 */
const TRIP = {
  dates: "PLACEHOLDER — Tuesday, May 12 to Thursday, May 14",
  place: "PLACEHOLDER — Pine Hollow Outdoor Science Center",
  leaving: "PLACEHOLDER — Bus loads at 7:15 AM in the north lot",
  returning: "PLACEHOLDER — Back at school by 4:00 PM on Thursday",
  bring: [
    "PLACEHOLDER — Sleeping bag and a pillow",
    "PLACEHOLDER — Refillable water bottle",
    "PLACEHOLDER — Rain jacket and a warm layer",
    "PLACEHOLDER — Broken-in shoes you can get muddy",
    "PLACEHOLDER — Field notebook and two pencils",
    "PLACEHOLDER — Toothbrush, soap, and a towel",
  ],
  leave: "PLACEHOLDER — Leave phones, snacks, and anything valuable at home.",
  schedule: [
    {
      day: "PLACEHOLDER — Day one",
      items: [
        "PLACEHOLDER — Arrive, drop bags, and walk the property",
        "PLACEHOLDER — Creek study: temperature, speed, and what lives there",
        "PLACEHOLDER — Campfire and night sky",
      ],
    },
    {
      day: "PLACEHOLDER — Day two",
      items: [
        "PLACEHOLDER — Meadow and forest-edge surveys",
        "PLACEHOLDER — Soil pits and erosion walk",
        "PLACEHOLDER — Field notebooks and group share-out",
      ],
    },
    {
      day: "PLACEHOLDER — Day three",
      items: [
        "PLACEHOLDER — Morning bird walk",
        "PLACEHOLDER — Pack up and clean cabins",
        "PLACEHOLDER — Closing circle, then buses home",
      ],
    },
  ],
};

export default function OutdoorEdPage() {
  return (
    <main className="flex-1">
      {/* ---------------------------------------------------------------
          Hero
          --------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-28 h-96"
          style={{
            background:
              "radial-gradient(60% 60% at 68% 40%, var(--amber-tint) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-5 top-28 h-16 w-16 rounded-full sm:right-[12%] sm:top-16 sm:h-28 sm:w-28"
          style={{ background: "var(--amber)", opacity: 0.85 }}
        />

        <div className="relative mx-auto w-full max-w-3xl px-6 pb-4 pt-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-trail transition-colors hover:text-forest"
          >
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
            Home
          </Link>

          <div className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-trail">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              Field trip
            </p>

            <div className="mt-8 flex justify-center">
              <ScoutMascot size={120} title="Scout, ready for the trail" />
            </div>

            <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.08] text-forest sm:text-5xl">
              Class, but outside.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-trail sm:text-lg">
              Everything we&apos;ve been studying is already out there — in the
              creek, under the rocks, and across the meadow. Here&apos;s where
              we&apos;re going, what to pack, and how it all ties back to class.
            </p>
          </div>
        </div>

        <RidgeScene />
      </section>

      {/* ---------------------------------------------------------------
          Trip details — placeholder
          --------------------------------------------------------------- */}
      <section className="bg-parchment-deep px-6 pb-20 pt-4">
        <div className="mx-auto w-full max-w-4xl">
          <TrailMarker label="The basics" />

          <h2 className="mt-5 text-center text-3xl font-semibold text-forest sm:text-4xl">
            Trip details
          </h2>

          {/* Remove this once TRIP holds confirmed information. */}
          <p className="mx-auto mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-amber/40 bg-amber-tint/60 px-5 py-4 text-sm leading-relaxed text-trail-deep">
            <span aria-hidden className="mt-0.5 shrink-0 text-base">
              ✎
            </span>
            <span>
              <strong className="font-semibold">Draft details.</strong> Dates,
              packing list, and schedule below are placeholders while the trip
              is being planned — don&apos;t pack from this page yet.
            </span>
          </p>

          {/* items-start: these three cards differ a lot in length, and
              stretching them to match leaves the short ones mostly empty. */}
          <div className="mt-10 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
            {/* When and where */}
            <div className="rounded-3xl border border-border bg-surface p-7 shadow-card">
              <h3 className="font-heading text-lg font-semibold text-forest">
                When &amp; where
              </h3>
              <dl className="mt-5 flex flex-col gap-4 text-sm">
                {[
                  ["Dates", TRIP.dates],
                  ["Place", TRIP.place],
                  ["Leaving", TRIP.leaving],
                  ["Back", TRIP.returning],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-trail-light">
                      {label}
                    </dt>
                    <dd className="mt-1 leading-relaxed text-trail">
                      {stripPlaceholder(value)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Packing list */}
            <div className="rounded-3xl border border-border bg-surface p-7 shadow-card">
              <h3 className="font-heading text-lg font-semibold text-forest">
                What to bring
              </h3>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {TRIP.bring.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.3rem] h-3.5 w-3.5 shrink-0 rounded-[0.3rem] border-2 border-amber"
                    />
                    <span className="min-w-0 leading-relaxed text-trail">
                      {stripPlaceholder(item)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-trail-light">
                {stripPlaceholder(TRIP.leave)}
              </p>
            </div>

            {/* Schedule */}
            <div className="rounded-3xl border border-border bg-surface p-7 shadow-card">
              <h3 className="font-heading text-lg font-semibold text-forest">
                Rough schedule
              </h3>
              <div className="mt-5 flex flex-col gap-5">
                {TRIP.schedule.map((day) => (
                  <div key={day.day}>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-amber-shade">
                      {stripPlaceholder(day.day)}
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5 text-sm">
                      {day.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 leading-relaxed text-trail"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-forest-tint"
                          />
                          <span className="min-w-0">
                            {stripPlaceholder(item)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          How it ties back to class
          --------------------------------------------------------------- */}
      <section className="bg-parchment px-6 pb-20 pt-16">
        <div className="mx-auto w-full max-w-4xl">
          <TrailMarker label="Out on the trail" />

          <h2 className="mt-5 text-center text-3xl font-semibold text-forest sm:text-4xl">
            What your class will be doing
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-trail">
            Each class takes its current unit out into the field.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CLASSES.filter((classInfo) => classInfo.outdoorEdConnection).map(
              (classInfo) => {
                const accent = accents[accentForGrade(classInfo.grade)];
                const { title } = splitUnit(classInfo.unit);

                return (
                  <article
                    key={classInfo.id}
                    className="flex flex-col rounded-3xl border border-border bg-surface p-7 shadow-card"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-heading text-xl font-semibold ${accent.numeral}`}
                      >
                        {classInfo.grade}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-heading text-lg font-semibold leading-tight text-forest">
                          {classInfo.label}
                        </h3>
                        <p className="truncate text-xs uppercase tracking-[0.14em] text-trail-light">
                          {title}
                        </p>
                      </div>
                    </div>

                    <div className={`mt-6 h-px w-full ${accent.rule} opacity-20`} />

                    <p className="mt-6 text-sm leading-relaxed text-trail">
                      {stripPlaceholder(classInfo.outdoorEdConnection ?? "")}
                    </p>

                    <Link
                      href={`/class/${classInfo.id}`}
                      className={`group mt-auto flex items-center gap-2 pt-7 text-sm font-semibold ${accent.cue}`}
                    >
                      Go to {classInfo.label}
                      <span
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Closing
          --------------------------------------------------------------- */}
      <section className="bg-parchment">
        <TreeLine />
      </section>

      <section className="bg-forest-deep px-6 pb-20 pt-10 text-parchment">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <ScoutMascot size={80} />
          <h2 className="text-2xl font-semibold text-parchment sm:text-3xl">
            Questions before we go?
          </h2>
          <p className="max-w-md text-[0.975rem] leading-relaxed text-parchment/80">
            Ask Scout about the science we&apos;ll be doing out there. For
            anything about permission slips, medications, or who you&apos;re
            bunking with, ask your teacher.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-warm-white shadow-lift"
          >
            Pick your class
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
