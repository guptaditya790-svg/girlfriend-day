"use client";

import { motion } from "motion/react";

export default function FinalLetter() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-4
        py-20
        sm:px-6
        md:py-28
      "
    >
      {/* Soft background glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.10),transparent_65%)]
        "
      />

      <div className="relative z-10 w-full max-w-3xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="
            mb-8
            text-center
            text-4xl
            font-bold
            tracking-tight
            text-gray-900
            sm:text-5xl
            md:text-6xl
          "
        >
          A Letter For You 💖
        </motion.h2>

        {/* LETTER */}
        <motion.div
          initial={{
            opacity: 0,
            scaleY: 0.06,
            transformOrigin: "top center",
          }}
          whileInView={{
            opacity: 1,
            scaleY: 1,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            origin-top
            overflow-hidden
            rounded-[20px]
            border
            border-pink-200/70
            bg-[#fffafc]
            shadow-[0_25px_70px_rgba(0,0,0,0.12)]
          "
        >

          {/* TOP ROLL */}
          <div
            className="
              relative
              z-20
              h-7
              w-full
              rounded-[50%]
              border
              border-pink-200
              bg-gradient-to-b
              from-white
              via-pink-50
              to-pink-100
              shadow-[0_5px_12px_rgba(0,0,0,0.12)]
              sm:h-9
            "
          />

          {/* PAPER */}
          <div
            className="
              px-6
              py-10
              sm:px-10
              sm:py-12
              md:px-14
              md:py-14
            "
          >

            {/* Letter content */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: 1.1,
                duration: 0.9,
              }}
              className="
                space-y-7
                text-[17px]
                leading-8
                text-slate-700
                sm:text-lg
                sm:leading-9
              "
            >

              <p className="font-medium text-slate-800">
                My Dearest Aditi,
              </p>

              <p>
                Every moment with you has become one of my favorite
                memories.
              </p>

              <p>
                Thank you for making ordinary days feel special,
                for making me smile when I needed it the most,
                and for simply being you.
              </p>

              <p>
                No matter what life brings, I promise to always
                cherish you, respect you, and stand beside you.
              </p>

              <p className="pt-2 font-medium text-slate-800">
                Happy Girlfriend Day ❤️
              </p>

              {/* Voice note placeholder */}
              <div className="pt-4">
                {/* 
                  Your VoiceNote component can go here later.

                  Example:

                  <VoiceNote />
                */}
              </div>

              {/* Signature */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 1.5,
                  duration: 0.8,
                }}
                className="
                  pt-5
                  text-right
                  text-slate-700
                "
              >
                <p>Forever yours,</p>

                <p className="
                  mt-1
                  text-xl
                  font-semibold
                  text-pink-500
                ">
                  Aditya ❤️
                </p>
              </motion.div>

            </motion.div>
          </div>

          {/* BOTTOM ROLL */}
          <div
            className="
              relative
              z-20
              h-7
              w-full
              rounded-[50%]
              border
              border-pink-200
              bg-gradient-to-b
              from-pink-100
              via-pink-50
              to-white
              shadow-[0_-5px_12px_rgba(0,0,0,0.10)]
              sm:h-9
            "
          />

        </motion.div>

        {/* Tiny ending heart */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 2,
            duration: 0.6,
          }}
          className="
            mt-8
            text-center
            text-2xl
          "
        >
          💗
        </motion.div>

      </div>
    </section>
  );
}