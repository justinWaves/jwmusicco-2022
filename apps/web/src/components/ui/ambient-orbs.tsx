"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientOrbs() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {/* Smoky indigo — top left */}
      <motion.div
        className="orb absolute -left-[25%] -top-[15%] h-[75vh] w-[75vh]"
        style={{ background: "radial-gradient(circle, #312e81 0%, #1e1b4b 60%, transparent 100%)" }}
        animate={{
          x: [0, 45, -25, 0],
          y: [0, -35, 22, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Ember orange — bottom right */}
      <motion.div
        className="orb absolute -bottom-[20%] -right-[15%] h-[65vh] w-[65vh]"
        style={{ background: "radial-gradient(circle, #c2410c 0%, #7c2d12 55%, transparent 100%)" }}
        animate={{
          x: [0, -55, 18, 0],
          y: [0, 32, -22, 0],
          scale: [1, 0.94, 1.09, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Moonlit teal — center right */}
      <motion.div
        className="orb absolute right-[2%] top-[28%] h-[45vh] w-[45vh]"
        style={{ background: "radial-gradient(circle, #0d9488 0%, #134e4a 55%, transparent 100%)" }}
        animate={{
          x: [0, -28, 12, 0],
          y: [0, 38, -14, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 7 }}
      />

      {/* Soft violet — lower left */}
      <motion.div
        className="orb absolute bottom-[8%] left-[10%] h-[38vh] w-[38vh]"
        style={{ background: "radial-gradient(circle, #6d28d9 0%, #3b0764 55%, transparent 100%)" }}
        animate={{
          x: [0, 28, -16, 0],
          y: [0, -28, 18, 0],
          scale: [1, 0.97, 1.07, 1],
        }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 11 }}
      />
    </div>
  );
}
