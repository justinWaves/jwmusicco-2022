import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "Services — JW Music Company",
  description:
    "Premium recording, production, mixing, mastering, and scoring services for artists and storytellers. Bay Area and remote.",
};

const serviceGroups = [
  {
    label: "Studio services",
    items: [
      {
        icon: "🎙",
        title: "Record a song I wrote",
        sub: "Intimate, professional sessions for artists with something real to say.",
        cta: "Book a session",
        href: "/services/recording",
        accent: "border-amber-500/20 hover:border-amber-500/40",
        glow: "from-amber-600/10 to-transparent",
      },
      {
        icon: "🎛",
        title: "Produce my record",
        sub: "From sketch to finished record — arrangement, sound, emotion, direction.",
        cta: "Request a quote",
        href: "/services/production",
        accent: "border-violet-500/20 hover:border-violet-500/40",
        glow: "from-violet-700/10 to-transparent",
      },
      {
        icon: "🎚",
        title: "Mix & master my song",
        sub: "Pro-grade depth, clarity, and presence. Send stems, get masters.",
        cta: "Request a quote",
        href: "/services/mix-master",
        accent: "border-teal-500/20 hover:border-teal-500/40",
        glow: "from-teal-700/10 to-transparent",
      },
    ],
  },
  {
    label: "Scoring & sync",
    items: [
      {
        icon: "🎬",
        title: "Film & game scoring",
        sub: "Cinematic sound for indie games, short film, trailers, and visual worlds.",
        cta: "Inquire about a project",
        href: "/scoring",
        accent: "border-rose-500/20 hover:border-rose-500/40",
        glow: "from-rose-800/10 to-transparent",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Home" backHref="/" />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-36">
        <p className="mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-white/25">
          Services
        </p>
        <h1 className="max-w-2xl font-display text-5xl font-light leading-tight text-white/90 sm:text-6xl md:text-7xl">
          What can I
          <br />
          <span className="italic text-white/50">help you make?</span>
        </h1>
        <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-white/35">
          Premium creative services for artists, storytellers, and anyone with
          something real to put into the world.
        </p>
      </section>

      {/* Service groups */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        {serviceGroups.map((group) => (
          <div key={group.label} className="mb-16 last:mb-0">
            {/* Section label */}
            <div className="mb-8 flex items-center gap-6">
              <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/20">
                {group.label}
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative overflow-hidden rounded-2xl border bg-white/[0.025] p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] ${item.accent}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.glow}`}
                  />
                  <div className="relative">
                    <div className="mb-5 text-2xl">{item.icon}</div>
                    <h3 className="mb-3 font-display text-xl font-light text-white/85">
                      {item.title}
                    </h3>
                    <p className="mb-6 font-body text-sm leading-relaxed text-white/40">
                      {item.sub}
                    </p>
                    <div className="flex items-center gap-2 font-body text-xs font-medium uppercase tracking-widest text-white/35 transition-colors group-hover:text-white/65">
                      <span>{item.cta}</span>
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
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="mt-16 border-t border-white/[0.05] pt-14 text-center">
          <p className="mb-2 font-body text-sm text-white/30">
            Not sure which service fits your project?
          </p>
          <Link
            href="/contact?subject=question"
            className="font-body text-sm text-white/50 underline underline-offset-4 transition-colors hover:text-white/80"
          >
            Ask a question — I&rsquo;ll help you figure it out.
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
