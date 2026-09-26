import type { SVGProps } from "react";

type ScoutMascotProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  /** Rendered width and height in pixels. */
  size?: number;
  /** Accessible name. Omit to render the mascot as decorative. */
  title?: string;
};

/* Tokens first, literals as fallback so Scout still reads correctly anywhere
   the design system isn't loaded (static exports, email, isolated previews). */
const fur = "var(--amber, #d9822b)";
const furShade = "var(--amber-shade, #b8661c)";
const cream = "var(--warm-white, #fffdf8)";
const hatCrown = "var(--trail, #6b4a34)";
const hatBrim = "var(--trail-deep, #4a3123)";
const hatBand = "var(--forest, #1f4d3d)";
const ink = "var(--forest, #1f4d3d)";

/**
 * Scout — the project mascot. A flat-illustrated fox in a ranger hat.
 * Built from triangles, ellipses and a few arcs, so it holds up from 24px to
 * full-bleed. The tapered head and the cream mask between the eyes are what
 * make it read as a fox rather than a bear; keep both if you edit the paths.
 */
export default function ScoutMascot({
  size = 64,
  title,
  ...props
}: ScoutMascotProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      {...props}
    >
      {title ? <title>{title}</title> : null}

      {/* Ears — bases tuck behind the crown and under the brim */}
      <path d="M34 56 L18 8 L60 42 Z" fill={fur} />
      <path d="M37 51 L25 19 L53 40 Z" fill={furShade} />
      <path d="M94 56 L110 8 L68 42 Z" fill={fur} />
      <path d="M91 51 L103 19 L75 40 Z" fill={furShade} />

      {/* Head — wide at the brow, tapering to a narrow chin */}
      <path
        d="M64 46 C84 46 102 52 106 64 C109 76 96 96 76 110 C71 114 68 118 64 118 C60 118 57 114 52 110 C32 96 19 76 22 64 C26 52 44 46 64 46 Z"
        fill={fur}
      />

      {/* Face mask — the cream wedge that points up between the eyes */}
      <path
        d="M64 62 C72 68 82 78 85 90 C87 97 77 105 70 110 C66.5 112 65.5 114 64 114 C62.5 114 61.5 112 58 110 C51 105 41 97 43 90 C46 78 56 68 64 62 Z"
        fill={cream}
      />

      {/* Eyes */}
      <circle cx="44" cy="68" r="5.5" fill={ink} />
      <circle cx="84" cy="68" r="5.5" fill={ink} />
      <circle cx="45.8" cy="66.2" r="1.9" fill={cream} />
      <circle cx="85.8" cy="66.2" r="1.9" fill={cream} />

      {/* Nose and smile */}
      <path d="M57 86 Q64 81 71 86 Q67 94 64 94 Q61 94 57 86 Z" fill={ink} />
      <path
        d="M64 94 V98 M57 99 Q64 105 71 99"
        stroke={ink}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Ranger hat */}
      <path d="M42 48 L45 26 Q64 14 83 26 L86 48 Z" fill={hatCrown} />
      <path d="M44.4 30 L83.6 30 L85 40 L43 40 Z" fill={hatBand} />
      <path d="M64 30.5 L68.5 35 L64 39.5 L59.5 35 Z" fill={fur} />
      <ellipse cx="64" cy="49" rx="44" ry="9" fill={hatBrim} />
    </svg>
  );
}
