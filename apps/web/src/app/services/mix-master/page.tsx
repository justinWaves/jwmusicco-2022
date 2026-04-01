import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "Mixing & Mastering — JW Music Company",
  description:
    "Pro-grade mixing and mastering for independent artists. Send stems, get masters. Bay Area and remote.",
};

const mixingIncludes = [
  "Full stem mix — balance, EQ, compression, effects",
  "Vocal processing and spatial placement",
  "Stereo bus treatment",
  "2 revision rounds",
  "Wav + MP3 delivery",
];

const masteringIncludes = [
  "Loudness, dynamics, and tonal balance",
  "Streaming-ready masters (Spotify, Apple Music, etc.)",
  "Vinyl or broadcast versions on request",
  "1 revision round",
  "Wav + MP3 delivery",
];

const process = [
  {
    step: "01",
    title: "Send your files",
    body: "Upload organized stems (labeled, at project tempo) or a finalized mix for mastering only. I&rsquo;ll confirm receipt and ask any questions before starting.",
  },
  {
    step: "02",
    title: "Reference call (optional)",
    body: "If you have sonic references or strong opinions about how it should feel, a quick 15-min call means I nail it on the first pass.",
  },
  {
    step: "03",
    title: "Delivery within 5–7 days",
    body: "You receive a private streaming link to review before final file delivery. Revisions are included.",
  },
  {
    step: "04",
    title: "Final files",
    body: "Wav and MP3 masters, ready for distribution, streaming, or vinyl — in whatever format you need.",
  },
];

const faqs = [
  {
    q: "Do you mix and master in the same package?",
    a: "Yes — mix + master bundles are available and are the most cost-effective. You can also request mastering only if your mix is already done.",
  },
  {
    q: "What format should I send my stems?",
    a: "Wav or AIFF, consolidated from bar 1, labeled clearly (Kick, Snare, Lead Vox, etc.). I&rsquo;ll send you a simple checklist after you reach out.",
  },
  {
    q: "How many revisions are included?",
    a: "Mixing includes 2 revision rounds. Mastering includes 1. Additional rounds are available at a flat rate.",
  },
  {
    q: "Can you match a specific reference track?",
    a: "Yes. Send it with your project files and I&rsquo;ll use it as a tonal and dynamic target.",
  },
];

export default function MixMasterPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Services" backHref="/services" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-20 pt-36 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #0d9488 0%, #134e4a 50%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        <p className="relative mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-teal-400/50">
          Mixing &amp; Mastering
        </p>
        <h1 className="relative mx-auto max-w-3xl font-display text-5xl font-light leading-[1.08] tracking-tight text-white/90 sm:text-6xl md:text-7xl">
          Your record,
          <br />
          <span className="italic text-white/55">ready for the world.</span>
        </h1>
        <p className="relative mt-6 max-w-md font-display text-xl font-light italic leading-relaxed text-white/38 sm:text-2xl">
          Depth, clarity, and presence — handled with intention.
        </p>
        <div className="relative mt-8">
          <Link
            href="/contact?subject=mix-master"
            className="group inline-flex items-center gap-3 rounded-full border border-teal-500/35 bg-teal-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-teal-400/55 hover:bg-teal-500/[0.18]"
          >
            <span className="font-body text-sm font-medium tracking-wide text-teal-100/90 transition-colors group-hover:text-teal-50">
              Request a quote
            </span>
            <svg
              className="h-3.5 w-3.5 text-teal-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-teal-300/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* What's included */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            What&rsquo;s included
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Mixing */}
          <div className="relative overflow-hidden rounded-2xl border border-teal-500/20 bg-white/[0.025] p-8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700/10 to-transparent" />
            <div className="relative">
              <p className="mb-2 font-body text-[10px] uppercase tracking-[0.3em] text-teal-400/50">
                Mixing
              </p>
              <p className="mb-6 font-body text-sm text-white/35">Starting at $350 / song</p>
              <ul className="flex flex-col gap-3">
                {mixingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-400/40" />
                    <span className="font-body text-sm leading-snug text-white/55">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mastering */}
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/[0.025] p-8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/10 to-transparent" />
            <div className="relative">
              <p className="mb-2 font-body text-[10px] uppercase tracking-[0.3em] text-cyan-400/50">
                Mastering
              </p>
              <p className="mb-6 font-body text-sm text-white/35">Starting at $120 / song</p>
              <ul className="flex flex-col gap-3">
                {masteringIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400/40" />
                    <span className="font-body text-sm leading-snug text-white/55">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bundle note */}
        <p className="mt-6 text-center font-body text-sm text-white/30">
          Mix + Master bundle available — ask for pricing when you reach out.
        </p>
      </section>

      {/* Process */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            How it works
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <div key={step.step} className="flex flex-col gap-4 p-6">
              <span className="font-display text-4xl font-light text-teal-500/20">{step.step}</span>
              <h3 className="font-display text-lg font-light text-white/75">{step.title}</h3>
              <p
                className="font-body text-sm leading-relaxed text-white/38"
                dangerouslySetInnerHTML={{ __html: step.body }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Common questions
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="flex flex-col divide-y divide-white/[0.05]">
          {faqs.map((faq) => (
            <div key={faq.q} className="py-6">
              <p className="mb-3 font-display text-lg font-light text-white/75">{faq.q}</p>
              <p className="font-body text-sm leading-relaxed text-white/40">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950/40 via-smoke-950 to-cyan-950/20" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.07]" />
          <div className="relative flex flex-col items-center gap-5 px-8 py-16 text-center sm:py-20">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-teal-400/40">
              Ready to mix
            </p>
            <h2 className="mx-auto max-w-xl font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              Send your stems.
              <br />
              <span className="italic text-white/50">Get your masters.</span>
            </h2>
            <p className="max-w-sm font-body text-sm leading-relaxed text-white/32">
              Tell me about your project — number of songs, format, and any
              references — and I&rsquo;ll send you a quote within 24 hours.
            </p>
            <Link
              href="/contact?subject=mix-master"
              className="group inline-flex items-center gap-3 rounded-full border border-teal-500/35 bg-teal-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-teal-400/55 hover:bg-teal-500/[0.18]"
            >
              <span className="font-body text-sm font-medium tracking-wide text-teal-100/90 group-hover:text-teal-50">
                Request a quote
              </span>
              <svg
                className="h-3.5 w-3.5 text-teal-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-teal-300/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] px-8 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/services" className="font-body text-xs text-white/20 transition-colors hover:text-white/40">
            ← Services
          </Link>
          <p className="font-body text-xs text-white/20">San Francisco Bay Area</p>
        </div>
      </footer>
    </main>
  );
}
