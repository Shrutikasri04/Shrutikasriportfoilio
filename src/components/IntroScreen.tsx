"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroScreenProps {
  onFinish: () => void;
}

export default function IntroScreen({
  onFinish,
}: IntroScreenProps) {
  const fullText = "SHRUTIKA SRI SARAVANAN";

  const [displayedText, setDisplayedText] =
    useState("");

  const [hideIntro, setHideIntro] =
    useState(false);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setDisplayedText(
        fullText.slice(0, index + 1)
      );

      index++;

      if (index >= fullText.length) {
        clearInterval(typing);

        setTimeout(() => {
          setHideIntro(true);

          setTimeout(() => {
            onFinish();
          }, 1200);
        }, 800);
      }
    }, 90);

    return () => clearInterval(typing);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!hideIntro && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
          fixed
          inset-0
          z-[9999]
          bg-[#0B0B0B]
          flex
          items-center
          justify-center
          overflow-hidden
        "
        >
          {/* Ghost Text */}
          <h1
            className="
            absolute
            text-[22vw]
            md:text-[16vw]
            font-black
            text-white/[0.03]
            pointer-events-none
            select-none
            tracking-tight
          "
          >
            AI
          </h1>

          {/* Glow */}
          <div
            className="
            absolute

            w-[300px]
            h-[300px]

            sm:w-[500px]
            sm:h-[500px]

            md:w-[700px]
            md:h-[700px]

            rounded-full
            bg-red-600/20
            blur-[160px]
          "
          />

          {/* Noise */}
          <div
            className="
            absolute
            inset-0
            opacity-[0.04]
          "
            style={{
              backgroundImage:
                "radial-gradient(circle at center, white 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
              font-[Space_Grotesk]
              font-semibold
              text-white
              tracking-tight
            "
              style={{
                fontSize:
                  "clamp(34px,5vw,90px)",
                letterSpacing: "-0.05em",
                lineHeight: 1,
                textShadow:
                  "0 0 30px rgba(230,57,70,0.3)",
              }}
            >
              {displayedText}

              <span className="text-[#E63946] animate-pulse">
                |
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity:
                  displayedText.length > 10
                    ? 1
                    : 0,
                y:
                  displayedText.length > 10
                    ? 0
                    : 20,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
              mt-6

              text-gray-400

              text-sm
              sm:text-base
              md:text-lg

              font-light
              tracking-wider
            "
            >
              AI Engineer • Machine Learning •
              Intelligent Systems
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity:
                  displayedText.length > 15
                    ? 1
                    : 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
              mt-10
              h-[1px]
              w-32
              mx-auto
              bg-gradient-to-r
              from-transparent
              via-red-500
              to-transparent
            "
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}