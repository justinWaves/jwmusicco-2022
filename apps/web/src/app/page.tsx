import { AmbientOrbs } from "@/components/ui/ambient-orbs";
import { FounderSection } from "@/components/ui/founder-section";
import { Nav } from "@/components/ui/nav";
import { ProofSection } from "@/components/ui/proof-section";
import { ScoringBlock } from "@/components/ui/scoring-block";
import { ServiceTile } from "@/components/ui/service-tile";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import { services } from "@/lib/services";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientOrbs />
      <Nav />

      {/* ① Hero */}
      <section className="relative z-10 overflow-hidden">
        {/* Text block */}
        <div className="flex flex-col items-center justify-center px-6 pb-16 pt-40 text-center">
          <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.3em] text-white/30">
            JW Music Company
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-5xl font-light leading-[1.1] tracking-tight text-white/90 sm:text-6xl md:text-7xl">
            Songs, records, and scores —
            <br />
            <span className="italic text-white/55">made with taste.</span>
          </h1>

          <p className="mt-7 max-w-lg font-display text-xl font-light italic leading-relaxed text-white/40 sm:text-2xl">
            Premium creative work for artists and storytellers
            with something real to say.
          </p>

          <p className="mt-4 font-body text-xs font-medium uppercase tracking-[0.25em] text-white/20">
            Recording · Production · Mixing · Scoring
          </p>

          {/* Primary CTA */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-amber-500/35 bg-amber-500/[0.1] px-8 py-4 backdrop-blur-sm transition-all hover:border-amber-400/55 hover:bg-amber-500/[0.18]"
            >
              <span className="font-body text-sm font-medium tracking-wide text-amber-100/90 transition-colors group-hover:text-amber-50">
                Start a project
              </span>
              <svg className="h-3.5 w-3.5 text-amber-400/50 transition-all group-hover:translate-x-0.5 group-hover:text-amber-300/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/works"
              className="group inline-flex items-center gap-2 font-body text-sm text-white/28 transition-colors hover:text-white/60"
            >
              <span>See the work</span>
              <svg className="h-3 w-3 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Cinematic image strip — full-bleed, fades into dark bg above and below */}
        <div className="relative w-full overflow-hidden">
          {/* Top gradient — image emerges from the dark hero background */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32"
            style={{ background: "linear-gradient(to bottom, #0a0a0f, transparent)" }}
          />

          {/* Placeholder — replace with real studio / session photography */}
          <div
            className="relative aspect-[21/9] w-full bg-white/[0.018]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.025) 59px, rgba(255,255,255,0.025) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.025) 59px, rgba(255,255,255,0.025) 60px)",
            }}
          >
            {/* Subtle inner glow — gives warmth even in placeholder state */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 40% 60%, rgba(217,119,6,0.06) 0%, transparent 55%), radial-gradient(ellipse at 70% 30%, rgba(109,40,217,0.04) 0%, transparent 50%)",
              }}
            />

            {/* Center label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <svg
                className="h-7 w-7 text-white/10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={0.75}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="font-body text-[9px] uppercase tracking-[0.4em] text-white/12">
                Justin in studio · Replace with photography
              </p>
            </div>
          </div>

          {/* Bottom gradient — dissolves into background before service tiles */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40"
            style={{ background: "linear-gradient(to top, #0a0a0f, transparent)" }}
          />

          {/* Caption — bottom-left, stays visible above gradient */}
          <div className="absolute bottom-10 left-8 z-20 flex items-center gap-3">
            <div className="h-px w-6 bg-white/20" />
            <p className="font-body text-[9px] uppercase tracking-[0.35em] text-white/28">
              Bay Area Studio
            </p>
          </div>
        </div>
      </section>

      {/* ② Four core service tiles */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, i) => (
            <ServiceTile key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ③ Founder statement — who built this and why */}
      <FounderSection />

      {/* ④ Testimonial — human evidence */}
      <TestimonialSection />

      {/* ⑤ Scoring credibility — film/game proof */}
      <ScoringBlock />

      {/* ⑥ Selected works — studio photo + credits */}
      <ProofSection />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] px-8 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-white/20">
            © {new Date().getFullYear()} JW Music Company · San Francisco Bay Area
          </p>
          <div className="flex items-center gap-6">
            <a href="/studio" className="font-body text-xs text-white/18 transition-colors hover:text-white/40">
              Studio
            </a>
            <a href="/learn/lessons" className="font-body text-xs text-white/18 transition-colors hover:text-white/40">
              Lessons
            </a>
            <a href="/contact" className="font-body text-xs text-white/18 transition-colors hover:text-white/40">
              Contact
            </a>
            <span className="text-white/[0.06]">·</span>
            <a
              href="https://justinwaves.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/15 transition-colors hover:text-white/35"
            >
              justinwaves.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
