"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export default function MusicPlayer() {
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
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {/* Hidden audio player */}
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

      {/* Music Player */}
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        animate={{
          boxShadow: playing
            ? [
                "0 8px 30px rgba(236,72,153,0.25)",
                "0 8px 45px rgba(236,72,153,0.5)",
                "0 8px 30px rgba(236,72,153,0.25)",
              ]
            : "0 8px 30px rgba(236,72,153,0.25)",
        }}
        transition={{
          duration: 2,
          repeat: playing ? Infinity : 0,
        }}
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-4
          rounded-full
          border border-white/60
          bg-white/80
          px-5 py-3
          text-gray-800
          shadow-2xl
          backdrop-blur-xl
        "
      >
        {/* Album / music icon */}
        <motion.div
          animate={{
            rotate: playing ? 360 : 0,
          }}
          transition={{
            duration: 4,
            repeat: playing ? Infinity : 0,
            ease: "linear",
          }}
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-full
            bg-gradient-to-br
            from-pink-400
            via-pink-500
            to-purple-500
            text-xl
            text-white
            shadow-lg
          "
        >
          💿
        </motion.div>

        {/* Song information */}
        <div className="hidden text-left sm:block">
          <p className="text-sm font-semibold">
            Our Song ❤️
          </p>

          <p className="text-xs text-gray-500">
            {playing ? "Now playing..." : "Tap to play"}
          </p>
        </div>

        {/* Music visualizer */}
        <div className="flex h-7 items-end gap-[3px]">
          {[1, 2, 3, 4].map((bar) => (
            <motion.span
              key={bar}
              animate={
                playing
                  ? {
                      height: ["6px", "20px", "10px", "17px", "6px"],
                    }
                  : {
                      height: "6px",
                    }
              }
              transition={{
                duration: 0.8,
                repeat: playing ? Infinity : 0,
                delay: bar * 0.1,
              }}
              className="w-[3px] rounded-full bg-pink-500"
            />
          ))}
        </div>

        {/* Play / pause */}
        <div
          className="
            flex h-10 w-10
            items-center justify-center
            rounded-full
            bg-pink-500
            text-lg
            text-white
            shadow-lg
          "
        >
          {playing ? "⏸" : "▶"}
        </div>
      </motion.button>
    </>
  );
} 