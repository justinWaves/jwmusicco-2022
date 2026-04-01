import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";
import { ProductionTiers } from "./production-tiers";
import { ProductionProcess } from "./production-process";

export const metadata: Metadata = {
  title: "Music Production — JW Music Company",
  description:
    "Full-service music production for artists who have a vision and need a collaborator to realize it. Bay Area and remote.",
};

const forYouIf = [
  "You have songs, voice memos, or lyric sketches that need to become records",
  "You want a sound that's uniquely yours — not a template",
  "You're willing to collaborate deeply, not just hand off stems",
  "You want someone who listens first, then builds",
];

export default function ProductionPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Services" backHref="/services" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-20 pt-36 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, #4c1d95 50%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        <p className="relative mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-violet-400/50">
          Production
        </p>
        <h1 className="relative mx-auto max-w-3xl font-display text-5xl font-light leading-[1.08] tracking-tight text-white/90 sm:text-6xl md:text-7xl">
          From sketch
          <br />
          <span className="italic text-white/55">to finished record.</span>
        </h1>
        <p className="relative mt-6 max-w-md font-display text-xl font-light italic leading-relaxed text-white/38 sm:text-2xl">
          Arrangement, sound, emotion, and creative direction.
        </p>
        <div className="relative mt-8">
          <Link
            href="#tiers"
            className="group inline-flex items-center gap-3 rounded-full border border-violet-500/35 bg-violet-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-violet-400/55 hover:bg-violet-500/[0.18]"
          >
            <span className="font-body text-sm font-medium tracking-wide text-violet-100/90 transition-colors group-hover:text-violet-50">
              See what&rsquo;s included
            </span>
            <svg
              className="h-3.5 w-3.5 text-violet-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-violet-300/80"
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

      {/* Who it's for */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-3 font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
              Who it&rsquo;s for
            </p>
            <h2 className="font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              This is for artists
              <br />
              <span className="italic text-white/45">who are ready —</span>
            </h2>
            <p className="mt-5 max-w-xs font-body text-sm leading-relaxed text-white/30">
              You don&rsquo;t need a finished demo. You need a collaborator who can
              hear what you&rsquo;re reaching for.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {forYouIf.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400/40" />
                <p className="font-body text-base leading-relaxed text-white/55">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tiers */}
      <section id="tiers" className="relative z-10 mx-auto max-w-6xl px-6 pb-20 scroll-mt-24">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            What&rsquo;s included
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <ProductionTiers />
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
        <ProductionProcess />
      </section>

      {/* Final CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-smoke-950 to-indigo-950/30" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.07]" />
          <div className="relative flex flex-col items-center gap-5 px-8 py-16 text-center sm:py-20">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-violet-400/40">
              Ready to build
            </p>
            <h2 className="mx-auto max-w-xl font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              Ready to make
              <br />
              <span className="italic text-white/50">your record real?</span>
            </h2>
            <p className="max-w-sm font-body text-sm leading-relaxed text-white/32">
              Production projects are taken one at a time. Tell me about your
              project and we&rsquo;ll figure out what it needs.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/contact?subject=production"
                className="group inline-flex items-center gap-3 rounded-full border border-violet-500/35 bg-violet-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-violet-400/55 hover:bg-violet-500/[0.18]"
              >
                <span className="font-body text-sm font-medium tracking-wide text-violet-100/90 group-hover:text-violet-50">
                  Request a quote
                </span>
                <svg
                  className="h-3.5 w-3.5 text-violet-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-violet-300/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact?subject=question"
                className="font-body text-xs uppercase tracking-widest text-white/22 underline-offset-4 transition-colors hover:text-white/50 hover:underline"
              >
                Have a question first?
              </Link>
            </div>
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
