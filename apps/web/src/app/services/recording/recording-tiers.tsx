"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Song Capture",
    tagline: "The essentials, beautifully done.",
    price: "Starting at $350",
    forWho: "First-time studio artists, demos, voice-memo-to-real-recording.",
    description:
      "You have a song that needs to exist beyond your phone. This session captures it — honest, clean, and finished.",
    includes: [
      "Up to 4-hour session",
      "Lead vocal + one instrument",
      "Tracked, comped, edited",
      "Rough mix + 48-hr file delivery",
    ],
    cta: "Start your song",
    href: "/contact?service=song-capture",
    featured: false,
    accent: "border-white/[0.07] hover:border-amber-500/20",
  },
  {
    name: "Produced Session",
    tagline: "Your idea, fully realized.",
    price: "Starting at $800",
    forWho: "Artists with a real song who want it shaped into a finished record.",
    description:
      "You bring the song. We build the world around it — arrangement, production, and a finish that sounds like a release, not a demo.",
    includes: [
      "Full-day session (up to 8 hrs)",
      "Production + arrangement",
      "Recording, editing, comping",
      "2 revision rounds + stems delivered",
    ],
    cta: "Book a produced session",
    href: "/contact?service=produced-session",
    featured: true,
    accent: "border-amber-500/25 hover:border-amber-400/45",
  },
  {
    name: "Artist Session",
    tagline: "Full creative partnership.",
    price: "Bespoke pricing",
    forWho: "Artists who want deep collaboration, creative direction, and premium output.",
    description:
      "Multi-day, immersive work. Recording, producing, creative direction — a real partnership built entirely around your vision.",
    includes: [
      "Multi-day studio time",
      "Full production + creative direction",
      "Recording + mixing",
      "Priority scheduling + ongoing access",
    ],
    cta: "Apply for a session",
    href: "/contact?service=artist-session",
    featured: false,
    accent: "border-white/[0.07] hover:border-violet-500/20",
  },
];

export function RecordingTiers() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
          className={`relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${tier.accent} ${
            tier.featured ? "bg-amber-500/[0.05]" : "bg-white/[0.025]"
          }`}
        >
          {/* Featured badge */}
          {tier.featured && (
            <div className="absolute right-5 top-5">
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-body text-[10px] uppercase tracking-widest text-amber-300/60">
                Most popular
              </span>
            </div>
          )}

          {/* Header */}
          <div className="mb-3">
            <h3 className="mb-1 font-display text-2xl font-light text-white/80">
              {tier.name}
            </h3>
            <p className="font-body text-xs italic text-white/30">{tier.tagline}</p>
          </div>

          {/* Price */}
          <p className="mb-4 font-display text-3xl font-light text-white/70">
            {tier.price}
          </p>

          {/* For who — the key differentiator */}
          <div className="mb-5 rounded-lg border border-white/[0.05] bg-white/[0.03] px-4 py-3">
            <p className="font-body text-[10px] uppercase tracking-widest text-white/25 mb-1">
              Best for
            </p>
            <p className="font-body text-xs leading-relaxed text-white/45">
              {tier.forWho}
            </p>
          </div>

          {/* Description */}
          <p className="mb-6 font-body text-sm leading-relaxed text-white/40">
            {tier.description}
          </p>

          {/* Includes */}
          <ul className="mb-8 flex flex-1 flex-col gap-2.5">
            {tier.includes.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400/35"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-body text-sm text-white/45">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href={tier.href}
            className={`group mt-auto inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-body text-sm font-medium tracking-wide transition-all ${
              tier.featured
                ? "border border-amber-500/35 bg-amber-500/10 text-amber-100/85 hover:border-amber-400/55 hover:bg-amber-500/[0.18] hover:text-amber-50"
                : "border border-white/[0.1] bg-white/[0.04] text-white/50 hover:border-white/20 hover:bg-white/[0.08] hover:text-white/80"
            }`}
          >
            {tier.cta}
            <svg
              className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
