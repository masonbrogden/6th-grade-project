"use client";

import { motion } from "framer-motion";
import ScoutMascot from "@/components/ScoutMascot";

const swatches = [
  { name: "Forest green", role: "Primary", token: "--forest", hex: "#1F4D3D" },
  { name: "Parchment", role: "Background", token: "--parchment", hex: "#FAF6EE" },
  { name: "Amber", role: "Accent", token: "--amber", hex: "#D9822B" },
  { name: "Trail brown", role: "Secondary / borders", token: "--trail", hex: "#6B4A34" },
  { name: "Warm white", role: "Surfaces", token: "--warm-white", hex: "#FFFDF8" },
  { name: "Border", role: "Hairlines", token: "--border", hex: "#E4D9C5" },
];

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function Section({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      variants={rise}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-card border border-border bg-surface p-7 shadow-card"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-trail">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </motion.section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <motion.header
        variants={rise}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-5 text-center"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ScoutMascot size={112} title="Scout the fox ranger" />
        </motion.div>
        <div>
          <h1 className="text-4xl font-semibold text-forest sm:text-5xl">
            Design system check
          </h1>
          <p className="mx-auto mt-3 max-w-md text-trail">
            Fraunces for headings, Inter for body, and Scout in a ranger hat.
            Nothing else is built yet.
          </p>
        </div>
      </motion.header>

      <div className="mt-14 flex flex-col gap-6">
        <Section title="Typefaces" delay={0.08}>
          <p className="font-heading text-3xl text-forest">
            Fraunces — headings, warm and a little wonky
          </p>
          <p className="mt-4 text-base leading-relaxed text-trail">
            Inter — body copy. The quick brown fox jumps over the lazy dog, then
            checks the trail map, adjusts the brim of a ranger hat, and keeps
            walking north. 0123456789
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-trail-light">
            <span className="font-heading">font-heading → Fraunces</span>
            <span className="font-sans">font-sans → Inter</span>
          </div>
        </Section>

        <Section title="Palette" delay={0.16}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {swatches.map((swatch) => (
              <div key={swatch.token} className="flex flex-col gap-2">
                <div
                  className="h-16 w-full rounded-xl border border-border"
                  style={{ background: `var(${swatch.token})` }}
                />
                <div className="leading-tight">
                  <p className="text-sm font-medium text-forest">{swatch.name}</p>
                  <p className="text-xs text-trail-light">{swatch.role}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase text-trail-light">
                    {swatch.hex}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Mascot scales" delay={0.24}>
          <div className="flex flex-wrap items-end gap-8">
            {[24, 40, 64, 96].map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <ScoutMascot size={size} />
                <span className="text-xs text-trail-light">{size}px</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Surfaces and buttons" delay={0.32}>
          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-parchment shadow-card"
            >
              Primary action
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="rounded-full bg-amber px-5 py-2.5 text-sm font-medium text-warm-white shadow-card"
            >
              Accent action
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              className="rounded-full border border-trail px-5 py-2.5 text-sm font-medium text-trail"
            >
              Quiet action
            </motion.button>
          </div>
          <div className="mt-6 rounded-card bg-parchment-deep p-5 text-sm text-trail">
            Surfaces sit on warm off-white over parchment — no stark
            <span className="mx-1 rounded border border-border bg-[#ffffff] px-1.5 py-0.5 font-mono text-xs">
              #FFFFFF
            </span>
            anywhere in the system.
          </div>
        </Section>
      </div>
    </main>
  );
}
