"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export default function MusicSection() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggleMusic() {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF8FC] via-[#FCEEFF] to-[#FFF8FC] px-4 py-20 sm:px-6 sm:py-28">

      {/* Decorative hearts */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-[8%] top-20 text-2xl opacity-40"
      >
        ♡
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-[10%] top-32 text-3xl opacity-40"
      >
        ♡
      </motion.div>

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-pink-400 sm:text-sm">
            A little soundtrack
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            A Song For You 🎵
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-lg">
            Some songs are just songs.
            <br />
            And then there are songs that somehow become memories. ❤️
          </p>
        </motion.div>

        {/* CASSETTE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-12 w-full max-w-[580px] sm:mt-14"
        >

          <div className="relative">

            {/* Glow */}
            <motion.div
              animate={{
                opacity: playing ? [0.25, 0.5, 0.25] : 0.25,
                scale: playing ? [1, 1.05, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: playing ? Infinity : 0,
              }}
              className="absolute inset-x-8 bottom-[-20px] h-14 rounded-full bg-pink-300/40 blur-2xl"
            />

            {/* Cassette body */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border border-white/70
                bg-gradient-to-br
                from-[#efabc4]
                via-[#e8a6c5]
                to-[#c98fc6]
                p-3
                shadow-[0_30px_70px_rgba(190,100,160,0.30)]
                sm:rounded-[36px]
                sm:p-6
              "
            >

              {/* Shine */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/10" />

              {/* Inner cassette panel */}
              <div
                className="
                  relative
                  rounded-[22px]
                  border border-white/40
                  bg-gradient-to-br from-[#dda0ba] to-[#c18ac0]
                  p-3
                  shadow-inner
                  sm:rounded-[28px]
                  sm:p-5
                "
              >

                {/* TOP LABEL */}
                <div
                  className="
                    relative
                    rounded-2xl
                    border border-white/60
                    bg-[#fff5f8]
                    px-4
                    py-3
                    shadow-lg
                    sm:px-6
                    sm:py-4
                  "
                >
                  <div className="flex items-center justify-between">

                    <div className="text-left">
                      <p className="text-[8px] font-bold uppercase tracking-[0.25em] text-pink-400 sm:text-xs">
                        Birthday Tape
                      </p>

                      <h3 className="mt-1 text-xl font-black tracking-wide text-gray-800 sm:text-3xl">
                        ADITI ❤️
                      </h3>
                    </div>

                    <div className="text-right">
                      <p className="text-[8px] font-semibold uppercase tracking-widest text-gray-400 sm:text-xs">
                        SIDE A
                      </p>

                      <p className="mt-1 text-[10px] text-gray-400 sm:text-sm">
                        ♥ 01
                      </p>
                    </div>

                  </div>
                </div>

                {/* REELS */}
                <div className="relative mt-4 h-[145px] sm:mt-6 sm:h-[190px]">

                  {/* Tape window */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[58px]
                      w-[200px]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-[50%]
                      border-[6px]
                      border-[#ae6fa1]
                      bg-[#f7d3e3]/70
                      shadow-inner
                      sm:h-[82px]
                      sm:w-[290px]
                    "
                  />

                  {/* Left reel */}
                  <motion.div
                    animate={{
                      rotate: playing ? 360 : 0,
                    }}
                    transition={{
                      duration: 3,
                      repeat: playing ? Infinity : 0,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      left-[7%]
                      top-1/2
                      flex
                      h-[90px]
                      w-[90px]
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-[7px]
                      border-[#f6d6e4]
                      bg-[#b16fa3]
                      shadow-lg
                      sm:left-[10%]
                      sm:h-[125px]
                      sm:w-[125px]
                    "
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8d7e5] sm:h-14 sm:w-14">
                      <div className="h-4 w-4 rounded-full bg-[#a76699] sm:h-6 sm:w-6" />
                    </div>

                    <div className="absolute h-full w-[2px] rotate-45 bg-[#e8bfd2]/60" />
                    <div className="absolute h-full w-[2px] -rotate-45 bg-[#e8bfd2]/60" />
                  </motion.div>

                  {/* Right reel */}
                  <motion.div
                    animate={{
                      rotate: playing ? -360 : 0,
                    }}
                    transition={{
                      duration: 3,
                      repeat: playing ? Infinity : 0,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      right-[7%]
                      top-1/2
                      flex
                      h-[90px]
                      w-[90px]
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-[7px]
                      border-[#f6d6e4]
                      bg-[#b16fa3]
                      shadow-lg
                      sm:right-[10%]
                      sm:h-[125px]
                      sm:w-[125px]
                    "
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8d7e5] sm:h-14 sm:w-14">
                      <div className="h-4 w-4 rounded-full bg-[#a76699] sm:h-6 sm:w-6" />
                    </div>

                    <div className="absolute h-full w-[2px] rotate-45 bg-[#e8bfd2]/60" />
                    <div className="absolute h-full w-[2px] -rotate-45 bg-[#e8bfd2]/60" />
                  </motion.div>

                </div>

                {/* SONG INFORMATION ON CASSETTE */}
<div className="mt-1 rounded-2xl border border-white/50 bg-[#fff3f7] px-4 py-3 shadow-lg sm:px-6 sm:py-4">

  <p className="text-center text-[8px] font-bold uppercase tracking-[0.25em] text-pink-400 sm:text-xs">
    Aditi's Favourite
  </p>

  <h4 className="mt-1 text-center text-lg font-black text-gray-800 sm:text-2xl">
    Gehra Hua 🦋❤️
  </h4>

  {/* CENTERED PLAY BUTTON */}
  <div className="mt-2 flex justify-center">
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="
        flex
        items-center
        gap-2
        rounded-full
        bg-pink-500
        px-5
        py-2
        text-sm
        font-bold
        text-white
        shadow-lg
        shadow-pink-300/40
        sm:px-6
        sm:py-2.5
        sm:text-base
      "
    >
      <span>
        {playing ? "⏸" : "▶"}
      </span>

      <span>
        {playing ? "Pause" : "Play"}
      </span>

      {/* Equalizer */}
      <span className="flex h-4 items-end gap-[2px]">
        {[1, 2, 3, 4].map((bar) => (
          <motion.span
            key={bar}
            animate={
              playing
                ? {
                    height: [
                      "5px",
                      "14px",
                      "8px",
                      "13px",
                      "5px",
                    ],
                  }
                : {
                    height: "5px",
                  }
            }
            transition={{
              duration: 0.8,
              repeat: playing ? Infinity : 0,
              delay: bar * 0.1,
            }}
            className="w-[2px] rounded-full bg-white"
          />
        ))}
      </span>
    </motion.button>
  </div>

  <p className="mt-1 text-center text-[10px] text-gray-500 sm:text-xs">
    A little piece of your favourite song. 💗
  </p>

</div>

                {/* Bottom cassette details */}
                <div className="mt-3 flex items-center justify-between px-1 text-[7px] font-bold uppercase tracking-[0.2em] text-white/80 sm:px-3 sm:text-[10px]">
                  <span>Love Records</span>
                  <span>Made With ❤️</span>
                </div>

              </div>

              {/* Bottom screws */}
              <div className="mt-3 flex justify-between px-3 sm:mt-4 sm:px-5">
                <div className="h-2 w-2 rounded-full bg-white/60 shadow-inner" />
                <div className="h-2 w-2 rounded-full bg-white/60 shadow-inner" />
              </div>

            </div>
          </div>
        </motion.div>

      </div>

      {/* Audio */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/audio/love-song.mp3"
          type="audio/mpeg"
        />
      </audio>

    </section>
  );
}