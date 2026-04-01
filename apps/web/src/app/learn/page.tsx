import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "Learn — JW Music Company",
  description:
    "Courses, mentorship, and private instruction from a working artist, producer, and performer. Rare access to a real creative process.",
};

const paths = [
  {
    icon: "🖥",
    label: "Coming soon",
    title: "Studio Walkthroughs",
    sub: "Deep-dive video courses walking through real sessions, from tracking to final mix. Mixing, production, sound design, synthesis, and more.",
    cta: "Join the waitlist",
    href: "/contact?subject=learn",
    accent: "border-indigo-500/20 hover:border-indigo-500/35",
    glow: "from-indigo-700/10 to-transparent",
    badge: "Waitlist open",
  },
  {
    icon: "🎹",
    label: "Available now",
    title: "Piano · Guitar · Theory",
    sub: "Private lessons guided by a working artist. Beginner through advanced. Online or in-person in the Bay Area.",
    cta: "Book a lesson",
    href: "/learn/lessons",
    accent: "border-sky-500/20 hover:border-sky-500/35",
    glow: "from-sky-700/10 to-transparent",
    badge: "Booking now",
  },
  {
    icon: "🦉",
    label: "By application",
    title: "Private Mentorship",
    sub: "Ongoing one-on-one mentorship for serious artists. We work on your music, your process, and your craft together over time.",
    cta: "Inquire",
    href: "/contact?subject=learn",
    accent: "border-violet-500/20 hover:border-violet-500/35",
    glow: "from-violet-700/10 to-transparent",
    badge: "Limited spots",
  },
];

const courseTopics = [
  "Mixing & Mastering Foundations",
  "Music Production from Scratch",
  "Sound Design & Synthesis",
  "Electronic Song Arrangement",
  "Sampling & Resampling",
  "Writing Emotional Toplines",
  "Guitar in Electronic Music",
  "Piano for Producers",
  "Finishing Songs",
  "From Idea to Finished Demo",
  "Recording Yourself at Home",
  "Artist Branding for Musicians",
];

export default function LearnPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Home" backHref="/" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 pb-20 pt-36 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[55vh] w-[55vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #4f46e5 0%, #1e1b4b 50%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        <p className="relative mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-indigo-400/50">
          Education
        </p>
        <h1 className="relative mx-auto max-w-3xl font-display text-5xl font-light leading-[1.08] tracking-tight text-white/90 sm:text-6xl md:text-7xl">
          Rare access
          <br />
          <span className="italic text-white/55">to a real process.</span>
        </h1>
        <p className="relative mt-6 max-w-lg font-body text-sm leading-relaxed text-white/35">
          Not a course platform. Not a generic lesson service. A working artist
          sharing how music actually gets made — the tools, decisions, and
          instincts behind records that feel real.
        </p>
      </section>

      {/* Three paths */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Choose your path
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {paths.map((path) => (
            <div
              key={path.title}
              className={`group relative overflow-hidden rounded-2xl border bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] ${path.accent}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${path.glow}`} />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-2xl">{path.icon}</span>
                  <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-3 py-1 font-body text-[10px] uppercase tracking-widest text-white/30">
                    {path.badge}
                  </span>
                </div>

                <p className="mb-1 font-body text-[10px] uppercase tracking-[0.25em] text-white/25">
                  {path.label}
                </p>
                <h3 className="mb-3 font-display text-xl font-light text-white/85">{path.title}</h3>
                <p className="mb-8 font-body text-sm leading-relaxed text-white/40">{path.sub}</p>

                <div className="mt-auto">
                  <Link
                    href={path.href}
                    className="inline-flex items-center gap-2 font-body text-xs font-medium uppercase tracking-widest text-white/35 transition-colors group-hover:text-white/65"
                  >
                    <span>{path.cta}</span>
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
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
            </div>
          ))}
        </div>
      </section>

      {/* Course topics preview */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-12 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            Course topics in development
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <div className="flex flex-wrap gap-3">
          {courseTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-white/[0.07] bg-white/[0.02] px-5 py-2.5 font-body text-sm text-white/40"
            >
              {topic}
            </span>
          ))}
        </div>

        <p className="mt-8 font-body text-sm text-white/25">
          Join the waitlist to be notified when the first courses launch.
        </p>
      </section>

      {/* CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-smoke-950 to-violet-950/20" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.07]" />
          <div className="relative flex flex-col items-center gap-5 px-8 py-16 text-center sm:py-20">
            <p className="font-body text-[10px] uppercase tracking-[0.35em] text-indigo-400/40">
              Stay in the loop
            </p>
            <h2 className="mx-auto max-w-xl font-display text-4xl font-light leading-snug text-white/80 sm:text-5xl">
              Interested in learning
              <br />
              <span className="italic text-white/50">from a working artist?</span>
            </h2>
            <p className="max-w-sm font-body text-sm leading-relaxed text-white/32">
              Whether you want lessons now or courses when they drop, reach out
              and I&rsquo;ll point you to the right path.
            </p>
            <Link
              href="/contact?subject=learn"
              className="group inline-flex items-center gap-3 rounded-full border border-indigo-500/35 bg-indigo-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-indigo-400/55 hover:bg-indigo-500/[0.18]"
            >
              <span className="font-body text-sm font-medium tracking-wide text-indigo-100/90 group-hover:text-indigo-50">
                Get in touch
              </span>
              <svg
                className="h-3.5 w-3.5 text-indigo-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-300/80"
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
