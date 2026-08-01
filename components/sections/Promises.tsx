"use client";

import { motion } from "motion/react";
import { promises } from "@/data/promises";

export default function Promises() {
  return (
    <section className="bg-[#FFF8FC] py-28">

      <div className="mx-auto max-w-4xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          My Promises 🤍
        </motion.h2>

        <div className="space-y-6">

          {promises.map((promise, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              className="rounded-2xl border-l-8 border-pink-500 bg-white p-6 shadow-xl"
            >

              <p className="text-xl leading-9">

                ✍️ {promise}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}