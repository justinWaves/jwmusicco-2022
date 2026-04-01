const tiers = [
  {
    name: "Co-Production",
    price: "Starting at $800",
    bestFor: "Artists who already have a vision and need a skilled collaborator to execute it alongside them.",
    includes: [
      "Collaborative arrangement and sound design",
      "Tracking sessions (vocals, instruments)",
      "Rough mix for approval",
      "2 revision rounds",
    ],
    cta: "Start a conversation",
    href: "/contact?subject=production",
    accent: "border-violet-500/20",
    glow: "from-violet-800/10 to-transparent",
  },
  {
    name: "Full Production",
    price: "Starting at $1,800",
    bestFor: "Artists handing over a song concept or demo, ready to let the full vision be realized.",
    includes: [
      "Everything in Co-Production",
      "Full arrangement from scratch",
      "Session musician coordination",
      "Rough + final mix included",
      "Stem delivery",
    ],
    cta: "Request a quote",
    href: "/contact?subject=production",
    accent: "border-violet-400/30",
    glow: "from-violet-700/15 to-transparent",
    featured: true,
  },
  {
    name: "Artist Partnership",
    price: "Bespoke pricing",
    bestFor: "Deeper creative relationships — EP, album, or ongoing work where we build a sound together over time.",
    includes: [
      "Everything in Full Production",
      "Creative direction and A&R input",
      "Multi-song project planning",
      "Priority scheduling",
      "Mixing & mastering included",
    ],
    cta: "Apply for a project",
    href: "/contact?subject=production",
    accent: "border-indigo-500/20",
    glow: "from-indigo-900/10 to-transparent",
  },
];

export function ProductionTiers() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`relative overflow-hidden rounded-2xl border bg-white/[0.025] p-8 backdrop-blur-sm ${tier.accent} ${
            tier.featured ? "ring-1 ring-violet-400/20" : ""
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${tier.glow}`} />
          <div className="relative flex h-full flex-col">
            {tier.featured && (
              <div className="mb-4 inline-flex self-start rounded-full border border-violet-400/25 bg-violet-400/10 px-3 py-1">
                <span className="font-body text-[10px] uppercase tracking-widest text-violet-300/80">
                  Most popular
                </span>
              </div>
            )}

            <h3 className="mb-1 font-display text-xl font-light text-white/85">{tier.name}</h3>
            <p className="mb-5 font-body text-base font-medium text-violet-300/70">{tier.price}</p>

            {/* Best for */}
            <div className="mb-5 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <p className="mb-1 font-body text-[10px] uppercase tracking-widest text-white/25">
                Best for
              </p>
              <p className="font-body text-xs leading-relaxed text-white/50">{tier.bestFor}</p>
            </div>

            {/* Includes */}
            <ul className="mb-8 flex flex-col gap-3">
              {tier.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400/40" />
                  <span className="font-body text-sm leading-snug text-white/50">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto">
              <a
                href={tier.href}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/[0.08] px-6 py-3.5 font-body text-sm font-medium tracking-wide text-violet-100/80 transition-all hover:border-violet-400/50 hover:bg-violet-500/[0.15] hover:text-violet-50"
              >
                {tier.cta}
                <svg
                  className="h-3 w-3 text-violet-400/50 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
