/**
 * Flesch-Kincaid grade level for the site's student-facing text.
 * Approximate (syllables are estimated), but consistent enough to compare
 * before and after a rewrite.
 *
 * Run:  node scripts/reading-level.mjs
 */
import { VOCABULARY } from "../src/lib/vocabulary.ts";
import { CLASSES } from "../src/lib/classes.ts";

export function syllables(word) {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return 0;
  if (w.length <= 3) return 1;
  const groups = w.replace(/(?:es|ed|[^laeiouy]e)$/, "").match(/[aeiouy]+/g);
  return Math.max(1, groups ? groups.length : 1);
}

export function fleschKincaid(text) {
  const sentences = Math.max(1, (text.match(/[.!?]+/g) || []).length);
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return 0;
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  return 0.39 * (words.length / sentences) + 11.8 * (syl / words.length) - 15.59;
}

function report(label, texts) {
  const grades = texts.map(fleschKincaid);
  const mean = grades.reduce((a, b) => a + b, 0) / grades.length;
  const hard = grades.filter((g) => g > 8).length;
  console.log(
    `${label.padEnd(26)} mean grade ${mean.toFixed(1)}   above grade 8: ${hard}/${grades.length}`,
  );
  return grades;
}

const grades = report("vocabulary definitions", VOCABULARY.map((v) => v.definition));
report("grade 6 topics", CLASSES[0].topics);
report("grade 6 unit + trip", [CLASSES[0].unit, CLASSES[0].outdoorEdConnection ?? ""]);

const worst = VOCABULARY.map((v, i) => [grades[i], v])
  .sort((a, b) => b[0] - a[0])
  .slice(0, 6);
console.log("\nhardest definitions right now:");
for (const [g, v] of worst) {
  console.log(`  grade ${g.toFixed(1)}  ${v.term}: ${v.definition.slice(0, 96)}`);
}
