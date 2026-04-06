import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "Work With Me — JW Music Company",
  description:
    "Recording, production, mixing, mastering, and scoring. Premium creative work for artists and storytellers with something real to say.",
};

const offers = [
  {
    icon: "🎙",
    title: "Record a song I wrote",
    sub: "For artists with a finished song, a voice memo, or a beautiful unfinished idea. Safe, intimate, professionally held.",
    cta: "Book a session",
    href: "/services/recording",
    accent: "border-amber-500/20 hover:border-amber-500/40",
    glow: "from-amber-600/10 to-transparent",
  },
  {
    icon: "🎛",
    title: "Produce my record",
    sub: "For artists ready to build the record — not just capture it. Arrangement, sound design, and creative direction.",
    cta: "Start a conversation",
    href: "/services/production",
    accent: "border-violet-500/20 hover:border-violet-500/40",
    glow: "from-violet-700/10 to-transparent",
  },
  {
    icon: "🎚",
    title: "Mix & master my song",
    sub: "Your record, ready for the world. Nothing lost in translation. Send stems, get masters.",
    cta: "Get a quote",
    href: "/services/mix-master",
    accent: "border-teal-500/20 hover:border-teal-500/40",
    glow: "from-teal-700/10 to-transparent",
  },
  {
    icon: "🎬",
    title: "Score a visual world",
    sub: "Cinematic sound for indie games, short film, trailers, and visual worlds that deserve a soul.",
    cta: "Inquire about a project",
    href: "/scoring",
    accent: "border-rose-500/20 hover:border-rose-500/40",
    glow: "from-rose-800/10 to-transparent",
  },
];

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Home" backHref="/" />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-36">
        <p className="mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-white/25">
          Work with me
        </p>
        <h1 className="max-w-2xl font-display text-5xl font-light leading-tight text-white/90 sm:text-6xl md:text-7xl">
          What are you
          <br />
          <span className="italic text-white/50">trying to make?</span>
        </h1>
        <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-white/35">
          Premium creative work for artists and storytellers with something real
          to say. Not a template. Not a preset. A specific person&rsquo;s taste
          and process, applied to your work.
        </p>
      </section>

      {/* Offers — 2×2 grid */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {offers.map((offer) => (
            <Link
              key={offer.href}
              href={offer.href}
              className={`group relative overflow-hidden rounded-2xl border bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] ${offer.accent}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.glow}`} />
              <div className="relative">
                <div className="mb-5 text-2xl">{offer.icon}</div>
                <h2 className="mb-3 font-display text-xl font-light text-white/85">
                  {offer.title}
                </h2>
                <p className="mb-6 font-body text-sm leading-relaxed text-white/40">
                  {offer.sub}
                </p>
                <div className="flex items-center gap-2 font-body text-xs font-medium uppercase tracking-widest text-white/35 transition-colors group-hover:text-white/65">
                  <span>{offer.cta}</span>
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 border-t border-white/[0.05] pt-14 text-center">
          <p className="mb-2 font-body text-sm text-white/30">
            Not sure which service fits your project?
          </p>
          <Link
            href="/contact"
            className="font-body text-sm text-white/50 underline underline-offset-4 transition-colors hover:text-white/80"
          >
            Ask — I&rsquo;ll help you figure it out.
          </Link>
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
