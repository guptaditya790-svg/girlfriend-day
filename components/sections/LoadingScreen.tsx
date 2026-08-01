"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onFinish: () => void;
}

export default function LoadingScreen({
  onFinish,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 600);

          return 100;
        }

        return value + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF8FC]"
      >
        <div className="w-[320px] text-center">

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="text-7xl"
          >
            ❤️
          </motion.div>

          <h2 className="mt-6 text-2xl font-semibold">
            Loading our memories...
          </h2>

          <div className="mt-8 h-3 overflow-hidden rounded-full bg-pink-100">

            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              className="h-full rounded-full bg-pink-500"
            />

          </div>

          <p className="mt-3 text-sm text-gray-500">

            {progress}%

          </p>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}