"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

interface ServiceTileProps {
  service: Service;
  index: number;
}

export function ServiceTile({ service, index }: ServiceTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
    >
      <Link href={service.href} className="group block h-full">
        <div
          className={cn(
            "tile-glow relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300",
            "hover:border-white/[0.12] hover:bg-white/[0.06]",
            "cursor-pointer"
          )}
        >
          {/* Gradient background on hover */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
              service.accent
            )}
          />

          <div className="relative z-10 flex h-full flex-col">
            {/* Icon */}
            <span className="mb-5 block text-4xl leading-none">
              {service.icon}
            </span>

            {/* Headline */}
            <h2 className="mb-3 font-display text-2xl font-light leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
              {service.headline}
            </h2>

            {/* Subtext */}
            <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-white/45 group-hover:text-white/60 transition-colors duration-200">
              {service.sub}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2">
              <span className="font-body text-xs font-medium uppercase tracking-widest text-white/40 transition-colors duration-200 group-hover:text-white/70">
                {service.cta}
              </span>
              <svg
                className="h-3 w-3 text-white/30 transition-all duration-200 group-hover:translate-x-1 group-hover:text-white/60"
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
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
