"use client";

import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { FaChevronDown } from "react-icons/fa";
import FloatingHearts from "@/components/ui/FloatingHearts";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF8FC]">

      <AuroraBackground />
      <FloatingHearts />

      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 mx-6 max-w-4xl rounded-[40px] border border-white/40 bg-white/30 p-12 text-center shadow-2xl backdrop-blur-xl"
      >

        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
          }}
          className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl"
        >
          Happy Birthdayyy Motuujiii ❤️
        </motion.h1>

        <div className="mx-auto mb-8 max-w-2xl text-xl text-gray-700 md:text-2xl">

          <TypeAnimation
            sequence={[
              "Welcome motuuu jiii",
              2000,
              "Click the button on bottom right of screen",
              2000,
              "fir i hope every scroll worthsss...🫂💗",
              2000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />

        </div>

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-10 flex justify-center"
        >
          <FaChevronDown className="text-3xl text-pink-500" />
        </motion.div>

      </motion.div>

    </section>
  );
}