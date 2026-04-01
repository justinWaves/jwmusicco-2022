"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Share your idea",
    body: "Send a voice memo, a lyric, a reference track — anything that gets your vision across. No polish required.",
    detail: "Email, voice note, or even a YouTube link works.",
  },
  {
    number: "02",
    title: "Discovery call",
    body: "A 20-minute conversation to understand what the song needs, what you want to feel, and how to make the session as useful as possible.",
    detail: "No charge. No pressure. Just alignment.",
  },
  {
    number: "03",
    title: "Session day",
    body: "You come in, we get to work. The studio is warm, private, and comfortable. Your only job is to perform. Everything else is handled.",
    detail: "Parking, coffee, and real equipment included.",
  },
  {
    number: "04",
    title: "You leave with something real",
    body: "High-quality files, stems, and a mix delivered within 48 hours. Something you can actually use — for a release, a demo, or just to hear yourself.",
    detail: "Revisions and mastering available as add-ons.",
  },
];

export function RecordingProcess() {
  return (
    <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.06] sm:grid-cols-2">
      {steps.map((step, i) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
          className="flex flex-col gap-4 bg-white/[0.025] p-8 backdrop-blur-sm"
        >
          {/* Step number */}
          <p className="font-display text-5xl font-light text-white/[0.08]">
            {step.number}
          </p>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-xl font-light text-white/70">
              {step.title}
            </h3>
            <p className="font-body text-sm leading-relaxed text-white/40">
              {step.body}
            </p>
          </div>

          {/* Detail note */}
          <p className="mt-auto font-body text-xs italic text-white/22">
            {step.detail}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
