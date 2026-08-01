"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { reasons } from "@/data/reasons";

export default function Reasons() {
  const [openedCards, setOpenedCards] = useState<number[]>([]);

  function toggleCard(id: number) {
    if (openedCards.includes(id)) {
      setOpenedCards(openedCards.filter((item) => item !== id));
    } else {
      setOpenedCards([...openedCards, id]);
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#FFF8FC] py-32">

      {/* Background Glow */}
      <div className="absolute left-[-150px] top-20 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute right-[-150px] bottom-20 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center text-5xl font-bold"
        >
          100 Reasons I Love You ❤️
        </motion.h2>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">

          {reasons.map((reason, index) => {

            const opened = openedCards.includes(reason.id);

            return (

              <motion.div
                key={reason.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                }}
                style={{
                  perspective: 1000,
                }}
                onClick={() => toggleCard(reason.id)}
                className="cursor-pointer"
              >

                <motion.div
                  animate={{
                    rotateY: opened ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                  }}
                  className="relative h-52 w-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >

                  {/* Front */}

                  <div
                    className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    rounded-[30px]
                    border
                    border-white/40
                    bg-white/60
                    p-6
                    text-center
                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                    "
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >

                    <div>

                      <p className="text-5xl mb-4">❤️</p>

                      <h3 className="text-2xl font-bold">
                        Reason #{reason.id}
                      </h3>

                      <p className="mt-3 text-gray-500">
                        Click Me
                      </p>

                    </div>

                  </div>

                  {/* Back */}

                  <div
                    className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    rounded-[30px]
                    bg-gradient-to-br
                    from-pink-500
                    to-purple-500
                    p-6
                    text-center
                    text-white
                    shadow-2xl
                    "
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >

                    <p className="text-lg leading-relaxed font-medium">
                      {reason.text}
                    </p>

                  </div>

                </motion.div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}