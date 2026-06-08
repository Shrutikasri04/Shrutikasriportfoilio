"use client";

import { useState } from "react";

import IntroScreen from "../components/IntroScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsShowcase from "../components/ProjectsShowcase";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <IntroScreen onFinish={() => setShowIntro(false)} />
      )}

      {!showIntro && (
        <main className="relative min-h-screen overflow-x-hidden scroll-smooth">
          <Navbar />

          <Hero />
          <About />
          <ProjectsShowcase />
          <Skills />
          <Contact />
        </main>
      )}
    </>
  );
}