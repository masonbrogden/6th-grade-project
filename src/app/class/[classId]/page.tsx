import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ChatWidget from "@/components/ChatWidget";
import { PUBLISHED_CLASSES, getClassById } from "@/lib/classes";
import {
  CHIP_CLASSES,
  accentForGrade,
  accents,
  shortTopicLabel,
  splitUnit,
  topicLabel,
} from "@/lib/classDisplay";

type ClassPageProps = { params: Promise<{ classId: string }> };

export function generateStaticParams() {
  return PUBLISHED_CLASSES.map((classInfo) => ({ classId: classInfo.id }));
}

export async function generateMetadata({
  params,
}: ClassPageProps): Promise<Metadata> {
  const { classId } = await params;
  const classInfo = getClassById(classId);
  if (!classInfo) return { title: "Class not found" };

  const { title } = splitUnit(classInfo.unit);
  return {
    title: `${classInfo.label} — Ask Scout`,
    description: `Current unit: ${title}`,
  };
}

export default async function ClassPage({ params }: ClassPageProps) {
  const { classId } = await params;
  const classInfo = getClassById(classId);
  if (!classInfo) notFound();

  const accent = accents[accentForGrade(classInfo.grade)];
  const { title, detail } = splitUnit(classInfo.unit);
  const chips = classInfo.topics.slice(0, 4).map(topicLabel);
  const starters = classInfo.topics
    .slice(0, 3)
    .map((topic) => `Help me understand ${shortTopicLabel(topic)}`);

  return (
    <main className="flex-1">
      {/* Unit header */}
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
            All classes
          </Link>

          <div className="mt-7 flex items-center gap-4">
            <span
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-heading text-2xl font-semibold ${accent.numeral}`}
            >
              {classInfo.grade}
            </span>
            <div className="min-w-0">
              <h1 className="font-heading text-2xl font-semibold leading-tight text-forest sm:text-3xl">
                {classInfo.label}
              </h1>
              <p className="text-xs uppercase tracking-[0.14em] text-trail-light">
                Grade {classInfo.grade}
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-border bg-surface p-6 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-trail-light">
              Current unit
            </p>
            <h2 className="mt-1.5 font-heading text-xl font-semibold leading-snug text-forest">
              {title}
            </h2>
            {detail ? (
              <p className="mt-2 text-sm leading-relaxed text-trail">
                {detail}
              </p>
            ) : null}

            <ul className="mt-5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <li key={chip} className={`${CHIP_CLASSES} ${accent.chip}`}>
                  {chip}
                </li>
              ))}
            </ul>

            {classInfo.outdoorEdConnection ? (
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-shade">
                  On the Outdoor Ed trip
                </p>
                <p className="mt-2 text-sm leading-relaxed text-trail">
                  {classInfo.outdoorEdConnection.replace(
                    /^PLACEHOLDER\s*—\s*/,
                    "",
                  )}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Word list */}
      <section className="bg-parchment px-6 pb-10">
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href="/vocabulary"
            className="group flex items-center gap-4 rounded-3xl border border-border bg-surface p-5 shadow-card transition-[box-shadow,border-color] duration-300 hover:border-amber hover:shadow-lift"
          >
            <span
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-tint text-lg"
            >
              🔤
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-heading text-base font-semibold text-forest">
                Word list
              </span>
              <span className="block text-sm text-trail">
                Every vocabulary word from Investigations in Earth Science, with
                definitions.
              </span>
            </span>
            <span
              aria-hidden
              className="shrink-0 text-amber-shade transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Chat */}
      <section className="bg-parchment-deep px-6 pb-20 pt-10">
        <div className="mx-auto w-full max-w-3xl">
          <ChatWidget
            classId={classInfo.id}
            greeting={`Hi! I'm Scout. We're working on ${title} right now — ask me anything about it and I'll help you think it through.`}
            starters={starters}
          />

          <p className="mx-auto mt-6 max-w-md text-center text-xs leading-relaxed text-trail-light">
            Scout helps you find answers instead of handing them over, and
            can&apos;t help with other subjects. For anything about grades, due
            dates, or how you&apos;re feeling, talk to your teacher.
          </p>
        </div>
      </section>
    </main>
  );
}
