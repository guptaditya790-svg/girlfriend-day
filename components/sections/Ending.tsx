"use client";

import { motion } from "motion/react";
import VoiceNote from "@/components/sections/VoiceNote";

const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 4,
}));

export default function Ending() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#120020] via-[#1d0835] to-black">

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* Moon */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-20 top-20 h-32 w-32 rounded-full bg-yellow-100 shadow-[0_0_80px_rgba(255,255,180,0.8)]"
      />

      {/* Main Content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="relative z-10 text-center text-white"
      >
        <h2 className="mb-8 text-6xl font-bold">
          Happy BirthDay Motuuu ❤️
        </h2>

        <p className="mx-auto max-w-2xl text-2xl leading-10 text-pink-100">
          Thank you for existing.
          <br />
          Thank you for making my life brighter.
          <br />
          I hope you gave a kadakk smile now!!😁
          <br />
          <br />
          I lovee uhh Guddaa 🫂❤️
        </p>
<VoiceNote />
        <p className="mt-16 text-xl text-pink-300">
          — Forever Yours,
          <br />
          Aditya(chotu) ❤️
        </p>
      </motion.div>

    </section>
  );
}