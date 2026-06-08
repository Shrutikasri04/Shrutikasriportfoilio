"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AI / ML",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Scikit-Learn",
      "OpenCV",
    ],
  },
  {
    title: "Development",
    skills: ["Java", "React", "Next.js", "TypeScript", "Tailwind CSS", "Git"],
  },
  {
    title: "Data & Tools",
    skills: ["SQL", "Pandas", "NumPy", "Matplotlib", "Jupyter", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Ghost Text (responsive fix) */}
      <h1
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[18vw]
          font-black
          text-white/[0.03]
          pointer-events-none
          select-none
        "
      >
        SKILLS
      </h1>

      {/* Glow (responsive shrink) */}
      <div
        className="
          absolute
          right-[-100px] sm:right-0
          top-1/2
          -translate-y-1/2
          w-[250px] sm:w-[350px] md:w-[500px]
          h-[250px] sm:h-[350px] md:h-[500px]
          bg-red-600/10
          rounded-full
          blur-[120px] sm:blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-16 text-center lg:text-left"
        >
          <p className="text-red-500 mb-3 sm:mb-4 text-sm sm:text-base">
            ● Technical Skills
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Tools I Use
            <br />
            To Build.
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.7,
              }}
              className="
                glass
                rounded-2xl sm:rounded-3xl
                p-5 sm:p-6 md:p-8
                hover:border-red-500/30
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 sm:mb-8">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="
                      px-3 sm:px-4
                      py-1.5 sm:py-2
                      rounded-full
                      bg-white/5
                      border border-white/10
                      text-xs sm:text-sm
                      hover:border-red-500/40
                      hover:bg-red-500/10
                      transition
                    "
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}