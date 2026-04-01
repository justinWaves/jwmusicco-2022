import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "Selected Work — JW Music Company",
  description:
    "Produced records, mixed and mastered projects, scoring work, and mentorship outcomes from JW Music Company.",
};

// Replace placeholders with real work as the portfolio grows
const categories = [
  {
    id: "produced",
    label: "Produced",
    description: "Records shaped from sketch to finished master.",
    accent: "border-amber-500/15",
    glow: "from-amber-700/8",
    items: [
      {
        title: "Project title",
        artist: "Artist name",
        year: "2024",
        tags: ["Singer-songwriter", "Bay Area"],
        placeholder: true,
      },
      {
        title: "Project title",
        artist: "Artist name",
        year: "2023",
        tags: ["Electronic", "Indie pop"],
        placeholder: true,
      },
      {
        title: "Project title",
        artist: "Artist name",
        year: "2023",
        tags: ["R&B", "Soul"],
        placeholder: true,
      },
    ],
  },
  {
    id: "mixed",
    label: "Mixed & Mastered",
    description: "Records brought to life in the final stage.",
    accent: "border-teal-500/15",
    glow: "from-teal-700/8",
    items: [
      {
        title: "Project title",
        artist: "Artist name",
        year: "2024",
        tags: ["Hip-hop", "Trap"],
        placeholder: true,
      },
      {
        title: "Project title",
        artist: "Artist name",
        year: "2024",
        tags: ["Folk", "Acoustic"],
        placeholder: true,
      },
    ],
  },
  {
    id: "scored",
    label: "Scored",
    description: "Music for games, film, and visual worlds.",
    accent: "border-rose-500/15",
    glow: "from-rose-800/8",
    items: [
      {
        title: "Project title",
        artist: "Indie game / short film",
        year: "2024",
        tags: ["Game score", "Atmospheric"],
        placeholder: true,
      },
      {
        title: "Project title",
        artist: "Short film",
        year: "2023",
        tags: ["Cinematic", "Orchestral hybrid"],
        placeholder: true,
      },
    ],
  },
  {
    id: "education",
    label: "Mentorship",
    description: "Artists who grew through working together.",
    accent: "border-indigo-500/15",
    glow: "from-indigo-700/8",
    items: [
      {
        title: "Student outcome",
        artist: "Artist name",
        year: "2024",
        tags: ["Production", "Songwriting"],
        placeholder: true,
      },
      {
        title: "Student outcome",
        artist: "Artist name",
        year: "2023",
        tags: ["Piano", "Theory"],
        placeholder: true,
      },
    ],
  },
];

export default function WorksPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <PageNav backLabel="Home" backHref="/" />

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-36">
        <p className="mb-4 font-body text-[10px] uppercase tracking-[0.35em] text-white/25">
          Selected work
        </p>
        <h1 className="max-w-2xl font-display text-5xl font-light leading-tight text-white/90 sm:text-6xl md:text-7xl">
          Music, captured
          <br />
          <span className="italic text-white/50">with taste and intention.</span>
        </h1>
        <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-white/35">
          A selection of records produced, mixed, scored, and shaped in collaboration
          with artists who had something real to say.
        </p>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <section key={cat.id} className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
          <div className="mb-8 flex items-center gap-6">
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
              {cat.label}
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.items.map((item, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-2xl border bg-white/[0.02] p-6 ${cat.accent}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.glow} to-transparent`} />
                <div className="relative">
                  {/* Placeholder image area */}
                  <div className="mb-5 flex aspect-square w-full items-center justify-center rounded-xl border border-white/[0.05] bg-white/[0.02]">
                    {item.placeholder && (
                      <p className="font-body text-xs text-white/15">Add artwork</p>
                    )}
                  </div>

                  <h3 className="mb-1 font-display text-base font-light text-white/75">
                    {item.title}
                  </h3>
                  <p className="mb-3 font-body text-sm text-white/35">{item.artist}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.06] px-3 py-1 font-body text-[10px] uppercase tracking-widest text-white/25"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto font-body text-xs text-white/20">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Note */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-8 text-center">
          <p className="font-body text-sm text-white/25">
            Portfolio in progress. Real work and client credits added as releases are confirmed.
          </p>
          <Link
            href="/contact?subject=question"
            className="mt-3 inline-block font-body text-xs text-white/35 underline underline-offset-4 transition-colors hover:text-white/60"
          >
            Want to be in here? Let&rsquo;s work together.
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
