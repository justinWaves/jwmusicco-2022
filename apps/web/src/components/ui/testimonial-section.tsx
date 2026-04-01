"use client";

import { motion } from "framer-motion";

// Replace with real client quotes before launch
const testimonials = [
  {
    quote:
      "I came in with a voice memo on my phone and walked out three sessions later with a finished record I'm actually proud of. Justin hears what you're reaching for before you can name it — and then he helps you get there.",
    name: "Maya R.",
    role: "Independent Artist",
    location: "San Jose, CA",
    service: "Recording & Production",
    accent: "from-indigo-950/40 to-violet-950/20",
  },
  {
    quote:
      "We needed a score that could carry emotional weight across 8 levels of a narrative game. Justin delivered 22 cues in under two weeks — every single one felt like it understood the world we were building.",
    name: "D. Park",
    role: "Creative Director",
    location: "Indie Studio · Remote",
    service: "Game Scoring",
    accent: "from-rose-950/40 to-indigo-950/20",
  },
];

export function TestimonialSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
            className={`relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br ${t.accent} p-8 sm:p-10`}
          >
            {/* Service tag */}
            <p className="mb-6 font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
              {t.service}
            </p>

            {/* Quote */}
            <blockquote className="mb-8 font-display text-xl font-light italic leading-relaxed text-white/70 sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5 h-px w-6 bg-white/20 shrink-0 translate-y-2.5" />
              <div>
                <p className="font-body text-sm font-medium text-white/50">{t.name}</p>
                <p className="font-body text-xs text-white/25">{t.role}</p>
                <p className="font-body text-xs text-white/18">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
