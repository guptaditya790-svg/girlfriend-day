"use client";

import { motion } from "motion/react";

const hearts = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 6 + Math.random() * 5,
  size: 18 + Math.random() * 18,
}));

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: -900,
            opacity: [0, 1, 1, 0],
            x: [0, 25, -20, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          className="pointer-events-none absolute bottom-0"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}