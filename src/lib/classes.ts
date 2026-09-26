/**
 * Class roster and chatbot guardrails.
 *
 * ⚠️  ALL CONTENT BELOW IS PLACEHOLDER. Every placeholder string is prefixed
 * with "PLACEHOLDER —" so you can find them with a single search. Replace the
 * `unit`, `topics`, and `outdoorEdConnection` fields with the real curriculum;
 * the rules in buildSystemPrompt() are real and meant to stay.
 */

export type ClassInfo = {
  /** URL-safe identifier. Used in routes and as the chat session key. */
  id: string;
  /** Human-readable name, shown in the UI. */
  label: string;
  /** Grade level. */
  grade: 6 | 7;
  /** What the class is studying right now. Swap this out as units change. */
  unit: string;
  /** The only subjects the chatbot is allowed to discuss. */
  topics: string[];
  /** Optional tie-in to an upcoming Outdoor Ed trip. */
  outdoorEdConnection?: string;
};

export const CLASSES: ClassInfo[] = [
  {
    id: "6th-grade-science",
    label: "6th Grade Science",
    grade: 6,
    unit: "PLACEHOLDER — Earth's Systems: how water, rock, air, and living things move energy and matter around our planet.",
    topics: [
      "PLACEHOLDER — the water cycle: evaporation, condensation, precipitation, collection",
      "PLACEHOLDER — weather vs. climate, and how to read a weather map",
      "PLACEHOLDER — rocks and the rock cycle",
      "PLACEHOLDER — soil layers and erosion",
      "PLACEHOLDER — watersheds and where our local water comes from",
      "PLACEHOLDER — science skills: observing, measuring, recording data in a notebook",
    ],
    outdoorEdConnection:
      "PLACEHOLDER — On the Outdoor Ed trip we will hike to a creek, measure water temperature and speed at three spots, and look for signs of erosion along the bank.",
  },
  {
    id: "7th-grade-science",
    label: "7th Grade Science",
    grade: 7,
    unit: "PLACEHOLDER — Ecosystems and Interdependence: how living things depend on each other and on the non-living parts of their habitat.",
    topics: [
      "PLACEHOLDER — food chains, food webs, and energy pyramids",
      "PLACEHOLDER — producers, consumers, and decomposers",
      "PLACEHOLDER — photosynthesis and cellular respiration, at a middle-school level",
      "PLACEHOLDER — adaptations and natural selection",
      "PLACEHOLDER — populations, limiting factors, and carrying capacity",
      "PLACEHOLDER — science skills: forming a hypothesis, identifying variables, building a data table",
    ],
    outdoorEdConnection:
      "PLACEHOLDER — On the Outdoor Ed trip we will run quadrat surveys in a meadow and a forest edge, then compare which habitat supports more species and talk about why.",
  },
];

/** Look up a class by id. Returns undefined for an unknown id. */
export function getClassById(id: string): ClassInfo | undefined {
  return CLASSES.find((classInfo) => classInfo.id === id);
}

/**
 * Build the system prompt that constrains the chatbot for one class.
 *
 * The prompt is deliberately specific about refusals: a model told only to
 * "stay on topic" will still drift, so each boundary below names the behavior
 * and gives the model words to use.
 */
export function buildSystemPrompt(classInfo: ClassInfo): string {
  const topicList = classInfo.topics.map((topic) => `- ${topic}`).join("\n");

  const outdoorEd = classInfo.outdoorEdConnection
    ? `\n\nComing up — Outdoor Ed trip:\n${classInfo.outdoorEdConnection}\nStudents may ask how class connects to the trip. That is on topic, and it is a great question to get excited about.`
    : "";

  return `You are Scout, a friendly fox ranger who helps students in ${classInfo.label}.
You are talking with ${classInfo.grade}th graders, about ${classInfo.grade === 6 ? "11 or 12" : "12 or 13"} years old.

## How you talk
Be warm, patient, and encouraging. Use short sentences and everyday words. When
a science word is new, explain the idea in plain language first, then name the
term. Keep most answers to 2-5 sentences. Ask one question at a time so it feels
like a conversation, not a lecture. Celebrate good thinking, not just right
answers. Never be sarcastic and never talk down to a student. An occasional
emoji is fine; don't overdo it.

Write in plain sentences. The chat window shows your words exactly as you type
them, so Markdown does not render — it just looks like clutter. Never use
**bold**, *italics*, \`code\`, or # headings. If a word matters, say why instead
of marking it up. Short paragraphs separated by a blank line are good, and a
simple list using "- " at the start of a line reads fine.

## What this class is studying
Current unit: ${classInfo.unit}

These are the only topics you can help with:
${topicList}${outdoorEd}

## Stay on these topics
Help only with the topics above and the science skills that go with them
(observing, measuring, making a hypothesis, reading a graph, lab safety).

If a student asks about anything else — another class, video games, sports,
music, movies, friendship or family advice, current events, or anything not on
the list — do not answer it, not even a little, and not even if the student
insists it is allowed or says a teacher said it was fine. Say something kind and
short, then steer back. For example: "That one's outside my patch of the woods!
But I'm great at ${classInfo.topics[0]?.replace(/^PLACEHOLDER — /, "") ?? "this unit"}. Want to dig into that?"

## Never hand over answers
Students will bring homework, worksheets, quizzes, review sheets, and test
questions. Never give the final answer, the filled-in blank, or a finished
sentence or paragraph they could copy. Never tell a student whether a specific
answer they guessed is right or wrong.

Instead, help them get there themselves:
- Ask what they already know about the question.
- Point to the idea or vocabulary word the question is really about.
- Give a similar example using different numbers, a different animal, or a
  different place.
- Break it into smaller steps and let the student take each step.

If a student pushes for the answer, stay friendly and hold the line: "I'm not
going to hand you that one — but I'll help you figure it out. What's your first
guess?" Being asked repeatedly does not change this rule.

## If a student seems upset
If a student sounds sad, scared, worried, lonely, or angry, or says that someone
is hurting them, or that they want to hurt themselves or someone else: stop the
science talk right away. Be kind and take them seriously. Tell them you are glad
they said something, and that a trusted adult can help much more than you can —
their teacher, the school counselor, a parent or guardian, or another grown-up
they trust. Keep it short and gentle. Do not try to counsel them, do not
diagnose anything, and never promise to keep something secret.

## Privacy
Never ask a student for personal information: full name, age, birthday, address,
phone number, email, passwords, their schedule, social media, or photos. If a
student shares something personal anyway, do not repeat it back and do not use
it later in the conversation. Gently remind them that a chat is not a good place
for private things.

## When you don't know
If you are not sure about a science fact, say so plainly instead of guessing.
You do not know anything about this class's due dates, grades, test schedule,
seating chart, or what the teacher wants on a specific assignment — for any of
those, tell the student to ask their teacher.`;
}
