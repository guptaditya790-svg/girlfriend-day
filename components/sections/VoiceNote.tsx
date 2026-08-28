"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

export default function VoiceNote() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  async function toggleVoice() {
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
    <div className="mx-auto mt-8 w-full max-w-sm px-4 sm:max-w-md">

      <audio
        ref={audioRef}
        src="/audio/voice-note.mp3"
        onEnded={() => setPlaying(false)}
      />

      <motion.div
        animate={{
          boxShadow: playing
            ? [
                "0 0 20px rgba(244,114,182,0.15)",
                "0 0 40px rgba(244,114,182,0.35)",
                "0 0 20px rgba(244,114,182,0.15)",
              ]
            : "0 0 20px rgba(244,114,182,0.12)",
        }}
        transition={{
          duration: 2,
          repeat: playing ? Infinity : 0,
        }}
        className="
          rounded-2xl
          border
          border-white/15
          bg-white/[0.07]
          px-4
          py-3
          backdrop-blur-md
          sm:px-5
          sm:py-4
        "
      >

        <div className="flex items-center gap-3">

          {/* Microphone */}
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-pink-500/15
              text-lg
              sm:h-11
              sm:w-11
            "
          >
            🎙️
          </div>

          {/* Text + waveform */}
          <div className="min-w-0 flex-1 text-left">

            <p className="text-xs font-medium text-pink-300 sm:text-sm">
              A little message for you
            </p>

            <div className="mt-2 flex h-5 items-center gap-[3px]">

              {[4, 8, 13, 7, 17, 10, 15, 6, 12, 8, 16, 5].map(
                (height, index) => (
                  <motion.span
                    key={index}
                    animate={
                      playing
                        ? {
                            height: [
                              `${height}px`,
                              `${Math.max(4, height - 5)}px`,
                              `${Math.min(18, height + 4)}px`,
                              `${height}px`,
                            ],
                          }
                        : {
                            height: `${height}px`,
                          }
                    }
                    transition={{
                      duration: 0.7,
                      repeat: playing ? Infinity : 0,
                      delay: index * 0.05,
                    }}
                    className="w-[3px] rounded-full bg-pink-300/80"
                  />
                )
              )}

            </div>
          </div>

          {/* Play button */}
          <motion.button
            onClick={toggleVoice}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-pink-500
              text-white
              shadow-lg
              shadow-pink-500/30
              sm:h-12
              sm:w-12
            "
            aria-label={playing ? "Pause voice note" : "Play voice note"}
          >
            {playing ? "❚❚" : "▶"}
          </motion.button>

        </div>

      </motion.div>
    </div>
  );
}