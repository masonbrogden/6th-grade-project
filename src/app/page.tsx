"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import ScoutMascot from "@/components/ScoutMascot";
import { CLASSES, type ClassInfo } from "@/lib/classes";
import {
  CHIP_CLASSES,
  accents,
  splitUnit,
  topicLabel,
} from "@/lib/classDisplay";

/* Scenery tints, mixed from --forest toward --parchment. Kept local to this
   page because they exist only for the illustration, not for UI. */
const RIDGE_FAR = "#b8c3b9";
const RIDGE_MID = "#82998d";
const RIDGE_NEAR = "var(--forest)";
const TREE = "var(--forest-deep)";
const GROUND = "var(--parchment-deep)";


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

function TrailMarker({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span
        aria-hidden
        className="h-10 w-px border-l border-dashed border-trail-light/60"
      />
      <span aria-hidden className="my-2 h-2 w-2 rounded-full bg-amber" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-trail-light">
        {label}
      </p>
    </div>
  );
}

/** Layered hills that carry the hero down into the classes section. */
function RidgeScene() {
  /* Bases sit inside the near ridge's fill; heights clear its highest point
     (y=232) so every tree reads as a silhouette on the hillside. */
  const trees = [
    { x: 120, h: 66, w: 30 },
    { x: 178, h: 78, w: 34 },
    { x: 232, h: 60, w: 27 },
    { x: 600, h: 72, w: 32 },
    { x: 655, h: 62, w: 28 },
    { x: 712, h: 80, w: 35 },
    { x: 1035, h: 64, w: 29 },
    { x: 1090, h: 76, w: 33 },
    { x: 1300, h: 68, w: 31 },
    { x: 1356, h: 60, w: 27 },
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 300"
      preserveAspectRatio="none"
      className="block h-[170px] w-full sm:h-[240px]"
    >
      <path
        d="M0 150 C90 108 160 46 270 74 C380 102 440 158 560 140 C680 122 730 52 850 78 C970 104 1040 160 1160 142 C1280 124 1350 58 1440 86 L1440 300 L0 300 Z"
        fill={RIDGE_FAR}
      />
      <path
        d="M0 205 C120 182 200 122 310 150 C430 180 480 218 610 200 C740 182 800 126 920 152 C1040 178 1120 216 1240 198 C1340 183 1390 150 1440 164 L1440 300 L0 300 Z"
        fill={RIDGE_MID}
      />
      <path
        d="M0 258 C160 244 280 232 420 242 C560 252 640 262 780 254 C920 246 1020 232 1160 244 C1300 256 1380 260 1440 252 L1440 300 L0 300 Z"
        fill={RIDGE_NEAR}
      />
      {trees.map((tree) => (
        <path
          key={tree.x}
          d={`M${tree.x - tree.w / 2} 276 L${tree.x} ${276 - tree.h} L${tree.x + tree.w / 2} 276 Z`}
          fill={TREE}
        />
      ))}
      <path
        d="M0 284 C240 274 520 290 780 282 C1040 274 1240 288 1440 280 L1440 300 L0 300 Z"
        fill={GROUND}
      />
    </svg>
  );
}

/** The forest edge you walk into at the Outdoor Ed section. */
function TreeLine() {
  const trees = [
    { x: 90, h: 38, w: 22 },
    { x: 145, h: 30, w: 17 },
    { x: 330, h: 44, w: 25 },
    { x: 385, h: 32, w: 18 },
    { x: 620, h: 36, w: 20 },
    { x: 675, h: 46, w: 26 },
    { x: 900, h: 34, w: 19 },
    { x: 1050, h: 42, w: 24 },
    { x: 1105, h: 30, w: 17 },
    { x: 1320, h: 40, w: 23 },
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="block h-[70px] w-full sm:h-[90px]"
    >
      {trees.map((tree) => (
        <path
          key={tree.x}
          d={`M${tree.x - tree.w / 2} 72 L${tree.x} ${72 - tree.h} L${tree.x + tree.w / 2} 72 Z`}
          fill="var(--forest-deep)"
        />
      ))}
      <path
        d="M0 60 C240 44 480 68 720 56 C960 44 1200 66 1440 54 L1440 90 L0 90 Z"
        fill="var(--forest-deep)"
      />
    </svg>
  );
}
