"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      pt-24
      lg:pt-0
    "
    >
      {/* Red Glow */}
      <div
        className="
        absolute
        right-0
        md:right-20
        top-1/2
        -translate-y-1/2
        h-[250px]
        w-[250px]
        sm:h-[350px]
        sm:w-[350px]
        md:h-[500px]
        md:w-[500px]
        rounded-full
        bg-red-600/20
        blur-[120px]
      "
      />

      

      <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="
              text-red-500
              mb-4
              text-sm
              sm:text-base
            "
            >
              ● Available for AI/ML Internships
            </motion.p>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
              text-white
              font-bold
              leading-none
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
            >
              SHRUTIKA
              <br />
              SRI S
            </motion.h1>

            <motion.h2
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
              mt-6
              text-white
              font-medium
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
            "
            >
              Turning Ideas Into
              <br />
              Intelligent Systems.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="
              mt-6
              text-white/70
              max-w-xl
              mx-auto
              lg:mx-0
              text-sm
              sm:text-base
            "
            >
              AI Engineer • Builder • Innovator
            </motion.p>

            <div
              className="
              mt-8
              flex
              flex-col
              sm:flex-row
              gap-4
              justify-center
              lg:justify-start
            "
            >
              <a
                href="#projects"
                className="
                rounded-full
                bg-red-600
                px-8
                py-4
                font-semibold
                hover:scale-105
                transition
                text-center
              "
              >
                Explore Work
              </a>

              <a
                href="/resume.pdf"
                download
                className="
                rounded-full
                border
                border-white/20
                px-8
                py-4
                hover:bg-white/10
                transition
                text-center
              "
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
            order-1
            lg:order-2
            relative
            mx-auto
            w-full
            max-w-[500px]

            h-[320px]
            sm:h-[420px]
            md:h-[550px]
            lg:h-[700px]
            xl:h-[820px]
            "
          >
            <Image
              src="/profile.png"
              alt="Shrutika"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}