import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { PageNav } from "@/components/layout/page-nav";
import { BookingEmbed } from "@/components/ui/booking-embed";
import { RecordingTiers } from "./recording-tiers";
import { RecordingProcess } from "./recording-process";
import { RecordingFAQ } from "./recording-faq";

export const metadata: Metadata = {
  title: "Record a Song I Wrote — JW Music Company",
  description:
    "Intimate, professional recording sessions in the Bay Area for singer-songwriters, artists, and anyone with something real to say.",
};

const forYouIf = [
  "You have a finished song — or a voice memo — that needs to become real",
  "You want your voice to sound like you, just better",
  "You're preparing for a release, a pitch, or a personal milestone",
  "You've never been in a studio and want it to feel safe",
];

export default function RecordingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Services" backHref="/" />

      {/* ① Hero — tighter, more direct */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-20 pt-36 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #d97706 0%, #92400e 50%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        <p className="relative mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-amber-400/50">
          Recording
        </p>
        <h1 className="relative mx-auto max-w-3xl font-display text-5xl font-light leading-[1.08] tracking-tight text-white/90 sm:text-6xl md:text-7xl">
          Your song, captured
          <br />
          <span className="italic text-white/55">exactly as you imagined it.</span>
        </h1>
        <p className="relative mt-6 max-w-md font-display text-xl font-light italic leading-relaxed text-white/38 sm:text-2xl">
          Safe, intimate, and professionally held.
        </p>
        <div className="relative mt-8">
          <Link
            href="#tiers"
            className="group inline-flex items-center gap-3 rounded-full border border-amber-500/35 bg-amber-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-amber-400/55 hover:bg-amber-500/[0.18]"
          >
            <span className="font-body text-sm font-medium tracking-wide text-amber-100/90 transition-colors group-hover:text-amber-50">
              See sessions
            </span>
            <svg className="h-3.5 w-3.5 text-amber-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-amber-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ② Who it's for — tighter, 4 items */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20 lg:items-center">
          <div>
            <p className="mb-3 font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
              Who it&rsquo;s for
            </p>
            <h2 className="font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              This session is
              <br />
              <span className="italic text-white/45">for you if —</span>
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-white/30 max-w-xs">
              You don&rsquo;t need to arrive with everything figured out.
              You just need to arrive.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {forYouIf.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400/40" />
                <p className="font-body text-base leading-relaxed text-white/55">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ③ Session tiers */}
      <section id="tiers" className="relative z-10 mx-auto max-w-6xl px-6 pb-20 scroll-mt-24">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">Session types</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <RecordingTiers />
      </section>

      {/* ④ How it works */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">How it works</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <RecordingProcess />
      </section>

      {/* ⑤ Proof — recording-specific testimonial */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Studio photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[320px]">
            <Image
              src="/images/ssl-9000.jpg"
              alt="SSL 9000 console — JW Music Company Bay Area studio"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-smoke-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="font-body text-[10px] uppercase tracking-widest text-white/30">
                SSL 9000 · Bay Area
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025] p-8 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-transparent to-amber-950/20" />
            <div className="relative">
              <p className="mb-2 font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
                Recording client
              </p>
              <blockquote className="mb-6 font-display text-2xl font-light italic leading-relaxed text-white/65">
                &ldquo;I came in with a voice memo on my phone and walked out three
                sessions later with a finished record I&rsquo;m actually proud of.
                Justin hears what you&rsquo;re reaching for before you can name it.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-px w-6 bg-white/20" />
                <div>
                  <p className="font-body text-sm font-medium text-white/50">Maya R.</p>
                  <p className="font-body text-xs text-white/25">Independent Artist · San Jose, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤b — Session photo placeholders */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <ImagePlaceholder label="Justin at the console" aspect="aspect-[3/4]" />
          <ImagePlaceholder label="Artist in the booth" aspect="aspect-[3/4]" />
          <ImagePlaceholder label="Session in progress" aspect="aspect-[3/4]" />
          <ImagePlaceholder label="Justin producing" aspect="aspect-[3/4]" />
        </div>
      </section>

      {/* ⑥ FAQ */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">Common questions</span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <RecordingFAQ />
      </section>

      {/* ⑦ Book your session */}
      <section id="book" className="relative z-10 mx-auto max-w-3xl px-6 pb-20 scroll-mt-24">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Book your session
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <BookingEmbed
          calLink={process.env.NEXT_PUBLIC_CAL_RECORDING_LINK}
          namespace="recording"
          fallbackHref="/contact?subject=recording"
          fallbackLabel="Begin your project"
          accentClass="border-amber-500/35 bg-amber-500/[0.1] text-amber-100/90 hover:border-amber-400/55 hover:bg-amber-500/[0.18]"
          note="Sessions typically fill 1–2 weeks out. Reach out early."
        />
      </section>

      {/* ⑧ Final CTA — elevated language */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/40 via-smoke-950 to-indigo-950/30" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.07]" />
          <div className="relative flex flex-col items-center gap-5 px-8 py-16 text-center sm:py-20">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-amber-400/40">
              Ready when you are
            </p>
            <h2 className="mx-auto max-w-xl font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              Ready to make
              <br />
              <span className="italic text-white/50">your song real?</span>
            </h2>
            <p className="max-w-sm font-body text-sm leading-relaxed text-white/32">
              Sessions book fast. Send a voice memo, a lyric, anything —
              and we&rsquo;ll take it from there.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/contact?subject=recording"
                className="group inline-flex items-center gap-3 rounded-full border border-amber-500/35 bg-amber-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-amber-400/55 hover:bg-amber-500/[0.18]"
              >
                <span className="font-body text-sm font-medium tracking-wide text-amber-100/90 group-hover:text-amber-50">
                  Begin your project
                </span>
                <svg className="h-3.5 w-3.5 text-amber-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-amber-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
          <Link href="/" className="font-body text-xs text-white/20 transition-colors hover:text-white/40">
            ← JW Music Company
          </Link>
          <p className="font-body text-xs text-white/20">San Francisco Bay Area</p>
        </div>
      </footer>
    </main>
  );
}
