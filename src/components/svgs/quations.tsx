"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const MotionPath = motion.create("path");
const MotionCircle = motion.create("circle");

const Quations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  const [hovered, setHovered] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
      rotateY: -90,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const pulseGlow = {
    filter: [
      "drop-shadow(0 0 2px #a855f7)",
      "drop-shadow(0 0 15px #ec4899)",
      "drop-shadow(0 0 2px #a855f7)"
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const scanLines = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 0.4,
    y: -50 + i * 20
  }));

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center justify-center py-16 perspective-1000"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: hovered ? ["0% 0%", "100% 100%"] : "0% 0%"
        }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%239333ea' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {scanLines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ y: line.y, opacity: 0 }}
          animate={isInView ? {
            y: [line.y, line.y + 250],
            opacity: [0, 0.6, 0]
          } : { opacity: 0 }}
          transition={{
            duration: 2,
            delay: line.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover={{
          rotateX: 10,
          rotateY: -10,
          scale: 1.05,
          transition: { type: "spring", stiffness: 300 }
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.svg
          className="w-[220px] h-[220px]"
          viewBox="0 0 260 200"
          xmlns="http://www.w3.org/2000/svg"
          animate={pulseGlow}
        >
          <defs>
            <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>

            <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>

            <filter id="glitch">
              <feOffset in="SourceGraphic" dx="2" dy="0" result="red">
                <animate attributeName="dx" values="2;-2;2" dur="0.1s" repeatCount="indefinite" />
              </feOffset>
              <feOffset in="SourceGraphic" dx="-2" dy="0" result="cyan">
                <animate attributeName="dx" values="-2;2;-2" dur="0.1s" repeatCount="indefinite" />
              </feOffset>
              <feBlend in="red" in2="cyan" mode="screen" />
            </filter>

            <filter id="cyberGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feFlood floodColor="#22d3ee" floodOpacity="0.5" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <MotionCircle
            cx="187"
            cy="65"
            r="65"
            fill="none"
            stroke="url(#flowGrad)"
            strokeWidth="3"
            strokeDasharray="20 180"
            animate={{ rotate: 360 }}
            style={{ transformOrigin: "187px 65px" }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <MotionCircle
            cx="187"
            cy="65"
            r="50"
            fill="none"
            stroke="#a855f7"
            strokeWidth="1"
            strokeDasharray="5 10"
            opacity="0.6"
            animate={{ rotate: -360 }}
            style={{ transformOrigin: "187px 65px" }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          <MotionPath
            d="M212.854 58.836C211.342 61.07 208.696 63.716 204.537 66.74L200.379 69.764C198.18 71.62 196.667 73.476 195.877 75.778C195.43 77.29 195.087 79.558 195.087 82.583H179.656C180 76.191 180.378 71.689 181.512 69.386C182.234 67.083 184.88 64.059 189.004 61.069L192.819 57.701C194.331 56.636 195.396 55.467 196.187 54.333C197.699 52.409 198.489 50.175 198.489 47.528C198.489 44.504 197.355 41.926 195.843 39.624C194.331 37.39 191.306 36.256 186.804 36.256C182.302 36.256 179.278 37.734 177.422 40.758C175.91 42.992 174.776 46.016 174.776 48.662C174.776 49.109 174.776 49.109 174.776 49.452C174.329 53.61 170.961 56.944 166.459 56.944C161.957 56.944 158.486 53.576 158.142 49.418C158.142 49.418 158.142 47.562 158.142 46.772C159.276 37.321 163.091 30.585 169.448 26.427C173.985 23.781 179.655 22.269 186.013 22.269C194.639 22.269 201.787 24.125 207.458 28.283C213.06 32.441 216.084 38.456 216.668 46.429C216.669 51.31 215.501 55.468 212.854 58.836Z"
            fill="none"
            stroke="url(#neonGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="500"
            filter="url(#cyberGlow)"
            initial={{ strokeDashoffset: 500, opacity: 0 }}
            animate={isInView ? {
              strokeDashoffset: 0,
              opacity: 1
            } : {
              strokeDashoffset: 500,
              opacity: 0
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <MotionCircle
            cx="187.457"
            cy="98.736"
            r="8"
            fill="url(#neonGrad)"
            filter="url(#cyberGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? {
              scale: [0, 1.3, 1],
              opacity: [0, 1, 1]
            } : { scale: 0, opacity: 0 }}
            style={{ transformOrigin: "187.457px 98.736px" }}
            transition={{ delay: 1.2, duration: 0.6, ease: "backOut" }}
          />

          <MotionCircle
            cx="187.457"
            cy="98.736"
            r="8"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={isInView ? {
              scale: [1, 2, 1],
              opacity: [0.8, 0, 0.8]
            } : {}}
            style={{ transformOrigin: "187.457px 98.736px" }}
            transition={{ delay: 1.8, duration: 1.5, repeat: Infinity }}
          />

          <MotionPath
            d="M227.382 145.848L167.741 159.516C167.327 162.415 166.084 165.522 164.221 168.007C160.701 173.391 155.316 177.326 149.104 178.983C142.891 180.433 136.265 179.397 130.88 175.67L79.522 142.95C77.037 141.5 76.623 138.601 78.072 136.323C79.522 134.045 82.421 133.424 84.492 134.873L136.057 167.593C142.891 171.735 151.796 169.871 156.144 163.244C160.493 156.617 158.422 147.505 151.795 143.157L87.598 102.568C77.037 95.941 64.818 90.764 53.222 96.562L0 126.796L0.207 185.609L38.104 159.309C44.11 157.859 50.736 159.102 56.328 162.622L101.059 190.786C112.035 197.62 125.495 199.277 137.092 196.17L234.009 174.012C241.671 172.355 246.848 164.693 244.985 156.41C242.913 148.955 235.251 144.192 227.382 145.848Z"
            fill="none"
            stroke="url(#neonGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1200"
            filter="url(#cyberGlow)"
            initial={{ strokeDashoffset: 1200, y: 30 }}
            animate={isInView ? {
              strokeDashoffset: 0,
              y: 0
            } : {
              strokeDashoffset: 1200,
              y: 30
            }}
            transition={{ delay: 0.5, duration: 4, ease: "easeOut" }}
          />

          {[
            { cx: 155, cy: 30 },
            { cx: 220, cy: 40 },
            { cx: 165, cy: 100 },
            { cx: 210, cy: 90 }
          ].map((dot, i) => (
            <MotionCircle
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              r="2"
              fill="#22d3ee"
              initial={{ opacity: 0 }}
              animate={isInView ? {
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              } : { opacity: 0 }}
              style={{ transformOrigin: `${dot.cx}px ${dot.cy}px` }}
              transition={{
                delay: 2 + i * 0.3,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.svg>

        {hovered && (
          <motion.div
            className="absolute inset-0 mix-blend-screen"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              x: [0, 3, -3, 0]
            }}
            transition={{ duration: 0.1, repeat: Infinity }}
          >
            <svg className="w-full h-full" viewBox="0 0 260 200" style={{ filter: "url(#glitch)" }}>
              <path
                d="M212.854 58.836C211.342 61.07..."
                fill="none"
                stroke="#00ffff"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="mt-8 text-center z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <motion.h3
          className="text-2xl font-bold font-mono tracking-wider"
          style={{
            background: "linear-gradient(90deg, #06b6d4, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 30px rgba(6, 182, 212, 0.3)"
          }}
        >
          {"Got Questions?".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 2.5 + i * 0.08 }}
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </motion.h3>
        <motion.p
          className="text-cyan-300/60 mt-2 text-sm tracking-widest uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 3.5, duration: 0.5 }}
        >
          [ Feel free to reach out ]
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-6 w-40 h-0.5 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          initial={{ x: "-100%" }}
          animate={isInView ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-500/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: 0.3 }}
      />
      <motion.div
        className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-500/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-500/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500/40"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: 0.6 }}
      />
    </motion.div>
  );
};

export default Quations;
