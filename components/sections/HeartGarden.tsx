"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Effect {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const emojis = ["❤️", "🌸", "✨", "💖", "🦋"];

export default function HeartGarden() {
  const [effects, setEffects] = useState<Effect[]>([]);

  function createMagic(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newEffects: Effect[] = emojis.map((emoji, index) => ({
      id: Date.now() + index,
      x: x + (Math.random() - 0.5) * 80,
      y: y + (Math.random() - 0.5) * 80,
      emoji,
    }));

    setEffects((prev) => [...prev, ...newEffects]);

    setTimeout(() => {
      setEffects((prev) =>
        prev.filter(
          (item) =>
            !newEffects.some((effect) => effect.id === item.id)
        )
      );
    }, 2200);
  }

  return (
    <section
      onClick={createMagic}
      className="relative flex h-screen cursor-pointer items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-[#FFF8FC] to-purple-100"
    >
      {/* Background Glow */}
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-purple-300/30 blur-3xl" />

      {/* Glass Card */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="z-10 rounded-[36px] border border-white/40 bg-white/60 p-12 text-center shadow-[0_25px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl"
      >
        <h2 className="text-5xl font-bold">
          🌸 Heart Garden
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Click anywhere and let love bloom.
        </p>
      </motion.div>

      <AnimatePresence>
        {effects.map((effect) => (
          <motion.div
            key={effect.id}
            initial={{
              opacity: 1,
              scale: 0,
              x: effect.x,
              y: effect.y,
            }}
            animate={{
              opacity: 0,
              scale: 1.8,
              y: effect.y - 180,
              x: effect.x + (Math.random() - 0.5) * 120,
              rotate: Math.random() * 360,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 2.2,
              ease: "easeOut",
            }}
            className="absolute text-4xl select-none"
          >
            {effect.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
}