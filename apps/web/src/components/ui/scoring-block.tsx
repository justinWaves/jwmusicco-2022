"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Replace href with YouTube/Vimeo embed URL when reel is ready
const REEL_URL = "/scoring#reel";

const audioExamples = [
  {
    title: "Main Theme",
    project: "Narrative Game",
    mood: "Melodic · Cinematic",
    duration: "2:34",
    waveSeeds: [40, 65, 30, 80, 55, 70, 35, 90, 45, 60, 75, 50, 85, 40, 65],
  },
  {
    title: "Tension Cue",
    project: "Short Film",
    mood: "Dark · Suspense",
    duration: "1:18",
    waveSeeds: [55, 30, 75, 45, 90, 35, 60, 80, 40, 70, 50, 85, 30, 65, 55],
  },
  {
    title: "Exploration",
    project: "Open World Game",
    mood: "Ambient · Electronic-Organic",
    duration: "3:02",
    waveSeeds: [35, 50, 70, 40, 55, 80, 45, 65, 30, 75, 60, 85, 50, 40, 70],
  },
];

function WaveformBar({ height }: { height: number }) {
  return (
    <div
      className="w-[3px] rounded-full bg-white/25 transition-all"
      style={{ height: `${height}%` }}
    />
  );
}

export function ScoringBlock() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl"
      >
        {/* Cinematic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#0f0a1e] to-[#1a0d0d]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/60 via-transparent to-rose-950/40" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.07]" />

        <div className="relative px-8 py-14 sm:px-12 sm:py-16 flex flex-col gap-12">

          {/* Header row */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-3">
              <p className="font-body text-[10px] uppercase tracking-[0.35em] text-rose-400/50">
                Film · Game · Motion
              </p>
              <h2 className="font-display text-4xl font-light leading-tight text-white/85 sm:text-5xl">
                Scoring for indie games,
                <br />
                <span className="italic text-white/50">film, and visual worlds.</span>
              </h2>
              <p className="max-w-lg font-body text-sm leading-relaxed text-white/40 mt-1">
                Emotionally rich, cinematic sound built to move audiences.
                Fast collaborative workflow, custom cues and stems delivered.
                Currently available for new projects.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end shrink-0">
              <Link
                href={REEL_URL}
                className="group inline-flex items-center gap-3 rounded-full bg-white/[0.08] px-7 py-4 ring-1 ring-white/[0.12] backdrop-blur-sm transition-all hover:bg-white/[0.14] hover:ring-white/25"
              >
                <span className="text-base leading-none">▶</span>
                <span className="font-body text-sm font-medium uppercase tracking-wider text-white/75 transition-colors group-hover:text-white">
                  Watch the reel
                </span>
              </Link>
              <Link
                href="/contact?subject=scoring"
                className="text-center font-body text-xs uppercase tracking-widest text-white/25 underline-offset-4 transition-colors hover:text-white/55 hover:underline"
              >
                Inquire about a project
              </Link>
            </div>
          </div>

          {/* Reel player placeholder */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-black/40">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              {/* Play button */}
              <Link
                href={REEL_URL}
                className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/[0.16]"
              >
                <span className="ml-1 text-2xl leading-none text-white/60 transition-colors group-hover:text-white/90">
                  ▶
                </span>
              </Link>
              <p className="font-body text-xs uppercase tracking-widest text-white/25">
                Scoring Reel — Add Vimeo or YouTube URL
              </p>
            </div>
            {/* Subtle scanline overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
              }}
            />
          </div>

          {/* Audio example cards */}
          <div>
            <p className="mb-4 font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
              Sample cues
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {audioExamples.map((ex) => (
                <div
                  key={ex.title}
                  className="group relative flex flex-col gap-4 rounded-xl border border-white/[0.07] bg-white/[0.03] p-5 transition-all hover:border-white/[0.14] hover:bg-white/[0.06] cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-body text-sm font-medium text-white/60 group-hover:text-white/80 transition-colors">
                        {ex.title}
                      </p>
                      <p className="font-body text-[11px] text-white/25">{ex.project}</p>
                    </div>
                    {/* Play button */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] transition-all group-hover:border-white/30 group-hover:bg-white/[0.12]">
                      <span className="ml-0.5 text-xs leading-none text-white/40 group-hover:text-white/70 transition-colors">
                        ▶
                      </span>
                    </div>
                  </div>

                  {/* Waveform */}
                  <div className="flex h-10 items-center gap-[3px]">
                    {ex.waveSeeds.map((h, i) => (
                      <WaveformBar key={i} height={h} />
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <p className="font-body text-[10px] text-white/25">{ex.mood}</p>
                    <p className="font-body text-[10px] tabular-nums text-white/25">
                      {ex.duration}
                    </p>
                  </div>

                  {/* "Add audio" placeholder note — remove before launch */}
                  <p className="absolute bottom-2 right-3 font-body text-[9px] text-white/10">
                    Add audio src
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
