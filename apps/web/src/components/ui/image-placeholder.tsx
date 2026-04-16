interface ImagePlaceholderProps {
  label?: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-square" or "aspect-[3/4]" */
  aspect?: string;
  className?: string;
}

export function ImagePlaceholder({
  label = "Photo coming soon",
  aspect = "aspect-[3/4]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] ${aspect} ${className}`}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <svg
          className="h-6 w-6 text-white/15"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="font-body text-[9px] uppercase tracking-[0.3em] text-white/15">{label}</p>
      </div>
    </div>
  );
}
