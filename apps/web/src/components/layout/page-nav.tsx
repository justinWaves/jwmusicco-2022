"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface PageNavProps {
  backLabel?: string;
  backHref?: string;
}

export function PageNav({ backLabel = "Home", backHref = "/" }: PageNavProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6"
    >
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/jw-logo-round.svg"
            alt="JW Music Company"
            width={32}
            height={32}
            style={{ width: 32, height: 32 }}
            className="opacity-70 transition-opacity group-hover:opacity-100"
          />
        </Link>

        {/* Back breadcrumb */}
        <Link
          href={backHref}
          className="group hidden items-center gap-2 sm:flex"
        >
          <svg
            className="h-3 w-3 text-white/25 transition-all group-hover:-translate-x-0.5 group-hover:text-white/55"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="font-body text-xs uppercase tracking-widest text-white/25 transition-colors group-hover:text-white/55">
            {backLabel}
          </span>
        </Link>
      </div>

      <Link
        href="/contact"
        className="rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-2 font-body text-xs font-medium uppercase tracking-widest text-white/55 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.1] hover:text-white/90"
      >
        Get in touch
      </Link>
    </motion.header>
  );
}
