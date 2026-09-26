/**
 * School-hours gate for the chatbot.
 *
 * Times are evaluated in the school's timezone, not the server's and not the
 * student's, so a student on a phone set to another timezone still gets the
 * same answer as the classroom.
 */

/** Short weekday names, matching Intl's "en-US" short weekday output. */
export type Weekday = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export type SchoolHoursConfig = {
  /**
   * Bypass the gate entirely and treat every moment as open.
   * Intended for local development only — see the TEMPORARY note below.
   */
  alwaysOpen: boolean;
  /** IANA timezone for the school. */
  timeZone: string;
  /** Opening time, 24-hour "HH:MM", in `timeZone`. Inclusive. */
  start: string;
  /** Closing time, 24-hour "HH:MM", in `timeZone`. Exclusive. */
  end: string;
  /** Days the chatbot is available. */
  activeWeekdays: Weekday[];
};

/** ⚠️ PLACEHOLDER values — confirm the real bell schedule and timezone. */
export const SCHOOL_HOURS: SchoolHoursConfig = {
  // ⚠️ TEMPORARY — the gate is held open so the site is usable at any hour
  //    while it's being built. Set this to false before students use it, and
  //    the start/end/activeWeekdays below take over again.
  alwaysOpen: true,
  timeZone: "America/New_York",
  start: "08:00",
  end: "15:30",
  activeWeekdays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
};

/** Parse "HH:MM" into minutes since midnight. Throws on a malformed config. */
function toMinutes(clock: string): number {
  const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(clock);
  if (!match) {
    throw new Error(
      `SCHOOL_HOURS expects a 24-hour "HH:MM" time, received "${clock}".`,
    );
  }
  return Number(match[1]) * 60 + Number(match[2]);
}

/**
 * Is `now` inside school hours, in the school's timezone?
 *
 * `start` is inclusive and `end` is exclusive, so an end of "15:30" means
 * 3:29 PM is in and 3:30 PM is out.
 */
export function isWithinSchoolHours(now: Date): boolean {
  if (SCHOOL_HOURS.alwaysOpen) {
    return true;
  }

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SCHOOL_HOURS.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const partValue = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  const weekday = partValue("weekday") as Weekday;
  if (!SCHOOL_HOURS.activeWeekdays.includes(weekday)) {
    return false;
  }

  const minutesNow =
    Number(partValue("hour")) * 60 + Number(partValue("minute"));

  return (
    minutesNow >= toMinutes(SCHOOL_HOURS.start) &&
    minutesNow < toMinutes(SCHOOL_HOURS.end)
  );
}

/** Render "HH:MM" as a friendly "8:00 AM" for student-facing copy. */
function formatClockTime(clock: string): string {
  const totalMinutes = toMinutes(clock);
  const hour24 = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  const period = hour24 < 12 ? "AM" : "PM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}

/** Shown to students who open the chat outside school hours. */
export const OUTSIDE_HOURS_MESSAGE = `Scout is off the trail right now. I'm around on school days between ${formatClockTime(
  SCHOOL_HOURS.start,
)} and ${formatClockTime(
  SCHOOL_HOURS.end,
)} — come find me then and we'll pick up where we left off. If you need help before that, your teacher is the best person to ask.`;
