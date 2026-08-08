"use client";

import { motion } from "motion/react";
import useLoveCounter from "@/hooks/useLoveCounter";

export default function LoveCounter() {
  const counter = useLoveCounter(new Date("2008-09-05T00:00:00"));

  const stats = [
    { label: "Days", value: counter.days },
    { label: "Hours", value: counter.hours },
    { label: "Minutes", value: counter.minutes },
    { label: "Seconds", value: counter.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFF8FC] py-32">

      {/* Background Glow */}
      <div className="absolute left-[-150px] top-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute right-[-150px] bottom-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Animated Heart */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mb-8 text-center text-6xl"
        >
          ❤️
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-5xl font-bold"
        >
          Days you spent of 🌍
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center text-lg text-gray-600"
        >
          Also no. of nights, moon felt ordinary🌛
        </motion.p>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4 + index * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="
                rounded-[32px]
                border
                border-white/40
                bg-white/60
                p-8
                text-center
                backdrop-blur-xl
                shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all
                duration-500
              "
            >

              <motion.h3
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                }}
                className="text-6xl font-extrabold text-pink-500"
              >
                {item.value}
              </motion.h3>

              <p className="mt-4 text-lg font-medium text-gray-600">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}