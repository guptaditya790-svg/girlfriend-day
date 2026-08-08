"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { messages } from "@/data/messages";

export default function SecretLetters() {
  const [message, setMessage] = useState<string | null>(null);
  const [opened, setOpened] = useState(false);

  function openLetter() {
    const random =
      messages[Math.floor(Math.random() * messages.length)];

    setMessage(random);
    setOpened(true);
  }

  return (
    <section className="relative overflow-hidden bg-[#FFF8FC] py-32">

      {/* Background Glow */}
      <div className="absolute left-[-120px] top-10 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-5xl font-bold"
        >
          Secret Letters 💌
        </motion.h2>

        {/* Envelope */}

        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={openLetter}
          className="mx-auto flex h-52 w-72 cursor-pointer items-center justify-center rounded-[30px] border border-white/40 bg-white/70 shadow-[0_25px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl"
        >
          <motion.div
            animate={{
              rotate: opened ? 180 : 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="text-8xl"
          >
            💌
          </motion.div>
        </motion.div>

        <p className="mt-6 text-gray-500">
          Click the envelope to reveal a quality of Aditi ❤️
        </p>

        <AnimatePresence>

          {message && (

            <motion.div
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mx-auto mt-16 max-w-2xl rounded-[36px] border border-white/40 bg-white/70 p-10 shadow-[0_25px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl"
            >
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="text-2xl leading-relaxed text-gray-700"
              >
                {message}
              </motion.p>
            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>
  );
}