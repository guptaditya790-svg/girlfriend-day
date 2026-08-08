"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Heart {
  id: number;
  x: number;
  y: number;
  heart: string;
  dx: number;
  dy: number;
  rotate: number;
}

const heartTypes = ["❤️", "🦋", "💐", "🌻", "💓"];

export default function HeartGarden() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  function createHeartBurst(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = e.clientX - rect.left;
    const centerY = e.clientY - rect.top;

    const newHearts: Heart[] = Array.from({ length: 12 }, (_, index) => ({
      id: Date.now() + index + Math.random(),

      x: centerX,
      y: centerY,

      heart:
        heartTypes[
          Math.floor(Math.random() * heartTypes.length)
        ],

      dx: (Math.random() - 0.5) * 220,

      dy: -(Math.random() * 180 + 80),

      rotate: (Math.random() - 0.5) * 60,
    }));

    setHearts((prev) => [...prev, ...newHearts]);

    setTimeout(() => {
      setHearts((prev) =>
        prev.filter(
          (item) =>
            !newHearts.some((newHeart) => newHeart.id === item.id)
        )
      );
    }, 1800);
  }

  return (
    <section
      onClick={createHeartBurst}
      className="relative flex h-screen cursor-pointer items-center justify-center overflow-hidden bg-pink-50"
    >
      <h2 className="pointer-events-none z-20 text-center text-5xl font-bold">
        Click Anywhere ❤️
      </h2>

      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              opacity: 1,
              scale: 0,
              left: heart.x,
              top: heart.y,
            }}
            animate={{
              opacity: 0,
              scale: 1.5,
              left: heart.x + heart.dx,
              top: heart.y + heart.dy,
              rotate: heart.rotate,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
            }}
            className="pointer-events-none absolute z-10 text-3xl"
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            {heart.heart}
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}