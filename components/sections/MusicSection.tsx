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
      console.error("Audio error:", error);
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fff8fc] via-[#fcecff] to-[#fff8fc] px-4 py-20">

      {/* Background hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[12%] text-2xl opacity-50">
          ♡
        </span>

        <span className="absolute right-[10%] top-[25%] text-2xl opacity-40">
          ♡
        </span>

        <span className="absolute left-[15%] bottom-[20%] text-xl opacity-40">
          ♡
        </span>

        <span className="absolute right-[18%] bottom-[15%] text-xl opacity-40">
          ♡
        </span>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto mb-10 max-w-3xl text-center"
      >
        <p className="mb-2 text-xs font-semibold tracking-[0.45em] text-pink-400 sm:text-sm">
          A LITTLE SOUNDTRACK
        </p>

        <h2 className="text-4xl font-extrabold tracking-tight text-[#111827] sm:text-6xl">
          A Song For You 🎵
        </h2>

        <p className="mt-4 text-base text-gray-600 sm:text-xl">
          Some songs are just songs.
          <br />
          And then there are songs that somehow become memories. 💗
        </p>
      </motion.div>

      {/* Main music area */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">

        {/* Cassette + Aditi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full max-w-[620px]"
        >

          {/* Aditi sticker */}
          <motion.img
            src="/images/aditi-sticker1.png"
            alt="Aditi"
            initial={{ opacity: 0, y: 30, rotate: 0}}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              pointer-events-none
              absolute
              -right-3
              -bottom-2
              z-30
              w-24
              drop-shadow-2xl
              sm:-right-8
              sm:w-32
              md:-right-12
              md:w-40
            "
          />
          <motion.img
  src="/images/aditi-sticker3.png"
  alt="Aditi"
  initial={{ opacity: 0, y: 30, rotate: -6 }}
  whileInView={{ opacity: 1, y: 0, rotate: -6 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="
    pointer-events-none
    absolute
    -left-9
    bottom-0
    z-30
    w-24
    drop-shadow-2xl
    sm:-left-10
    sm:w-32
    md:-left-22
    md:w-40
  "
/>

          {/* Cassette */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border-2
              border-white/70
              bg-[#d99ac3]
              shadow-[0_25px_70px_rgba(170,80,140,0.30)]
            "
          >

            {/* Cassette top label */}
            <div className="relative flex items-center justify-between bg-[#fff7fb] px-4 py-3 sm:px-6">

              <div>
                <p className="text-[9px] font-bold tracking-[0.3em] text-pink-400 sm:text-xs">
                  BIRTHDAY MIXTAPE
                </p>

                <h3 className="text-xl font-black tracking-wide text-[#172033] sm:text-3xl">
                  ADITI ❤️
                </h3>
              </div>

              <div className="text-right text-[9px] font-bold text-gray-400 sm:text-xs">
                <p>SIDE A</p>
                <p>♥ 01</p>
              </div>

            </div>

            {/* Cassette body */}
            <div className="relative h-[250px] bg-[#d495bd] sm:h-[300px]">

              {/* Tape window */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[70px]
                  w-[48%]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[50%]
                  border-[7px]
                  border-[#a85e9b]
                  bg-[#edc3d9]
                  sm:h-[85px]
                "
              />

              {/* Left reel */}
              <div
                className="
                  absolute
                  left-[15%]
                  top-1/2
                  flex
                  h-[95px]
                  w-[95px]
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[7px]
                  border-[#f9e8f2]
                  bg-[#b875aa]
                  shadow-lg
                  sm:h-[120px]
                  sm:w-[120px]
                "
              >
                <div className="h-[42px] w-[42px] rounded-full border-[7px] border-[#f9e8f2] bg-[#a45b98] sm:h-[55px] sm:w-[55px]" />
              </div>

              {/* Right reel */}
              <div
                className="
                  absolute
                  right-[15%]
                  top-1/2
                  flex
                  h-[95px]
                  w-[95px]
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[7px]
                  border-[#f9e8f2]
                  bg-[#b875aa]
                  shadow-lg
                  sm:h-[120px]
                  sm:w-[120px]
                "
              >
                <div className="h-[42px] w-[42px] rounded-full border-[7px] border-[#f9e8f2] bg-[#a45b98] sm:h-[55px] sm:w-[55px]" />
              </div>

              {/* Tape lines */}
              <div className="absolute left-[15%] right-[15%] top-1/2 h-[3px] -translate-y-1/2 bg-[#a85e9b]/60" />

              {/* Bottom cassette text */}
              <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[8px] font-bold tracking-[0.2em] text-white/90 sm:text-[10px]">
                <span>LOVE RECORDS</span>
                <span>MADE WITH ❤️</span>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Song information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-center"
        >

          <p className="text-xs font-semibold tracking-[0.35em] text-pink-400">
            ADITI'S FAVOURITE
          </p>

          <h3 className="mt-1 text-2xl font-bold text-[#27324a] sm:text-3xl">
            Gehra Hua 🦋❤️
          </h3>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            A song waiting to become another memory.
          </p>

        </motion.div>

        {/* Play button */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          onClick={toggleMusic}
          className="
            mt-6
            flex
            items-center
            gap-3
            rounded-full
            bg-pink-500
            px-7
            py-3
            text-base
            font-bold
            text-white
            shadow-[0_10px_30px_rgba(236,72,153,0.35)]
            transition-all
            hover:bg-pink-600
            sm:px-9
            sm:py-4
            sm:text-lg
          "
        >
          <span className="text-xl">
            {playing ? "⏸" : "▶"}
          </span>

          <span>
            {playing ? "Pause Our Song" : "Play Our Song"}
          </span>

          <span className="text-sm">
            {playing ? "♪ ♫ ♪" : "•••"}
          </span>
        </motion.button>

        {/* Hidden audio */}
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

      </div>
    </section>
  );
}