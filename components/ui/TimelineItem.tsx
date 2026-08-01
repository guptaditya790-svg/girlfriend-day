"use client";

import { motion } from "motion/react";

interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  index: number;
}

export default function TimelineItem({
  title,
  description,
  date,
  index,
}: TimelineItemProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.7,
      }}
      className="relative flex w-full items-center"
    >
      {/* Left Card */}
      <div className={`w-1/2 ${isLeft ? "pr-12" : ""}`}>
        {isLeft && (
          <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-medium text-pink-500">{date}</p>

            <h3 className="mt-2 text-2xl font-bold text-[#222]">
              {title}
            </h3>

            <p className="mt-3 text-gray-600">{description}</p>
          </div>
        )}
      </div>

      {/* Timeline Dot */}
      <div className="relative z-20 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 shadow-[0_0_20px_rgba(255,77,141,0.7)]">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      {/* Right Card */}
      <div className={`w-1/2 ${!isLeft ? "pl-12" : ""}`}>
        {!isLeft && (
          <div className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-2xl backdrop-blur-xl">
            <p className="text-sm font-medium text-pink-500">{date}</p>

            <h3 className="mt-2 text-2xl font-bold text-[#222]">
              {title}
            </h3>

            <p className="mt-3 text-gray-600">{description}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}