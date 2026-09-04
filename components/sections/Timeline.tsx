"use client";

import { motion } from "motion/react";
import { memories } from "@/data/memories";
import TimelineItem from "@/components/ui/TimelineItem";

const stickers = [
  "/images/aditi-sticker1.png",
  "/images/aditi-sticker2.png",
  "/images/aditi-sticker3.png",
  "/images/aditi-sticker4.png",
  "/images/aditi-sticker6.png",
];

export default function Timeline() {
  return (
    <section className="relative bg-[#FFF8FC] py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-bold"
        >
          Our Story ❤️
        </motion.h2>

        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-pink-400 via-purple-500 to-pink-400" />

          <div className="space-y-16">

            {memories.map((memory, index) => (
              <div
                key={memory.id}
                className="relative"
              >

                {/* TIMELINE CARD */}
                <TimelineItem
                  title={memory.title}
                  description={memory.description}
                  date={memory.date}
                  index={index}
                />

                {/* STICKER */}
                {index < 5 && (
                  <motion.img
                    src={stickers[index]}
                    alt="Aditi sticker"
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                      rotate: index % 2 === 0 ? 8 : -8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      opacity: {
                        duration: 0.6,
                      },
                      scale: {
                        duration: 0.6,
                      },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className={`
  pointer-events-none
  absolute
  top-1/2
  z-10
  w-24
  -translate-y-1/2
  sm:w-28
  md:w-32
  lg:w-40
                      ${
                        index % 2 === 0
                          ? "right-2 sm:right-6 lg:right-10"
                          : "left-2 sm:left-6 lg:left-10"
                      }
                    `}
                  />
                )}

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}