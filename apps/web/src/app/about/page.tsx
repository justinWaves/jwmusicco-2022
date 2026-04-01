import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "About — JW Music Company",
  description:
    "Justin Waves is a Bay Area-based musician, producer, and educator. JW Music Company is the home of his studio work, scoring projects, and teaching practice.",
};

const pillars = [
  {
    title: "The artist",
    body: "A lifelong musician and performer, trained in piano and guitar, fluent in electronic production, sound design, and hybrid orchestral scoring.",
  },
  {
    title: "The producer",
    body: "Records built with emotional intelligence. Every arrangement decision serves the song. Every sound earns its place.",
  },
  {
    title: "The engineer",
    body: "Fluent in Pro Tools, Ableton, and Logic. Tracking, mixing, and mastering done in-house, on world-class equipment.",
  },
  {
    title: "The teacher",
    body: "Teaching from a place of genuine love for music and the craft of making it. Serious students, all levels. Real progress.",
  },
];

const values = [
  "Listen first, build second.",
  "Emotion is the goal. Technique is the tool.",
  "Every artist deserves to be heard exactly as they imagined.",
  "Process matters as much as the record.",
  "Rare, intentional, artist-first.",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Home" backHref="/" />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-36">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Text */}
          <div>
            <p className="mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-white/25">
              About
            </p>
            <h1 className="mb-8 font-display text-5xl font-light leading-tight text-white/90 sm:text-6xl">
              Built by a
              <br />
              <span className="italic text-white/55">working artist.</span>
            </h1>
            <div className="flex flex-col gap-5">
              <p className="font-body text-base leading-relaxed text-white/55">
                JW Music Company is the studio practice of Justin Waves — a
                musician, producer, performer, and educator based in the San
                Francisco Bay Area.
              </p>
              <p className="font-body text-base leading-relaxed text-white/42">
                After years of making records, scoring visuals, teaching privately,
                and performing, this company exists to offer all of that in one
                honest place: premium creative services for artists and
                storytellers who deserve real care.
              </p>
              <p className="font-body text-base leading-relaxed text-white/35">
                The name is simple. The work is not. Everything here — from a
                first recording session to a film score — is done by someone who
                has spent their life inside music.
              </p>
            </div>
          </div>

          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl lg:aspect-[4/5]">
              <Image
                src="/images/ssl-9000.jpg"
                alt="JW Music Company studio — SSL 9000 console"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-smoke-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-body text-[10px] uppercase tracking-widest text-white/30">
                  SSL 9000 · Bay Area studio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            What I do
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
            >
              <h3 className="mb-3 font-display text-lg font-light text-white/75">
                {pillar.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-white/38">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            The philosophy
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <ul className="flex flex-col gap-5">
          {values.map((value, i) => (
            <li key={i} className="flex items-center gap-5">
              <span className="font-display text-2xl font-light text-white/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-xl font-light italic text-white/55">{value}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pull quote */}
      <section className="relative z-10 mx-auto max-w-4xl px-6 pb-20">
        <blockquote className="border-l-2 border-white/10 pl-8">
          <p className="font-display text-3xl font-light italic leading-relaxed text-white/55 sm:text-4xl">
            &ldquo;Music, captured with taste, emotion, and intention.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-6 bg-white/20" />
            <p className="font-body text-sm text-white/30">Justin Waves · JW Music Company</p>
          </div>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950/30 via-smoke-950 to-indigo-950/20" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.07]" />
          <div className="relative flex flex-col items-center gap-5 px-8 py-16 text-center sm:py-20">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-white/25">
              Work with me
            </p>
            <h2 className="mx-auto max-w-xl font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              Ready to make something
              <br />
              <span className="italic text-white/50">that lasts?</span>
            </h2>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.1]"
              >
                <span className="font-body text-sm font-medium tracking-wide text-white/75 transition-colors group-hover:text-white/95">
                  Explore services
                </span>
                <svg
                  className="h-3.5 w-3.5 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-white/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="font-body text-xs uppercase tracking-widest text-white/30 underline-offset-4 transition-colors hover:text-white/60 hover:underline"
              >
                Get in touch
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
