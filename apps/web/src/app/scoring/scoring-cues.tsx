"use client";

import { useState } from "react";

const cues = [
  {
    title: "Threshold",
    mood: "Tense · Cinematic",
    duration: "2:34",
    description: "Electronic percussion, swelling strings, mounting unease.",
    bars: [4, 6, 5, 8, 7, 9, 6, 5, 7, 8, 9, 7, 5, 6, 8, 7, 6, 5, 9, 8, 7, 6, 5, 8, 7, 9, 6, 8, 7, 5],
  },
  {
    title: "Open Water",
    mood: "Atmospheric · Ambient",
    duration: "3:10",
    description: "Sparse piano, textured pads, oceanic space.",
    bars: [3, 5, 4, 6, 5, 7, 6, 5, 4, 6, 7, 5, 4, 3, 5, 6, 5, 4, 6, 7, 5, 4, 6, 5, 7, 6, 4, 5, 6, 4],
  },
  {
    title: "Quiet Victory",
    mood: "Emotional · Intimate",
    duration: "1:58",
    description: "Solo acoustic guitar, soft strings, felt emotion.",
    bars: [5, 6, 7, 5, 6, 8, 7, 6, 5, 7, 8, 6, 5, 6, 7, 8, 7, 6, 5, 8, 7, 6, 8, 7, 5, 6, 8, 7, 6, 5],
  },
];

export function ScoringCues() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {cues.map((cue) => (
        <div
          key={cue.title}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/10 to-indigo-900/5" />
          <div className="relative">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-lg font-light text-white/80">{cue.title}</h3>
                <p className="mt-1 font-body text-[10px] uppercase tracking-widest text-white/30">
                  {cue.mood}
                </p>
              </div>
              <button
                onClick={() => setPlaying(playing === cue.title ? null : cue.title)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all hover:border-rose-400/30 hover:bg-rose-400/10"
              >
                {playing === cue.title ? (
                  <svg className="h-3.5 w-3.5 text-rose-300/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="h-3.5 w-3.5 translate-x-px text-white/40" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Waveform visualization */}
            <div className="mb-4 flex h-10 items-end gap-0.5">
              {cue.bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm transition-colors"
                  style={{
                    height: `${(h / 9) * 100}%`,
                    background:
                      playing === cue.title
                        ? `rgba(251,113,133,${0.25 + (h / 9) * 0.45})`
                        : `rgba(255,255,255,${0.06 + (h / 9) * 0.1})`,
                  }}
                />
              ))}
            </div>

            <div className="flex items-center justify-between">
              <p className="font-body text-xs leading-relaxed text-white/35">{cue.description}</p>
              <span className="font-body text-xs text-white/20">{cue.duration}</span>
            </div>

            <p className="mt-3 font-body text-[10px] uppercase tracking-widest text-white/15">
              Placeholder — add audio src
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
