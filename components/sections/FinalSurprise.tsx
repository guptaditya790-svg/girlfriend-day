"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const stickers = [
  "/images/aditi-sticker1.png",
  "/images/aditi-sticker2.png",
  "/images/aditi-sticker3.png",
  "/images/aditi-sticker4.png",
  "/images/aditi-sticker5.png",
];

export default function Surprise() {
  const [opened, setOpened] = useState(false);
  const [currentSticker, setCurrentSticker] = useState(0);
  const [confetti, setConfetti] = useState(false);

  // Sticker slideshow starts ONLY after opening
  useEffect(() => {
    if (!opened) return;

    const interval = setInterval(() => {
      setCurrentSticker((prev) => (prev + 1) % stickers.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [opened]);

  function openSurprise() {
    if (opened) return;

    // Trigger party animation
    setConfetti(true);
    setOpened(true);

    // Remove confetti after animation
    setTimeout(() => {
      setConfetti(false);
    }, 1800);
  }

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
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.12),transparent_65%)]
        "
      />

      {/* ================= PARTY CONFETTI ================= */}

      <AnimatePresence>
        {confetti && (
          <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden">
            {Array.from({ length: 45 }).map((_, i) => (
              <motion.span
                key={i}
                initial={{
                  opacity: 1,
                  x: "50vw",
                  y: "45vh",
                  scale: 0,
                  rotate: 0,
                }}
                animate={{
                  opacity: [1, 1, 0],
                  x: `${50 + (Math.random() - 0.5) * 100}vw`,
                  y: `${25 + Math.random() * 65}vh`,
                  scale: [0.4, 1, 0.7],
                  rotate: Math.random() * 720 - 360,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.5 + Math.random() * 0.7,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-3
                  w-2
                  rounded-sm
                  bg-pink-400
                "
                style={{
                  marginLeft: `${(Math.random() - 0.5) * 20}px`,
                }}
              />
            ))}

            {/* Big central party pop */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.3, 1.5, 2],
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                text-7xl
                sm:text-8xl
              "
            >
              🎉
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 w-full max-w-4xl">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mb-5
            text-center
            text-4xl
            font-extrabold
            tracking-tight
            text-slate-900
            sm:text-5xl
            md:text-6xl
          "
        >
          One Last Thing... ❤️
        </motion.h2>


        {/* ================= DON'T CLICK BUTTON ================= */}

        <div className="flex justify-center">

          <motion.button
            onClick={openSurprise}
            disabled={opened}
            whileHover={!opened ? { scale: 1.08 } : {}}
            whileTap={!opened ? { scale: 0.94 } : {}}
            animate={
              !opened
                ? {
                    scale: [1, 1.04, 1],
                  }
                : {
                    scale: 1,
                  }
            }
            transition={
              !opened
                ? {
                    duration: 1.5,
                    repeat: Infinity,
                  }
                : {
                    duration: 0.3,
                  }
            }
            className="
              relative
              z-20
              rounded-full
              bg-gradient-to-r
              from-pink-500
              via-fuchsia-500
              to-pink-500
              px-7
              py-3
              text-lg
              font-extrabold
              text-white
              shadow-[0_10px_35px_rgba(236,72,153,0.40)]
              transition
              sm:px-8
              sm:py-3.5
              sm:text-xl
            "
          >
            {opened ? "Surprise Opened! 💗" : "Don't Click ❤️"}
          </motion.button>

        </div>


        {/* ================= SURPRISE ================= */}

        <AnimatePresence>

          {opened && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
              "
            >

              <div
                className="
                  relative
                  mx-auto
                  mt-8
                  w-full
                  max-w-2xl
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/70
                  bg-white/70
                  px-5
                  py-8
                  text-center
                  shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                  backdrop-blur-xl
                  sm:px-10
                  sm:py-10
                "
              >

                {/* Surprise heading */}

                <motion.h3
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                  }}
                  className="
                    text-3xl
                    font-extrabold
                    text-pink-500
                    sm:text-4xl
                  "
                >
                  Surprise!! 🎉
                </motion.h3>


                {/* Message */}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="
                    mt-3
                    text-base
                    font-medium
                    text-slate-700
                    sm:text-lg
                  "
                >
                  Happy janam diwasss Aditi jiiii ❤️
                </motion.p>


                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="
                    mx-auto
                    mt-5
                    max-w-xl
                    text-base
                    leading-7
                    text-slate-600
                    sm:text-lg
                    sm:leading-8
                  "
                >
                  Takte takte nahi thakta hu tujhe 
Mile tujhe takne se fursat mujhe
Toh or takta firu tujhko🫂🫂
                </motion.p>


                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="
                    mt-5
                    text-base
                    font-medium
                    leading-7
                    text-slate-700
                    sm:text-lg
                  "
                >
                  Guudaaaa हो humaraa tumm 🫵🏻🐻😘
                </motion.p>


                {/* ================= STICKER SLIDESHOW ================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1.1,
                    duration: 0.8,
                  }}
                  className="
                    relative
                    mx-auto
                    mt-7
                    flex
                    h-56
                    w-full
                    max-w-xs
                    items-center
                    justify-center
                    sm:h-64
                    sm:max-w-sm
                  "
                >

                  <AnimatePresence mode="wait">

                    <motion.img
                      key={stickers[currentSticker]}
                      src={stickers[currentSticker]}
                      alt="Aditi sticker"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 25,
                        rotate: -5,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        rotate: 2,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.85,
                        y: -25,
                        rotate: 5,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        absolute
                        h-full
                        w-full
                        object-contain
                        drop-shadow-[0_15px_20px_rgba(0,0,0,0.18)]
                      "
                    />

                  </AnimatePresence>

                </motion.div>


                {/* ================= SLIDESHOW DOTS ================= */}

                <div className="mt-2 flex justify-center gap-2">

                  {stickers.map((_, index) => (
                    <motion.span
                      key={index}
                      animate={{
                        scale:
                          currentSticker === index
                            ? 1.3
                            : 1,
                        opacity:
                          currentSticker === index
                            ? 1
                            : 0.3,
                      }}
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-pink-500
                      "
                    />
                  ))}

                </div>


                {/* Caption */}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="
                    mt-4
                    text-sm
                    italic
                    text-slate-500
                  "
                >
                  My peronal favss😘 🫂❤️
                </motion.p>

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>

    </section>
  );
}