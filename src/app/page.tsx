"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import ScoutMascot from "@/components/ScoutMascot";
import { CLASSES, type ClassInfo } from "@/lib/classes";
import { RidgeScene, TrailMarker, TreeLine } from "@/components/Scenery";
import {
  CHIP_CLASSES,
  accents,
  splitUnit,
  topicLabel,
} from "@/lib/classDisplay";



export default function Home() {
  const reduceMotion = useReducedMotion();
  const sixth = CLASSES.find((entry) => entry.grade === 6);
  const seventh = CLASSES.find((entry) => entry.grade === 7);

  return (
    <main className="flex-1">
      {/* ---------------------------------------------------------------
          Hero — parchment sky, low sun, Scout on the ridge
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
        {/* Sits beside the mascot on phones so it can't collide with the badge. */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-5 top-24 h-16 w-16 rounded-full sm:right-[12%] sm:top-14 sm:h-28 sm:w-28"
          style={{ background: "var(--amber)", opacity: 0.85 }}
        />

        <div className="relative mx-auto w-full max-w-3xl px-6 pb-4 pt-14 text-center sm:pt-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-trail"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            Science · Grades 6 &amp; 7
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ScoutMascot
                size={132}
                title="Scout, a fox ranger in a wide-brimmed hat"
                className="drop-shadow-[0_12px_20px_rgba(74,49,35,0.18)]"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-7 text-balance text-4xl font-semibold leading-[1.08] text-forest sm:text-5xl"
          >
            Every good question
            <br className="hidden sm:block" /> starts a trail.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mx-auto mt-5 max-w-lg text-pretty text-base leading-relaxed text-trail sm:text-lg"
          >
            Hi, I&apos;m Scout. Pick your class and I&apos;ll help you dig into
            whatever you&apos;re studying right now. I won&apos;t hand you the
            answers — but I&apos;ll help you find them yourself.
          </motion.p>
        </div>

        <RidgeScene />
      </section>

      {/* ---------------------------------------------------------------
          Classes
          --------------------------------------------------------------- */}
      <section className="bg-parchment-deep px-6 pb-20 pt-4">
        <div className="mx-auto w-full max-w-4xl">
          <TrailMarker label="Choose your path" />

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mt-5 text-center text-3xl font-semibold text-forest sm:text-4xl"
          >
            Two classes, two trails
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="mx-auto mt-3 max-w-md text-center text-trail"
          >
            Each one has its own unit going right now. Head for yours.
          </motion.p>

          {/* grid-cols-1 is deliberate: it emits minmax(0,1fr), so a long
              topic chip can't force the column wider than the phone. */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {sixth ? (
              <ClassCard classInfo={sixth} accent="forest" delay={0} />
            ) : null}
            {seventh ? (
              <ClassCard classInfo={seventh} accent="amber" delay={0.1} />
            ) : null}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          Outdoor Ed call to action
          --------------------------------------------------------------- */}
      <section className="bg-parchment-deep">
        <TreeLine />
      </section>

      <section className="bg-forest-deep px-6 pb-20 pt-10 text-parchment">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <ScoutMascot size={92} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="flex-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
              Coming up
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-parchment sm:text-4xl">
              Outdoor Ed is almost here
            </h2>
            <p className="mt-4 max-w-lg text-[0.975rem] leading-relaxed text-parchment/80">
              Everything we&apos;re studying in class turns up out on the trail —
              creeks to measure, meadows to survey, and a lot of fresh air.
              Here&apos;s where we&apos;re going and what to pack.
            </p>

            <motion.div
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-7 inline-block"
            >
              <Link
                href="/outdoor-ed"
                className="group inline-flex items-center gap-2.5 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-warm-white shadow-lift"
              >
                See the trip guide
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ------------------------------------------------------------------ */

function ClassCard({
  classInfo,
  accent,
  delay,
}: {
  classInfo: ClassInfo;
  accent: keyof typeof accents;
  delay: number;
}) {
  const reduceMotion = useReducedMotion();
  const style = accents[accent];
  const { title, detail } = splitUnit(classInfo.unit);
  const chips = classInfo.topics.slice(0, 3).map(topicLabel);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      className="h-full"
    >
      <Link
        href={`/class/${classInfo.id}`}
        className={`group flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-card transition-[box-shadow,border-color] duration-300 hover:shadow-lift ${style.hoverBorder}`}
      >
        <div className="flex items-center gap-4">
          <span
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-heading text-2xl font-semibold ${style.numeral}`}
          >
            {classInfo.grade}
          </span>
          <div>
            <h3 className="font-heading text-xl font-semibold text-forest">
              {classInfo.label}
            </h3>
            <p className="text-xs uppercase tracking-[0.14em] text-trail-light">
              Grade {classInfo.grade}
            </p>
          </div>
        </div>

        <div className={`mt-6 h-px w-full ${style.rule} opacity-20`} />

        <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-trail-light">
          Current unit
        </p>
        <p className="mt-1.5 font-heading text-lg font-semibold leading-snug text-forest">
          {title}
        </p>
        {detail ? (
          <p className="mt-2 text-sm leading-relaxed text-trail">{detail}</p>
        ) : null}

        <ul className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <li
              key={chip}
              className={`${CHIP_CLASSES} ${style.chip}`}
            >
              {chip}
            </li>
          ))}
        </ul>

        <span
          className={`mt-auto flex items-center gap-2 pt-7 text-sm font-semibold ${style.cue}`}
        >
          Start exploring
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </Link>
    </motion.div>
  );
}
