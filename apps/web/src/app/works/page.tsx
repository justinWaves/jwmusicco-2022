import type { Metadata } from "next";
import Link from "next/link";
import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { PageNav } from "@/components/layout/page-nav";

export const metadata: Metadata = {
  title: "Selected Work — JW Music Company",
  description:
    "Artists produced, records mixed and mastered, scores composed, and mentorship outcomes from JW Music Company.",
};

const artists = [
  {
    name: "Artist name",
    role: "Produced",
    tags: ["Singer-songwriter", "Bay Area"],
    placeholder: true,
  },
  {
    name: "Artist name",
    role: "Co-produced · Mixed",
    tags: ["Indie pop", "Electronic"],
    placeholder: true,
  },
  {
    name: "Artist name",
    role: "Recorded · Mixed",
    tags: ["R&B", "Soul"],
    placeholder: true,
  },
  {
    name: "Artist name",
    role: "Full production",
    tags: ["Hip-hop", "Experimental"],
    placeholder: true,
  },
  {
    name: "Artist name",
    role: "Produced · Mastered",
    tags: ["Folk", "Acoustic"],
    placeholder: true,
  },
  {
    name: "Artist name",
    role: "Produced",
    tags: ["Alt-pop", "Cinematic"],
    placeholder: true,
  },
];

const categories = [
  {
    id: "mixed",
    label: "Mixed & Mastered",
    description: "Records brought to clarity in the final stage.",
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
      {
        title: "Project title",
        artist: "Artist name",
        year: "2023",
        tags: ["Electronic", "Indie"],
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
        artist: "Indie game",
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
    id: "mentorship",
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
          Artists, records,
          <br />
          <span className="italic text-white/50">and scored worlds.</span>
        </h1>
        <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-white/35">
          A selection of work made in collaboration with artists who had
          something real to say — produced, mixed, scored, and shaped with care.
        </p>
      </section>

      {/* ── Artists I've Worked With ── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-10 flex items-center gap-6">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
            Artists
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {artists.map((artist, i) => (
            <div key={i} className="group flex flex-col gap-3">
              <ImagePlaceholder
                label="Artist photo"
                aspect="aspect-square"
                className="transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/[0.04]"
              />
              <div>
                <p className="font-body text-sm font-medium text-white/65">{artist.name}</p>
                <p className="mb-2 font-body text-[11px] text-white/30">{artist.role}</p>
                <div className="flex flex-wrap gap-1">
                  {artist.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.06] px-2 py-0.5 font-body text-[9px] uppercase tracking-widest text-white/22"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-xs text-white/18">
          Artist credits updated as releases are confirmed and permission is granted.
        </p>
      </section>

      {/* ── Produced ── */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <div className="mb-8 flex items-center gap-6">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
            Produced
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured produced item — slightly larger */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/15 bg-white/[0.02] sm:col-span-2 lg:col-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700/8 to-transparent" />
            <div className="relative p-6">
              <ImagePlaceholder label="Album art" aspect="aspect-square" className="mb-5" />
              <h3 className="mb-1 font-display text-base font-light text-white/75">
                Project title
              </h3>
              <p className="mb-1 font-body text-sm text-white/35">Artist name</p>
              <p className="mb-3 font-body text-[11px] uppercase tracking-widest text-amber-400/50">
                Full production
              </p>
              <div className="flex flex-wrap gap-2">
                {["Singer-songwriter", "Bay Area"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.06] px-3 py-1 font-body text-[10px] uppercase tracking-widest text-white/25"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto font-body text-xs text-white/20">2024</span>
              </div>
            </div>
          </div>

          {[
            { tags: ["Electronic", "Indie pop"], year: "2023", role: "Co-produced" },
            { tags: ["R&B", "Soul"], year: "2023", role: "Produced · Mixed" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-amber-500/15 bg-white/[0.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700/8 to-transparent" />
              <div className="relative p-6">
                <ImagePlaceholder label="Album art" aspect="aspect-square" className="mb-5" />
                <h3 className="mb-1 font-display text-base font-light text-white/75">
                  Project title
                </h3>
                <p className="mb-1 font-body text-sm text-white/35">Artist name</p>
                <p className="mb-3 font-body text-[11px] uppercase tracking-widest text-amber-400/50">
                  {item.role}
                </p>
                <div className="flex flex-wrap gap-2">
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

      {/* ── Mixed & Mastered / Scored / Mentorship ── */}
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
                  <ImagePlaceholder label="Add artwork" aspect="aspect-square" className="mb-5" />
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

      {/* Note + CTA */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-32">
        <div className="rounded-2xl border border-white/[0.05] bg-white/[0.015] p-8 text-center">
          <p className="font-body text-sm text-white/25">
            Portfolio in progress. Real work and artist credits added as releases are confirmed.
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
