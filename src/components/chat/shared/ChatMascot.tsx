"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type MascotMood = "idle" | "happy" | "excited" | "thinking";

interface Props {
  mood?: MascotMood;
}

export default function ChatMascot({ mood = "idle" }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const currentMood: MascotMood = isClicked ? "excited" : isHovered ? "happy" : mood;

  const handleClick = () => {
    setIsClicked(true);
    setClickCount(c => c + 1);
    setTimeout(() => setIsClicked(false), 600);
  };

  const mouthPath: Record<MascotMood, string> = {
    idle:     "M 10 18 Q 16 22 22 18",
    happy:    "M 8 17 Q 16 26 24 17",
    excited:  "M 8 16 Q 16 28 24 16",
    thinking: "M 10 20 Q 16 18 22 20",
  };

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      style={{ width: 80, height: 100 }}
      animate={
        isClicked
          ? { y: [-10, 10, -10], rotate: [0, -8, 8, 0], scale: 1 }
          : { y: [0, -8, 0], scale: isHovered ? 1.08 : 1 }
      }
      transition={
        isClicked
          ? { duration: 0.5, ease: "easeOut" }
          : {
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.4, ease: "easeInOut" },
            }
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileTap={{ scale: 0.92 }}
    >
      <AnimatePresence>
        {isClicked && (
          <motion.div
            key={clickCount}
            initial={{ opacity: 0, y: 4, scale: 0.8 }}
            animate={{ opacity: 1, y: -4, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-purple-600 text-white text-[10px] px-2 py-1 rounded-full shadow"
          >
            {clickCount % 4 === 1 ? "Hello! 👋" : clickCount % 4 === 2 ? "Ask me anything!" : clickCount % 4 === 3 ? "I'm Zuria ✨" : "Whee! 🎉"}
          </motion.div>
        )}
      </AnimatePresence>

      <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="faceGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#0c1a2e" />
          </linearGradient>
          <linearGradient id="eyeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Antenna */}
        <motion.g
          animate={{ rotate: isHovered ? [-5, 5, -5] : [0, 0, 0] }}
          transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
          style={{ originX: "50%", originY: "100%" }}
        >
          <line x1="32" y1="6" x2="32" y2="16" stroke="url(#bodyGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <motion.circle
            cx="32" cy="5" r="3.5"
            fill="url(#eyeGrad)"
            filter="url(#glow)"
            animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.g>

        {/* Body */}
        <rect x="14" y="44" width="36" height="28" rx="8" fill="url(#bodyGrad)" opacity="0.9" />

        {/* Legs */}
        <rect x="19" y="68" width="9" height="8" rx="4" fill="url(#bodyGrad)" opacity="0.8" />
        <rect x="36" y="68" width="9" height="8" rx="4" fill="url(#bodyGrad)" opacity="0.8" />

        {/* Left arm */}
        <motion.g
          style={{ originX: "100%", originY: "50%" }}
          animate={isHovered ? { rotate: [0, -8, -4, -8, -4, 0] } : { rotate: 0 }}
          transition={isHovered
            ? { duration: 2.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.38, 0.56, 0.74, 1] }
            : { duration: 0.4, ease: "easeOut" }}
        >
          <rect x="4" y="46" width="12" height="7" rx="3.5" fill="url(#bodyGrad)" opacity="0.85" />
          <circle cx="5.5" cy="49.5" r="3" fill="url(#bodyGrad)" opacity="0.75" />
        </motion.g>

        {/* Right arm */}
        <motion.g
          style={{ originX: "0%", originY: "50%" }}
          animate={isHovered ? { rotate: [0, 8, 4, 8, 4, 0] } : { rotate: 0 }}
          transition={isHovered
            ? { duration: 2.6, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.38, 0.56, 0.74, 1], delay: 1.3 }
            : { duration: 0.4, ease: "easeOut" }}
        >
          <rect x="48" y="46" width="12" height="7" rx="3.5" fill="url(#bodyGrad)" opacity="0.85" />
          <circle cx="58.5" cy="49.5" r="3" fill="url(#bodyGrad)" opacity="0.75" />
        </motion.g>

        {/* Chest light */}
        <motion.circle cx="32" cy="56" r="4" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6"
          animate={{ opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="32" cy="56" r="1.5" fill="#22d3ee"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />

        {/* Head */}
        <rect x="12" y="15" width="40" height="34" rx="12" fill="url(#bodyGrad)" />
        <rect x="14" y="17" width="36" height="30" rx="10" fill="url(#faceGrad)" />

        {/* Eyes */}
        <motion.ellipse cx="24" cy="26" rx="4.5" ry="4.5" fill="url(#eyeGrad)" filter="url(#glow)"
          animate={{ scaleY: [1, 1, 0.1, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.94, 1] }} />
        <circle cx="25.5" cy="24.5" r="1.2" fill="white" opacity="0.8" />

        <motion.ellipse cx="40" cy="26" rx="4.5" ry="4.5" fill="url(#eyeGrad)" filter="url(#glow)"
          animate={{ scaleY: [1, 1, 0.1, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.94, 1] }} />
        <circle cx="41.5" cy="24.5" r="1.2" fill="white" opacity="0.8" />

        {/* Cheeks */}
        <motion.ellipse cx="19" cy="32" rx="3.5" ry="2" fill="#f472b6"
          animate={{ opacity: isHovered || isClicked ? 0.6 : 0.2 }} transition={{ duration: 0.3 }} />
        <motion.ellipse cx="45" cy="32" rx="3.5" ry="2" fill="#f472b6"
          animate={{ opacity: isHovered || isClicked ? 0.6 : 0.2 }} transition={{ duration: 0.3 }} />

        {/* Mouth */}
        <motion.path
          initial={{ d: mouthPath["idle"] }}
          animate={{ d: mouthPath[currentMood] }}
          stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" fill="none"
          transition={{ duration: 0.3 }} />
      </svg>
    </motion.div>
  );
}
