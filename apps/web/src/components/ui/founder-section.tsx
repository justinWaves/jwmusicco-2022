"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  { label: "Recording & Production", detail: "Artist-first sessions, Bay Area" },
  { label: "Mixing & Mastering", detail: "Independent & major releases" },
  { label: "Film & Game Scoring", detail: "Cinematic, electronic-organic" },
  { label: "Education & Mentorship", detail: "Online & private instruction" },
];

export function FounderSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
      {/* Divider */}
      <div className="mb-20 flex items-center gap-6">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
          The studio
        </span>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

        {/* Right column first on mobile — statement leads */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col gap-8"
        >
          <div>
            <p className="mb-3 font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
              Justin Waves
            </p>
            <h2 className="font-display text-3xl font-light leading-snug text-white/80 sm:text-4xl">
              Built by a working artist,
              <br />
              <span className="italic text-white/50">
                for songs, stories, and sonic worlds
                <br />
                that deserve real care.
              </span>
            </h2>
          </div>

          <p className="font-body text-sm leading-relaxed text-white/40 max-w-md">
            Producer, recording engineer, composer, and performer — Justin has spent
            years building a practice that holds space for artists at every stage.
            Whether you have a finished song, a half-formed idea, or a visual world
            that needs a score, this studio was made for you.
          </p>

          {/* Pillar grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
              >
                <p className="mb-0.5 font-body text-xs font-medium text-white/55">
                  {p.label}
                </p>
                <p className="font-body text-[11px] text-white/25">{p.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SSL 9000 studio photo */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="order-1 lg:order-2 relative aspect-[3/4] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/ssl-9000.jpg"
            alt="JW Music Company studio — SSL 9000"
            fill
            className="object-cover opacity-70"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-smoke-950/70" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-body text-[10px] uppercase tracking-widest text-white/30">
              SSL 9000 · Bay Area Studio
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
