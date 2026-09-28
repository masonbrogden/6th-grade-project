import type { Metadata } from "next";
import Link from "next/link";

import ScoutMascot from "@/components/ScoutMascot";
import { RidgeScene, TrailMarker, TreeLine } from "@/components/Scenery";
import { PUBLISHED_CLASSES } from "@/lib/classes";
import {
  accentForGrade,
  accents,
  splitUnit,
  stripPlaceholder,
} from "@/lib/classDisplay";

export const metadata: Metadata = {
  title: "Outdoor Ed — Class, but outside",
  description:
    "Where we're going, what to pack, and how the trip ties into class.",
};

/**
 * Program facts come from the MCPS Outdoor Environmental Education material.
 * Anything still unknown is prefixed "PLACEHOLDER —" and covered by the draft
 * banner in the trip section; delete the banner once none are left.
 */
const TRIP = {
  dates: "PLACEHOLDER — dates to be confirmed",
  length: "Three days and two nights, staying overnight on site",
  place:
    "One of three environmental education sites. The LE Smith Center is run by MCPS; the other two are privately owned sites MCPS contracts each year. Your school will tell you which one you are assigned.",
  staffing:
    "Your own teachers come along and teach alongside the site's outdoor environmental educator.",
  leaving: "PLACEHOLDER — departure time and pickup point to be confirmed",
  returning: "PLACEHOLDER — return time to be confirmed",
  bring: [
    "PLACEHOLDER — packing list to be confirmed by your school",
    "PLACEHOLDER — sleeping bag and a pillow",
    "PLACEHOLDER — refillable water bottle",
    "PLACEHOLDER — rain jacket and a warm layer",
    "PLACEHOLDER — broken-in shoes you can get muddy",
    "PLACEHOLDER — field notebook and two pencils",
  ],
  leave: "PLACEHOLDER — your school will confirm what to leave at home.",
};

/** The lesson menu from the MCPS program material. Schools pick four or five. */
const LESSONS = [
  {
    name: "Stream/Pond Investigation",
    detail:
      "Investigate the interactions within the local watershed and work in groups to assess the health of a nearby stream or pond.",
  },
  {
    name: "Exploring the Watershed Using Map and Compass",
    detail:
      "Survey the surrounding forest and riparian buffers in the local watershed, navigating by map and compass.",
  },
  {
    name: "Confidence Course",
    detail:
      "A series of mentally and physically challenging team and individual events built to strengthen teamwork, cooperation, and self-esteem.",
  },
  {
    name: "Predator/Prey Relationships",
    detail:
      "Explore the predator-prey relationships animals exhibit in our local ecosystem through an outdoor simulation.",
  },
  {
    name: "Patterns of Settlement",
    detail:
      "Collect environmental and geographic data using GPS units to decide which location has the best settlement potential.",
  },
  {
    name: "Treasure Earth",
    detail:
      "Work in groups to collect data on our natural resources through geocaching.",
  },
  {
    name: "Site History Lessons",
    detail:
      "Lessons drawn from the history of the outdoor education sites themselves.",
  },
  {
    name: "Student Service Learning",
    detail:
      "An environmental stewardship lesson — habitat improvement, energy conservation, or protecting natural resources.",
  },
  {
    name: "Evening Activities",
    detail:
      "Instruction does not stop at sundown. After dinner there are indoor and outdoor activities chosen by your school.",
  },
];

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
              <strong className="font-semibold">
                Dates and packing list aren&apos;t final.
              </strong>{" "}
              The program details below are from MCPS, but times and what to
              bring come from your school — don&apos;t pack from this page yet.
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
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-trail-light">
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
                How it works
              </h3>
              <dl className="mt-5 flex flex-col gap-4 text-sm">
                {[
                  ["How long", TRIP.length],
                  ["Who teaches", TRIP.staffing],
                  [
                    "Lessons",
                    "Schools pick four or five of the lessons below, plus evening activities.",
                  ],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-trail-light">
                      {label}
                    </dt>
                    <dd className="mt-1 leading-relaxed text-trail">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Lesson menu
          --------------------------------------------------------------- */}
      <section className="bg-parchment-deep px-6 pb-20">
        <div className="mx-auto w-full max-w-4xl">
          <h3 className="text-center font-heading text-2xl font-semibold text-forest">
            Lessons you might do
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-trail">
            Each school builds its own schedule from this list, so you
            won&apos;t do all of them.
          </p>

          <ul className="mt-8 grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
            {LESSONS.map((lesson) => (
              <li
                key={lesson.name}
                className="rounded-2xl border border-border bg-surface p-5 shadow-card"
              >
                <p className="font-heading text-base font-semibold text-forest">
                  {lesson.name}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-trail">
                  {lesson.detail}
                </p>
              </li>
            ))}
          </ul>

          {/* Families reliably get this wrong, so it is called out plainly. */}
          <p className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-sm leading-relaxed text-trail">
            <span aria-hidden className="mt-0.5 shrink-0 text-base">
              ★
            </span>
            <span>
              <strong className="font-semibold text-forest">
                About Student Service Learning hours.
              </strong>{" "}
              Going on the trip does not by itself earn the 10 SSL hours. You
              earn those by passing grade 6 science and completing the companion
              environmental project — often a study of how much energy or water
              you use, followed by a 30-day Intent to Act pledge.
            </span>
          </p>
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
            {PUBLISHED_CLASSES.filter(
              (classInfo) => classInfo.outdoorEdConnection,
            ).map((classInfo) => {
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

                  <div
                    className={`mt-6 h-px w-full ${accent.rule} opacity-20`}
                  />

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
            })}
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
