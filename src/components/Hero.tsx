"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* Red Glow */}
      <div
        className="
        absolute
        right-32
        h-[400px]
        w-[400px]
        rounded-full
        bg-red-600/20
        blur-[120px]
      "
      />

      <div className="mx-auto max-w-7xl px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}

          <div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-red-500 mb-4"
            >
              ● Available for AI/ML Internships
            </motion.p>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="
              text-white text-6xl md:text-8xl font-bold leading-tight"
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
              mt-8 text-white text-3xl md:text-5xl
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
              mt-8 text-white max-w-xl
            "
            >
              AI Engineer • Builder • Innovator
            </motion.p>

            <div className="mt-10 flex gap-4">

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
            className="relative h-[800px]"
          >
            <Image
              src="/profile.png"
              alt="Shrutika"
              fill
              className="object-contain"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}