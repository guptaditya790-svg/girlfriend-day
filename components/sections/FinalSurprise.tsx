"use client";

import { useState } from "react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

export default function FinalSurprise() {
  const [clicked, setClicked] = useState(false);

  function surprise() {
    if (clicked) return;

    setClicked(true);

    confetti({
      particleCount: 250,
      spread: 120,
      origin: {
        y: 0.6,
      },
    });

    setTimeout(() => {
      confetti({
        particleCount: 200,
        angle: 60,
        spread: 80,
        origin: {
          x: 0,
          y: 0.7,
        },
      });

      confetti({
        particleCount: 200,
        angle: 120,
        spread: 80,
        origin: {
          x: 1,
          y: 0.7,
        },
      });
    }, 400);
  }

  return (
    <section className="relative bg-[#FFF8FC] py-36">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-5xl font-bold"
        >
          One Last Thing... ❤️
        </motion.h2>

        <motion.button
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          animate={{
            boxShadow: [
              "0 0 20px #FF4D8D",
              "0 0 45px #FF4D8D",
              "0 0 20px #FF4D8D",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          onClick={surprise}
          className="rounded-full bg-pink-500 px-14 py-6 text-3xl font-bold text-white"
        >
          Don't Click ❤️
        </motion.button>

        {clicked && (

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="mx-auto mt-16 max-w-2xl rounded-[36px] bg-white/70 p-10 shadow-2xl backdrop-blur-xl"
          >
            <h3 className="mb-6 text-4xl font-bold text-pink-500">
              Surprise!! 🎉
            </h3>

            <p className="text-2xl leading-relaxed text-gray-700">
              Happy Girlfriend Day, Aditi ❤️

              <br />
              <br />

              I hope this little website reminds you
              how incredibly special you are to me.

              <br />
              <br />

              I love you more than words can ever explain.
            </p>
          </motion.div>

        )}

      </div>

    </section>
  );
}