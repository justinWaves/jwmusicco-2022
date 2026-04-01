import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";
import { ScoringCues } from "./scoring-cues";

export const metadata: Metadata = {
  title: "Film & Game Scoring — JW Music Company",
  description:
    "Cinematic music for indie games, short film, trailers, and visual worlds. Emotionally rich, melodic, electronic-organic hybrid scoring.",
};

// Replace with a real Vimeo or YouTube embed URL when the reel is ready
const REEL_URL = ""; // e.g. "https://www.youtube.com/embed/..."

const moods = [
  "Cinematic",
  "Atmospheric",
  "Tense",
  "Emotional",
  "Epic",
  "Intimate",
  "Electronic",
  "Orchestral",
  "Hybrid",
  "Ambient",
];

const capabilities = [
  { icon: "🎮", label: "Indie games" },
  { icon: "🎬", label: "Short film" },
  { icon: "📺", label: "Trailers & promos" },
  { icon: "🎙", label: "Branded sound" },
  { icon: "🌐", label: "Interactive media" },
  { icon: "📽", label: "Narrative worlds" },
];

export default function ScoringPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Home" backHref="/" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-20 pt-36 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #9f1239 0%, #4c0519 40%, #1e1b4b 80%, transparent 100%)",
            filter: "blur(90px)",
          }}
        />
        <p className="relative mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-rose-400/50">
          Film &amp; Game Scoring
        </p>
        <h1 className="relative mx-auto max-w-4xl font-display text-5xl font-light leading-[1.08] tracking-tight text-white/90 sm:text-6xl md:text-7xl">
          Music for
          <br />
          <span className="italic text-white/55">visual worlds.</span>
        </h1>
        <p className="relative mt-6 max-w-lg font-display text-xl font-light italic leading-relaxed text-white/38 sm:text-2xl">
          Emotionally rich, cinematic, melodic. For indie games, short film,
          trailers, and stories that deserve a soul.
        </p>

        {/* Mood tags */}
        <div className="relative mt-10 flex max-w-xl flex-wrap justify-center gap-2">
          {moods.map((mood) => (
            <span
              key={mood}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 font-body text-xs tracking-wide text-white/35"
            >
              {mood}
            </span>
          ))}
        </div>

        <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/contact?subject=scoring"
            className="group inline-flex items-center gap-3 rounded-full border border-rose-500/35 bg-rose-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-rose-400/55 hover:bg-rose-500/[0.18]"
          >
            <span className="font-body text-sm font-medium tracking-wide text-rose-100/90 transition-colors group-hover:text-rose-50">
              Inquire about a project
            </span>
            <svg
              className="h-3.5 w-3.5 text-rose-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-rose-300/80"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          {REEL_URL && (
            <a
              href="#reel"
              className="font-body text-xs uppercase tracking-widest text-white/30 underline-offset-4 transition-colors hover:text-white/55 hover:underline"
            >
              ▶ Watch the reel
            </a>
          )}
        </div>
      </section>

      {/* Scoring reel */}
      <section id="reel" className="relative z-10 mx-auto max-w-5xl px-6 pb-20 scroll-mt-24">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Scoring reel
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        {REEL_URL ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.07]">
            <iframe
              src={REEL_URL}
              title="JW Music Co Scoring Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        ) : (
          <div className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, #1e1b4b30 0%, transparent 70%)",
              }}
            />
            <div className="relative flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <svg
                  className="h-6 w-6 text-white/25"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="font-body text-sm text-white/25">
                Scoring reel — coming soon
              </p>
              <p className="font-body text-xs text-white/15">
                Add a Vimeo or YouTube URL to{" "}
                <code className="rounded bg-white/[0.06] px-2 py-0.5 font-mono">
                  REEL_URL
                </code>{" "}
                in{" "}
                <code className="rounded bg-white/[0.06] px-2 py-0.5 font-mono">
                  /scoring/page.tsx
                </code>
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Sample cues */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Sample cues
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <ScoringCues />
      </section>

      {/* Capabilities */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Available for
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
            >
              <span className="text-2xl">{cap.icon}</span>
              <span className="font-body text-xs leading-snug text-white/40">{cap.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-950/40 via-smoke-950 to-indigo-950/30" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.07]" />
          <div className="relative flex flex-col items-center gap-5 px-8 py-16 text-center sm:py-20">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-rose-400/40">
              Let&rsquo;s build a world
            </p>
            <h2 className="mx-auto max-w-xl font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              Your world,
              <br />
              <span className="italic text-white/50">given a voice.</span>
            </h2>
            <p className="max-w-md font-body text-sm leading-relaxed text-white/32">
              Tell me about your project — platform, genre, tone, timeline, and
              any reference tracks. I&rsquo;ll respond within 48 hours with thoughts and next steps.
            </p>
            <Link
              href="/contact?subject=scoring"
              className="group inline-flex items-center gap-3 rounded-full border border-rose-500/35 bg-rose-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-rose-400/55 hover:bg-rose-500/[0.18]"
            >
              <span className="font-body text-sm font-medium tracking-wide text-rose-100/90 group-hover:text-rose-50">
                Inquire about a project
              </span>
              <svg
                className="h-3.5 w-3.5 text-rose-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-rose-300/80"
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
          <Link href="/" className="font-body text-xs text-white/20 transition-colors hover:text-white/40">
            ← JW Music Company
          </Link>
          <p className="font-body text-xs text-white/20">San Francisco Bay Area</p>
        </div>
      </footer>
    </main>
  );
}
