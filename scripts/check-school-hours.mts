/**
 * Checks isWithinSchoolHours against fixed instants.
 *
 * Run with:  node scripts/check-school-hours.mts
 *
 * Dates are written as UTC instants with their America/New_York meaning in the
 * label, because that is the pairing the function actually has to get right.
 */

import { SCHOOL_HOURS, isWithinSchoolHours } from "../src/lib/hours.ts";

type Case = { iso: string; label: string; expected: boolean };

let failures = 0;

function check(cases: Case[]) {
  for (const { iso, label, expected } of cases) {
    const actual = isWithinSchoolHours(new Date(iso));
    const ok = actual === expected;
    if (!ok) failures++;
    console.log(
      `  ${ok ? "PASS" : "FAIL"}  ${label.padEnd(34)} expected ${String(expected).padEnd(5)} got ${actual}`,
    );
  }
}

const overrideWasOn = SCHOOL_HOURS.alwaysOpen;

console.log(
  `\nSCHOOL_HOURS: ${SCHOOL_HOURS.start}–${SCHOOL_HOURS.end} ${SCHOOL_HOURS.timeZone}, ` +
    `${SCHOOL_HOURS.activeWeekdays.join("/")}`,
);
console.log(`alwaysOpen override is currently ${overrideWasOn ? "ON" : "OFF"}.\n`);

// --- The real schedule, with the dev override forced off -------------------
SCHOOL_HOURS.alwaysOpen = false;

console.log("Schedule (alwaysOpen = false):");
check([
  {
    iso: "2026-09-30T16:00:00Z",
    label: "Wed 12:00 EDT — school hours",
    expected: true,
  },
  {
    iso: "2026-09-30T23:30:00Z",
    label: "Wed 19:30 EDT — weekday evening",
    expected: false,
  },
  {
    iso: "2026-10-03T16:00:00Z",
    label: "Sat 12:00 EDT — weekend",
    expected: false,
  },
]);

console.log("\nBoundaries (start inclusive, end exclusive):");
check([
  {
    iso: "2026-09-30T12:00:00Z",
    label: "Wed 08:00 EDT — opening minute",
    expected: true,
  },
  {
    iso: "2026-09-30T19:29:00Z",
    label: "Wed 15:29 EDT — last minute open",
    expected: true,
  },
  {
    iso: "2026-09-30T19:30:00Z",
    label: "Wed 15:30 EDT — closing minute",
    expected: false,
  },
]);

// --- The override itself ----------------------------------------------------
SCHOOL_HOURS.alwaysOpen = true;

console.log("\nDev override (alwaysOpen = true):");
check([
  {
    iso: "2026-10-03T16:00:00Z",
    label: "Sat 12:00 EDT — forced open",
    expected: true,
  },
  {
    iso: "2026-09-30T23:30:00Z",
    label: "Wed 19:30 EDT — forced open",
    expected: true,
  },
]);

SCHOOL_HOURS.alwaysOpen = overrideWasOn;

if (failures > 0) {
  console.log(`\n${failures} check(s) failed.\n`);
  process.exit(1);
}
console.log("\nAll checks passed.\n");
if (overrideWasOn) {
  console.log(
    "Note: alwaysOpen is ON in src/lib/hours.ts, so the live site ignores the\n" +
      "schedule above and answers at any hour. Set it to false before students use it.\n",
  );
}
