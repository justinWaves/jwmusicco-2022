"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "I've never recorded before. Is this for me?",
    a: "Absolutely. Most first-time artists say the session felt easier than they expected. Your only job is to show up and sing — everything else is handled. You don't need to know anything about recording.",
  },
  {
    q: "Can I come in with just a voice memo?",
    a: "Yes, and it happens more than you'd think. A voice memo is enough to start a conversation and often enough to start a session. Send it over before we meet and we'll talk through where to take it.",
  },
  {
    q: "Do I need to bring my own instruments?",
    a: "Not necessarily. The studio has a selection of instruments available. If you play something specific or have a guitar you love the feel of, bring it — that always makes for a better recording.",
  },
  {
    q: "What happens after the session?",
    a: "You'll receive high-quality audio files within 48 hours — edited, comped, and rough-mixed. Mastering, additional revisions, and full mixing are available as add-ons. Nothing gets lost or forgotten.",
  },
  {
    q: "Can you also produce or mix the song?",
    a: "Yes. Production and mixing are both available within the same session or as follow-on work. If you're unsure what your song needs, we'll talk through it on the discovery call — no charge.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full items-start justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-light leading-snug text-white/65 transition-colors group-hover:text-white/80">
          {q}
        </span>
        <span
          className={`mt-1 shrink-0 text-white/25 transition-all duration-200 group-hover:text-white/50 ${
            open ? "rotate-45" : ""
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-body text-sm leading-relaxed text-white/40">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function RecordingFAQ() {
  return (
    <div className="mx-auto max-w-2xl">
      {faqs.map((faq) => (
        <FAQItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}
