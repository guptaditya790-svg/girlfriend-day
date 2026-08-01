"use client";

import { motion } from "motion/react";
import { finalLetter } from "@/data/finalLetter";

export default function FinalLetter() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8FC] py-32">

      {/* Background Glow */}
      <div className="absolute left-[-150px] top-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute right-[-150px] bottom-20 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">

        <motion.div
          initial={{ opacity: 0, rotateX: -15, y: 80 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[40px] border border-white/40 bg-white/70 p-12 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        >
          <h2 className="mb-10 text-center text-5xl font-bold">
            A Letter For You 💖
          </h2>

          <div className="whitespace-pre-line text-xl leading-10 text-gray-700">
            {finalLetter}
          </div>
        </motion.div>

      </div>
    </section>
  );
}