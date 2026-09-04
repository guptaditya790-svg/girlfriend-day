"use client";

import { motion } from "motion/react";

export default function FinalLetter() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-visible
        px-4
        py-20
        sm:px-6
        md:py-28
      "
    >
      {/* Soft background glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.10),transparent_65%)]
        "
      />

      <div className="relative z-10 w-full max-w-3xl">

        {/* ================= HEADING ================= */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="
            mb-8
            text-center
            text-4xl
            font-bold
            tracking-tight
            text-gray-900
            sm:text-5xl
            md:text-6xl
          "
        >
          A Poem For You 💖
        </motion.h2>


        {/* ================= ADITI STICKER ================= */}

        <motion.img
          src="/images/aditi-sticker6.png"
          alt="Aditi"

          initial={{
            opacity: 0,
            x: 35,
            y: 35,
            rotate: 0,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
            y: -15,
            rotate: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}

          animate={{
            y: [0, -6, 0],
          }}

          className="
            pointer-events-none
            absolute
            z-30

            /* PHONE */
            right-0
            top-20
            w-20

            /* TABLET */
            sm:-right-2
            sm:top-24
            sm:w-28

            /* LAPTOP */
            md:-right-20
            md:top-24
            md:w-36

            drop-shadow-[0_15px_20px_rgba(0,0,0,0.18)]
          "
        />


        {/* ================= LETTER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scaleY: 0.06,
            transformOrigin: "top center",
          }}

          whileInView={{
            opacity: 1,
            scaleY: 1,
          }}

          viewport={{
            once: true,
            amount: 0.18,
          }}

          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}

          className="
            relative
            origin-top
            overflow-hidden
            rounded-[20px]
            border
            border-pink-200/70
            bg-[#fffafc]
            shadow-[0_25px_70px_rgba(0,0,0,0.12)]
          "
        >

          {/* ================= TOP ROLL ================= */}

          <div
            className="
              relative
              z-20
              h-7
              w-full
              rounded-[50%]
              border
              border-pink-200
              bg-gradient-to-b
              from-white
              via-pink-50
              to-pink-100
              shadow-[0_5px_12px_rgba(0,0,0,0.12)]
              sm:h-9
            "
          />


          {/* ================= PAPER ================= */}

          <div
            className="
              px-6
              py-10
              sm:px-10
              sm:py-12
              md:px-14
              md:py-14
            "
          >

            {/* Letter content */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                delay: 1.1,
                duration: 0.9,
              }}

              className="
                space-y-7
                text-[17px]
                leading-8
                text-slate-700
                sm:text-lg
                sm:leading-9
              "
            >

              <p className="font-medium text-slate-800">
                       मोमबत्ती🕯️,
              </p>


              <p className="mb-6">
                Mujh मोमबत्ती ki baati hai तू 🕯️ , <br />
                tujh bin sirf मोम ka ढेर hu,<br />
                Tujhse जलकर hai उम्मीद ki roshni🌟 <br />
                Aakhir khatam toh dono ko saath hi hona hai !!!🫂
              </p>


              <p>
                Mere अंदर reh, संभल kar<br />
                Na dikh kar bhi, bhot एहम hai...<br />
                Kisi ne तोड़ना चाहा , toh टूटकर bhi ना टूटुंगा ,<br />
                Pta hai, पकड़े rakhegi अंदर se tu..
              </p>


              <p className="mb-6">
                Jalti hai, shaan se mere सिर par,<br />
                Aakhir एकलौती sajawat Jo hai meri, <br />
                तू jalti, toh दर्द hota मुझे bhi,<br />
                Dekhe होंगे, mere पिघले aansu,<br />
                खड़ा hona bhi मुश्किल hai उनके bina ......
              </p>


              <p className="pt-2 font-medium text-slate-800"> 

                  


                This poem portrays you as the lit of the candle and me as its wax❤️🙃.

              </p>


              {/* ================= VOICE NOTE ================= */}

              <div className="pt-4">
                {/* Voice note can go here later */}
              </div>


              {/* ================= SIGNATURE ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  delay: 1.5,
                  duration: 0.8,
                }}

                className="
                  pt-5
                  text-right
                  text-slate-700
                "
              >

                <p>
                
                </p>

                <p
                  className="
                    mt-1
                    text-xl
                    font-semibold
                    text-pink-500
                  "
                >
                  --chotu ❤️🫂
                </p>

              </motion.div>

            </motion.div>

          </div>


          {/* ================= BOTTOM ROLL ================= */}

          <div
            className="
              relative
              z-20
              h-7
              w-full
              rounded-[50%]
              border
              border-pink-200
              bg-gradient-to-b
              from-pink-100
              via-pink-50
              to-white
              shadow-[0_-5px_12px_rgba(0,0,0,0.10)]
              sm:h-9
            "
          />

        </motion.div>


        {/* ================= ENDING HEART ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            delay: 2,
            duration: 0.6,
          }}

          className="
            mt-8
            text-center
            text-2xl
          "
        >
          💗
        </motion.div>

      </div>
    </section>
  );
}