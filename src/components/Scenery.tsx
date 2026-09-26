/**
 * Shared scenery for the trail theme.
 *
 * These carry the illustrated feel across pages, so they live here rather than
 * in any one route — the ridge and the treeline are design-system pieces, the
 * same way the palette is.
 */

/* Scenery tints, mixed from --forest toward --parchment. They exist only for
   the illustration, which is why they aren't palette tokens. */
const RIDGE_FAR = "#b8c3b9";
const RIDGE_MID = "#82998d";
const RIDGE_NEAR = "var(--forest)";
const TREE = "var(--forest-deep)";
const GROUND = "var(--parchment-deep)";

export function TrailMarker({ label }: { label: string }) {
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
export function RidgeScene() {
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
export function TreeLine() {
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
