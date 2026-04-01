"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { number: "30+", label: "Records produced", sub: "Indie to commercial" },
  { number: "75+", label: "Sessions mixed", sub: "Independent releases" },
  { number: "22", label: "Scoring cues delivered", sub: "Games & short film" },
  { number: "10+", label: "Countries taught", sub: "Online & private" },
];

export function ProofSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
      {/* Divider */}
      <div className="mb-20 flex items-center gap-6">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
          The work
        </span>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">

        {/* Studio photo */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/plant-studio.jpg"
              alt="JW Music Company studio"
              fill
              className="object-cover opacity-75"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-smoke-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/35">
                Bay Area Studio
              </p>
            </div>
          </div>

          <Link
            href="/works"
            className="group inline-flex items-center gap-3 self-start"
          >
            <span className="font-body text-xs uppercase tracking-widest text-white/35 transition-colors group-hover:text-white/70">
              View selected works
            </span>
            <svg
              className="h-3 w-3 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-white/60"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Stats + statement */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-10"
        >
          {/* Pull quote */}
          <div>
            <p className="mb-5 font-display text-3xl font-light italic leading-snug text-white/65 sm:text-4xl">
              &ldquo;Music, captured with taste,
              <br />emotion, and intention.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-white/20" />
              <span className="font-body text-xs uppercase tracking-widest text-white/30">
                Justin Waves · JW Music Co
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/[0.025] p-6 backdrop-blur-sm"
              >
                <p className="mb-1 font-display text-3xl font-light text-white/70">
                  {s.number}
                </p>
                <p className="font-body text-xs font-medium text-white/45">
                  {s.label}
                </p>
                <p className="mt-0.5 font-body text-[11px] text-white/22">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
