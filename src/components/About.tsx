"use client";

import { motion } from "framer-motion";

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "Java",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ghost Text */}
      <h1
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        text-[18vw]
        font-black
        text-white/[0.03]
        pointer-events-none
        select-none
        tracking-tight
      "
      >
        ABOUT
      </h1>

      {/* Red Glow */}
      <div
        className="
        absolute
        left-20
        top-1/2
        -translate-y-1/2
        w-[400px]
        h-[400px]
        rounded-full
        bg-red-600/10
        blur-[140px]
      "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-red-500 mb-4 font-medium">
              ● About Me
            </p>

            <h2
              className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
            >
              Building AI
              <br />
              That Solves
              <br />
              Real Problems.
            </h2>

            <p
              className="
              mt-8
              text-lg
              text-white/70
              leading-relaxed
              max-w-xl
            "
            >
              I am Shrutika Sri S, an aspiring AI/ML Engineer passionate
              about transforming ideas into intelligent systems.
              My interests span Machine Learning, Deep Learning,
              Computer Vision, NLP, and AI-powered applications.
            </p>

            <p
              className="
              mt-6
              text-white/60
              leading-relaxed
              max-w-xl
            "
            >
              I enjoy building practical solutions that combine
              engineering, data, and creativity to solve
              real-world challenges.
            </p>

            {/* Skill Chips */}
            <div className="flex flex-wrap gap-3 mt-10">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="
                    px-5
                    py-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-md
                    text-sm
                    hover:border-red-500/40
                    transition
                  "
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-red-500">
                5+
              </h3>
              <p className="mt-3 text-white/70">
                AI & Software Projects
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-red-500">
                AI
              </h3>
              <p className="mt-3 text-white/70">
                Focused Career Path
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-red-500">
                Open
              </h3>
              <p className="mt-3 text-white/70">
                For Internships
              </p>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="text-5xl font-bold text-red-500">
                2028
              </h3>
              <p className="mt-3 text-white/70">
                Expected graduation
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}