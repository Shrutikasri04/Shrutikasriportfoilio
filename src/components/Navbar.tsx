"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4">

          <h1 className="font-bold tracking-widest">
            SHRUTIKA SRI S
          </h1>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

        </div>
      </div>
    </motion.nav>
  );
}