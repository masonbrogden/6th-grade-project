/**
 * Presentation helpers shared by the home page and the class pages.
 *
 * These live outside the components so the two views can't drift apart — the
 * grade accent, the chip styling, and the way a unit string is split all need
 * to agree wherever a class is rendered.
 */

/** Content is still stubbed; this becomes a no-op once curriculum lands. */
export function stripPlaceholder(text: string): string {
  return text.replace(/^PLACEHOLDER\s*—\s*/, "");
}

/** "Earth's Systems: how water moves" -> heading + supporting line. */
export function splitUnit(unit: string): {
  title: string;
  detail: string | null;
} {
  const clean = stripPlaceholder(unit);
  const separator = clean.indexOf(": ");
  if (separator === -1) return { title: clean, detail: null };
  return {
    title: clean.slice(0, separator),
    detail: clean.slice(separator + 2),
  };
}

/** Topics read "the water cycle: evaporation, ..." — the head makes a chip. */
export function topicLabel(topic: string): string {
  const clean = stripPlaceholder(topic);
  return clean.split(":")[0].trim();
}

/* Topic wording is the teacher's, so chips truncate rather than wrap. `min-w-0`
   is load-bearing: a flex item defaults to min-width:auto and would otherwise
   refuse to shrink below its text, pushing the whole page wider than the phone. */
export const CHIP_CLASSES =
  "min-w-0 max-w-full truncate rounded-full px-3 py-1 text-xs font-medium";

export const accents = {
  forest: {
    numeral: "bg-forest text-parchment",
    chip: "bg-forest-tint text-forest",
    rule: "bg-forest",
    cue: "text-forest",
    hoverBorder: "group-hover:border-forest",
  },
  amber: {
    numeral: "bg-amber text-forest-deep",
    chip: "bg-amber-tint text-trail-deep",
    rule: "bg-amber",
    cue: "text-amber-shade",
    hoverBorder: "group-hover:border-amber",
  },
} as const;

export type AccentName = keyof typeof accents;

/** 6th grade reads forest green, 7th reads amber — consistent site-wide. */
export function accentForGrade(grade: number): AccentName {
  return grade === 7 ? "amber" : "forest";
}

/**
 * A short form of a topic, for places that need a tight label (chat starters).
 * Teacher-written topics often run long — "weather vs. climate, and how to read
 * a weather map" — so keep only the leading clause.
 */
export function shortTopicLabel(topic: string): string {
  return topicLabel(topic).split(",")[0].trim();
}
