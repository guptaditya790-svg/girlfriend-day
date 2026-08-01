"use client";

import { motion } from "motion/react";

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-pink-400/25 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-15%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/15 blur-3xl"
      />

    </div>
  );
}