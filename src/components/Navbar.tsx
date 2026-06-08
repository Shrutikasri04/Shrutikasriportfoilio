"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 sm:px-8 py-3 sm:py-4">

          {/* Logo */}
          <h1 className="font-bold tracking-widest text-sm sm:text-base">
            SHRUTIKA SRI S
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 text-sm">
            <a href="#about" className="hover:opacity-70 transition">About</a>
            <a href="#projects" className="hover:opacity-70 transition">Projects</a>
            <a href="#skills" className="hover:opacity-70 transition">Skills</a>
            <a href="#contact" className="hover:opacity-70 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 mx-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-5 flex flex-col gap-4 text-sm"
            >
              <a onClick={() => setMobileMenu(false)} href="#about">About</a>
              <a onClick={() => setMobileMenu(false)} href="#projects">Projects</a>
              <a onClick={() => setMobileMenu(false)} href="#skills">Skills</a>
              <a onClick={() => setMobileMenu(false)} href="#contact">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}