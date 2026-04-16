import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "Studio — JW Music Company",
  description:
    "Inside the work. How records actually get made — the decisions, instincts, and process behind music that feels real.",
};

const sections = [
  {
    eyebrow: "Breakdowns",
    heading: "How songs become something real.",
    body: "Detailed project walkthroughs from first idea to final master. The decisions, the wrong turns, and the moments where a piece finally found itself. Arrangement choices, mix philosophy, sonic identity — and what got left on the floor.",
    status: "Coming soon",
    href: "/contact?subject=studio",
    cta: "Get notified",
    accent: "border-amber-500/18 hover:border-amber-400/35",
    glow: "from-amber-700/8 to-transparent",
    accentText: "text-amber-400/60",
  },
  {
    eyebrow: "Approach",
    heading: "The philosophy behind the choices.",
    body: "Why certain sounds land and others don't. How arrangement serves feeling. What emotional clarity sounds like in a mix. The kind of thinking that separates work that moves people from work that merely sounds correct.",
    status: "Coming soon",
    href: "/contact?subject=studio",
    cta: "Get notified",
    accent: "border-violet-500/18 hover:border-violet-400/35",
    glow: "from-violet-700/8 to-transparent",
    accentText: "text-violet-400/60",
  },
  {
    eyebrow: "Sessions",
    heading: "Unedited moments from the room.",
    body: "Real looks inside actual sessions. The experiments, the second-guessing, the long stretches of listening before something finally clicks — and the commitment to stay when it does.",
    status: "Coming soon",
    href: "/contact?subject=studio",
    cta: "Get notified",
    accent: "border-teal-500/18 hover:border-teal-400/35",
    glow: "from-teal-700/8 to-transparent",
    accentText: "text-teal-400/60",
  },
];

export default function StudioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Home" backHref="/" />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-40">
        {/* Subtle warm glow behind headline */}
        <div
          className="pointer-events-none absolute left-0 top-20 h-[60vh] w-[60vw] opacity-[0.07]"
          style={{
            background:
              "radial-gradient(ellipse at left center, #d97706 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
        />

        <div className="relative max-w-3xl">
          <p className="mb-5 font-body text-[10px] uppercase tracking-[0.45em] text-white/20">
            The Studio
          </p>
          <h1 className="font-display text-6xl font-light leading-[1.05] tracking-tight text-white/90 sm:text-7xl md:text-8xl">
            Inside
            <br />
            <span className="italic text-white/45">the work.</span>
          </h1>
          <p className="mt-8 max-w-lg font-body text-sm leading-[1.8] text-white/35">
            A window into how records get made. The decisions, the doubt, and
            the moments where something finally becomes itself.
          </p>

          <div className="mt-10 h-px w-24 bg-white/[0.08]" />
        </div>
      </section>

      {/* Field note + session photo */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="relative max-w-2xl rounded-2xl border border-white/[0.06] bg-white/[0.018] px-8 py-8 backdrop-blur-sm">
          <div className="mb-5 flex items-center gap-4">
            <p className="font-body text-[9px] uppercase tracking-[0.45em] text-white/20">
              From the studio
            </p>
            <span className="h-px flex-1 bg-white/[0.05]" />
            <p className="font-body text-[9px] text-white/15">March 2026</p>
          </div>
          <p className="font-body text-sm leading-[1.9] text-white/45">
            Working on a mix this week where the verse kept feeling more
            emotionally present than the chorus. Spent two hours adjusting
            compression and high-end before realizing the problem was the
            arrangement. The chorus had more elements. The verse had more space.
            Space is not the same as emptiness. That distinction is most of this
            job.
          </p>
        </div>

        {/* Session photo placeholder */}
        <ImagePlaceholder
          label="Justin in session"
          aspect="aspect-[3/4]"
          className="hidden w-56 lg:block"
        />
        </div>
      </section>

      {/* Three pillars */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {sections.map((s) => (
            <div
              key={s.eyebrow}
              className={`group relative overflow-hidden rounded-2xl border bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.035] ${s.accent}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.glow}`}
              />
              <div className="relative flex h-full flex-col">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <p
                    className={`font-body text-[10px] uppercase tracking-[0.35em] ${s.accentText}`}
                  >
                    {s.eyebrow}
                  </p>
                  <span className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 font-body text-[9px] uppercase tracking-widest text-white/25">
                    {s.status}
                  </span>
                </div>

                <h2 className="mb-4 font-display text-xl font-light leading-snug text-white/80">
                  {s.heading}
                </h2>
                <p className="mb-8 font-body text-sm leading-[1.75] text-white/35">
                  {s.body}
                </p>

                <div className="mt-auto">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 font-body text-xs font-medium uppercase tracking-widest text-white/28 transition-colors group-hover:text-white/60"
                  >
                    <span>{s.cta}</span>
                    <svg
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured course — coming soon ── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-10 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/[0.06]" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
            In development
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-amber-500/15 bg-white/[0.02]">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-violet-900/10" />
          <div
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-[0.08]"
            style={{
              background: "radial-gradient(circle, #d97706 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-[1fr_auto]">
            {/* Content */}
            <div className="flex flex-col gap-5 px-10 py-12 sm:px-14 sm:py-14">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-amber-500/25 bg-amber-500/[0.08] px-4 py-1.5 font-body text-[9px] uppercase tracking-[0.35em] text-amber-300/70">
                  Coming soon
                </span>
                <span className="font-body text-[9px] uppercase tracking-[0.25em] text-white/20">
                  Signature course
                </span>
              </div>

              <div>
                <h2 className="mb-3 font-display text-3xl font-light leading-snug text-white/88 sm:text-4xl">
                  From Demo to
                  <br />
                  <span className="italic text-white/55">Polished Production</span>
                </h2>
                <p className="max-w-lg font-body text-sm leading-[1.85] text-white/38">
                  A workflow guide on turning demo songs into finished,
                  release-ready productions. How to move from rough idea to
                  master — without losing the feeling that made the idea worth
                  pursuing in the first place.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Arrangement", "Mix philosophy", "Sound design", "Finishing songs"].map(
                  (topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-white/[0.07] bg-white/[0.02] px-4 py-1.5 font-body text-[10px] uppercase tracking-widest text-white/28"
                    >
                      {topic}
                    </span>
                  )
                )}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact?subject=studio"
                  className="group inline-flex items-center gap-3 rounded-full border border-amber-500/28 bg-amber-500/[0.07] px-8 py-3.5 backdrop-blur-sm transition-all hover:border-amber-400/48 hover:bg-amber-500/[0.14]"
                >
                  <span className="font-body text-sm font-medium tracking-wide text-amber-100/80 transition-colors group-hover:text-amber-50">
                    Join the waitlist
                  </span>
                  <svg
                    className="h-3.5 w-3.5 text-amber-400/40 transition-all group-hover:translate-x-0.5 group-hover:text-amber-300/70"
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

            {/* Right side — decorative placeholder for course cover */}
            <div className="hidden items-stretch lg:flex">
              <div className="relative w-64 border-l border-white/[0.05]">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <svg
                    className="h-8 w-8 text-white/10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={0.75}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <p className="font-body text-[9px] uppercase tracking-[0.3em] text-white/12">
                    Course cover
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider with philosophy line */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
        <div className="flex items-center gap-8">
          <div className="h-px flex-1 bg-white/[0.05]" />
          <p className="max-w-sm text-center font-display text-sm font-light italic leading-relaxed text-white/22">
            &ldquo;I&rsquo;d rather lose the frequency
            <br />
            than lose the feeling.&rdquo;
          </p>
          <div className="h-px flex-1 bg-white/[0.05]" />
        </div>
      </section>

      {/* Private mentorship — premium CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 via-smoke-950 to-amber-950/20" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.06]" />

          {/* Subtle inner glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, #d97706 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative flex flex-col items-start gap-5 px-10 py-16 sm:px-14 sm:py-20">
            <p className="font-body text-[10px] uppercase tracking-[0.45em] text-white/20">
              Private mentorship
            </p>
            <h2 className="max-w-lg font-display text-4xl font-light leading-snug text-white/85 sm:text-5xl">
              Work directly
              <br />
              <span className="italic text-white/45">with me.</span>
            </h2>
            <p className="max-w-md font-body text-sm leading-[1.8] text-white/32">
              Ongoing one-on-one work for serious artists, producers, and
              composers. We work through your music together — your questions,
              your direction, your craft. By application. Limited spots.
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Link
                href="/contact?subject=studio"
                className="group inline-flex items-center gap-3 rounded-full border border-amber-500/30 bg-amber-500/[0.08] px-8 py-4 backdrop-blur-sm transition-all hover:border-amber-400/50 hover:bg-amber-500/[0.15]"
              >
                <span className="font-body text-sm font-medium tracking-wide text-amber-100/85 transition-colors group-hover:text-amber-50">
                  Apply for mentorship
                </span>
                <svg
                  className="h-3.5 w-3.5 text-amber-400/45 transition-all group-hover:translate-x-0.5 group-hover:text-amber-300/75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/learn/lessons"
                className="font-body text-xs text-white/28 underline underline-offset-4 transition-colors hover:text-white/55"
              >
                Looking for lessons instead?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] px-8 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link
            href="/"
            className="font-body text-xs text-white/20 transition-colors hover:text-white/40"
          >
            ← JW Music Company
          </Link>
          <p className="font-body text-xs text-white/20">
            San Francisco Bay Area
          </p>
        </div>
      </footer>
    </main>
  );
}
