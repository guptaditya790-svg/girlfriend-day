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

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-pink-500 px-5 py-4 text-white shadow-2xl"
      >
        {playing ? "🔊" : "🎵"}
      </motion.button>
    </>
  );
}