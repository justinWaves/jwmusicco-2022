"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Link from "next/link";

interface BookingEmbedProps {
  /**
   * Your Cal.com link in the format "username/event-slug"
   * e.g. "justinwaves/recording-session"
   * Set via NEXT_PUBLIC_CAL_RECORDING_LINK or NEXT_PUBLIC_CAL_LESSONS_LINK in .env.local
   */
  calLink?: string;
  /** Unique namespace — prevents conflicts if multiple embeds are on the same page */
  namespace?: string;
  /** Fallback /contact href shown when no calLink is configured */
  fallbackHref?: string;
  /** CTA label shown in the fallback state */
  fallbackLabel?: string;
  /** Tailwind accent classes for the fallback CTA button */
  accentClass?: string;
  /** Optional note shown beneath the scheduler */
  note?: string;
}

export function BookingEmbed({
  calLink,
  namespace = "booking",
  fallbackHref = "/contact",
  fallbackLabel = "Get in touch",
  accentClass = "border-amber-500/35 bg-amber-500/[0.1] text-amber-100/90 hover:border-amber-400/55 hover:bg-amber-500/[0.18]",
  note,
}: BookingEmbedProps) {
  useEffect(() => {
    if (!calLink) return;
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          // amber-400 on dark, matching JW Music Co brand
          dark: { "cal-brand": "#fbbf24" },
          light: { "cal-brand": "#d97706" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [calLink, namespace]);

  if (calLink) {
    return (
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-2xl border border-white/[0.07]">
          <Cal
            namespace={namespace}
            calLink={calLink}
            style={{ width: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
        {note && (
          <p className="text-center font-body text-xs text-white/25">{note}</p>
        )}
      </div>
    );
  }

  // Fallback: shown while calLink is not yet configured
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-8 py-12 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
        <svg
          className="h-5 w-5 text-white/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
      </div>
      <div>
        <p className="font-body text-sm text-white/50">
          Online scheduling coming soon.
        </p>
        <p className="mt-1 font-body text-xs text-white/25">
          In the meantime, send a message and we&rsquo;ll get you booked.
        </p>
      </div>
      <Link
        href={fallbackHref}
        className={`group inline-flex items-center gap-3 rounded-full border px-7 py-3.5 font-body text-sm font-medium tracking-wide backdrop-blur-sm transition-all ${accentClass}`}
      >
        {fallbackLabel}
        <svg
          className="h-3.5 w-3.5 opacity-50 transition-all group-hover:translate-x-0.5 group-hover:opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
      {note && (
        <p className="font-body text-xs text-white/20">{note}</p>
      )}
    </div>
  );
}
