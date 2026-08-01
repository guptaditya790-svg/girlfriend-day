"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="bg-[#FFF8FC] py-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl font-bold"
        >
          Our Memories 📸
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {galleryImages.map((photo, index) => (

            <motion.div
  key={photo.id}
  initial={{
    opacity: 0,
    y: 80,
    rotate: index % 2 === 0 ? -8 : 8,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    rotate: index % 2 === 0 ? -5 : 5,
  }}
  whileHover={{
    scale: 1.08,
    rotate: 0,
    y: -15,
  }}
  animate={{
    y: [0, -8, 0],
  }}
  transition={{
    duration: 4 + index,
    repeat: Infinity,
    repeatType: "reverse",
  }}
  viewport={{ once: true }}
  className="
  relative
  rounded-[30px]
  border
  border-white/50
  bg-white/70
  p-5
  shadow-[0_25px_60px_rgba(0,0,0,0.15)]
  backdrop-blur-xl
  "
>

              <div className="overflow-hidden rounded-2xl">
<div className="mb-4 h-2 w-20 rounded-full bg-gray-200 mx-auto" />
<p className="mt-5 text-center text-lg font-medium text-gray-700">
  {photo.alt}
</p>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={600}
                  className="
h-[420px]
w-full
object-cover
transition-all
duration-700
hover:scale-110
"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}