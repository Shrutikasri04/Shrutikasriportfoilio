"use client";

import Image from "next/image";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  PanInfo,
} from "framer-motion";
import { PROJECTS } from "../data/projects";

export default function ProjectsShowcase() {
  const [current, setCurrent] = useState(0);

  const project = PROJECTS[current];

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  // Swipe handler (mobile/tablet only)
  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      nextProject();
    } else if (offset > 100 || velocity > 500) {
      prevProject();
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 py-16 sm:py-10"
    >
      {/* Background Glow */}
      <motion.div
        animate={{ backgroundColor: project.color }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 opacity-10"
      />

      {/* Background Text */}
      <motion.h1
        key={project.title}
        className="
          absolute
          text-[18vw] sm:text-[12vw] md:text-[8vw]
          font-black uppercase
          text-white/5
          select-none pointer-events-none whitespace-nowrap
        "
      >
        {project.title}
      </motion.h1>

      {/* =========================
          DESKTOP / LAPTOP VIEW
      ========================= */}
      <div className="hidden md:grid relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
          >
            <p className="text-white/50 uppercase tracking-[6px] mb-3">
              Featured Project
            </p>

            <h2 className="text-6xl lg:text-7xl font-bold">
              {project.title}
            </h2>

            <h3 className="text-red-500 text-xl mt-4">
              {project.subtitle}
            </h3>

            <p className="mt-8 text-white/70 max-w-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              className="inline-flex mt-10 px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 transition"
            >
              View GitHub Repository
            </a>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT IMAGE */}
        <motion.div className="relative flex justify-center items-center">
          <div className="absolute w-[500px] h-[500px] bg-red-600/20 blur-[150px] rounded-full" />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="relative w-[600px] h-[600px]"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* =========================
          DESKTOP NAVIGATION (FIXED)
      ========================= */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 items-center gap-6">
        <button
          onClick={prevProject}
          className="w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          ←
        </button>

        <span className="text-white/60 text-sm tracking-[3px]">
          0{current + 1} / 0{PROJECTS.length}
        </span>

        <button
          onClick={nextProject}
          className="w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          →
        </button>
      </div>

      {/* =========================
          MOBILE + TABLET SWIPE VIEW
      ========================= */}
      <div className="md:hidden relative z-10 w-full">

        <motion.div
          key={project.id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="text-center"
        >
          <p className="text-white/50 uppercase tracking-[4px] text-sm">
            Featured Project
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            {project.title}
          </h2>

          <h3 className="text-red-500 mt-2">
            {project.subtitle}
          </h3>

          <p className="text-white/70 mt-4 text-sm px-2">
            {project.description}
          </p>

          {/* Image */}
          <div className="relative mt-8 flex justify-center">
            <div className="absolute w-[220px] h-[220px] bg-red-600/20 blur-[120px] rounded-full" />

            <div className="relative w-[240px] h-[240px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 px-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            className="inline-flex mt-6 px-6 py-3 rounded-full bg-red-600"
          >
            GitHub
          </a>
        </motion.div>

        {/* MOBILE NAVIGATION */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={prevProject}
            className="w-10 h-10 rounded-full border border-white/20"
          >
            ←
          </button>

          <span className="text-white/60 text-sm">
            0{current + 1} / 0{PROJECTS.length}
          </span>

          <button
            onClick={nextProject}
            className="w-10 h-10 rounded-full border border-white/20"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}