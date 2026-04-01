"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Scoring", href: "/scoring" },
  { label: "Learn", href: "/learn" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <Image
          src="/jw-logo-round.svg"
          alt="JW Music Company"
          width={36}
          height={36}
          style={{ width: 36, height: 36 }}
          className="opacity-90 transition-opacity group-hover:opacity-100"
        />
        <span className="hidden font-display text-sm font-light tracking-[0.15em] text-white/60 transition-colors group-hover:text-white/90 sm:block uppercase">
          JW Music Co
        </span>
      </Link>

      {/* Nav links */}
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-body text-xs font-medium uppercase tracking-widest text-white/40 transition-colors hover:text-white/80"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <Link
        href="/contact"
        className="rounded-full border border-white/[0.12] bg-white/[0.05] px-5 py-2 font-body text-xs font-medium uppercase tracking-widest text-white/60 backdrop-blur-sm transition-all hover:border-white/25 hover:bg-white/[0.1] hover:text-white/90"
      >
        Get in touch
      </Link>
    </motion.header>
  );
}
