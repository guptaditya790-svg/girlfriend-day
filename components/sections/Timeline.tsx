"use client";

import { motion } from "motion/react";
import { memories } from "@/data/memories";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Timeline() {
  return (
    <section className="relative bg-[#FFF8FC] py-32">
      <div className="mx-auto max-w-6xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-bold"
        >
          Our Story ❤️
        </motion.h2>

        <div className="relative">

          {/* Center Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-pink-400 via-purple-500 to-pink-400" />

          <div className="space-y-16">

            {memories.map((memory, index) => (
              <TimelineItem
                key={memory.id}
                title={memory.title}
                description={memory.description}
                date={memory.date}
                index={index}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}