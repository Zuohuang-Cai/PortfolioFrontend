"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const MotionPath = motion.create("path");

const Quations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      className="relative flex flex-col items-center justify-center py-16"
      initial="hidden"
      variants={containerVariants}
    >
      <motion.div
        animate={
          isHovered
            ? { scale: 1.3, opacity: 0.4 }
            : { scale: 1, opacity: 0.2 }
        }
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-3xl"
        transition={{ duration: 0.3 }}
      />

      <motion.div
        animate={floatAnimation}
        className="relative z-10 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.svg
          animate={pulseAnimation}
          className="w-[200px] h-[200px]"
          fill="white"
          viewBox="120 0 140 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur result="coloredBlur" stdDeviation="3" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient
              gradientTransform="rotate(45)"
              id="questionGradient"
            >
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>

          <motion.circle
            animate={{
              strokeDashoffset: isHovered ? 0 : 400
            }}
            cx="187"
            cy="65"
            fill="transparent"
            filter="url(#glow)"
            initial={{ strokeDashoffset: 400 }}
            r="60"
            stroke="url(#questionGradient)"
            strokeDasharray="400"
            strokeWidth="2"
            transition={{ duration: 1, ease: "easeInOut" as const }}
          />

          <MotionPath
            animate={{
              y: isHovered ? [0, -10, 0] : 0,
              fill: isHovered ? "#ec4899" : "#ffffff"
            }}
            d="M187.457 109.287C181.649 109.287 176.906 104.544 176.906 98.736C176.906 92.894 181.649 88.185 187.457 88.185C193.265 88.185 198.008 92.928 198.008 98.736C198.008 104.544 193.265 109.287 187.457 109.287Z"
            filter="url(#glow)"
            transition={{
              duration: 0.5,
              repeat: isHovered ? Infinity : 0,
              ease: "easeInOut" as const
            }}
          />

          <MotionPath
            animate={{
              fill: isHovered ? "url(#questionGradient)" : "#ffffff",
              rotate: isHovered ? [0, -5, 5, 0] : 0
            }}
            d="M212.854 58.836C211.342 61.07 208.696 63.716 204.537 66.74L200.379 69.764C198.18 71.62 196.667 73.476 195.877 75.778C195.43 77.29 195.087 79.558 195.087 82.583H179.656C180 76.191 180.378 71.689 181.512 69.386C182.234 67.083 184.88 64.059 189.004 61.069L192.819 57.701C194.331 56.636 195.396 55.467 196.187 54.333C197.699 52.409 198.489 50.175 198.489 47.528C198.489 44.504 197.355 41.926 195.843 39.624C194.331 37.39 191.306 36.256 186.804 36.256C182.302 36.256 179.278 37.734 177.422 40.758C175.91 42.992 174.776 46.016 174.776 48.662C174.776 49.109 174.776 49.109 174.776 49.452C174.329 53.61 170.961 56.944 166.459 56.944C161.957 56.944 158.486 53.576 158.142 49.418C158.142 49.418 158.142 47.562 158.142 46.772C159.276 37.321 163.091 30.585 169.448 26.427C173.985 23.781 179.655 22.269 186.013 22.269C194.639 22.269 201.787 24.125 207.458 28.283C213.06 32.441 216.084 38.456 216.668 46.429C216.669 51.31 215.501 55.468 212.854 58.836Z"
            filter="url(#glow)"
            style={{ transformOrigin: "center center" }}
            transition={{ duration: 0.3 }}
          />

          <MotionPath
            animate={{
              opacity: isInView ? 1 : 0,
              x: isInView ? 0 : -50,
              rotate: isHovered ? [0, 10, -10, 0] : 0
            }}
            d="M227.382 145.848L167.741 159.516C167.327 162.415 166.084 165.522 164.221 168.007C160.701 173.391 155.316 177.326 149.104 178.983C142.891 180.433 136.265 179.397 130.88 175.67L79.522 142.95C77.037 141.5 76.623 138.601 78.072 136.323C79.522 134.045 82.421 133.424 84.492 134.873L136.057 167.593C142.891 171.735 151.796 169.871 156.144 163.244C160.493 156.617 158.422 147.505 151.795 143.157L87.598 102.568C77.037 95.941 64.818 90.764 53.222 96.562L0 126.796L0.207 185.609L38.104 159.309C44.11 157.859 50.736 159.102 56.328 162.622L101.059 190.786C112.035 197.62 125.495 199.277 137.092 196.17L234.009 174.012C241.671 172.355 246.848 164.693 244.985 156.41C242.913 148.955 235.251 144.192 227.382 145.848Z"
            fill="url(#questionGradient)"
            initial={{ opacity: 0, x: -50 }}
            style={{ transformOrigin: "center center" }}
            transition={{
              opacity: { delay: 0.5, duration: 0.8 },
              x: { delay: 0.5, duration: 0.8 },
              rotate: { duration: 0.5, repeat: isHovered ? Infinity : 0 }
            }}
          />
        </motion.svg>
      </motion.div>

      <motion.div
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 20
        }}
        className="mt-6 text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <motion.h3
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
        >
          Got Questions?
        </motion.h3>
        <motion.p
          animate={{ opacity: isHovered ? 1 : 0.5 }}
          className="text-gray-400 mt-2"
        >
          Feel free to reach out!
        </motion.p>
      </motion.div>

      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100],
                x: [0, (i - 2.5) * 30],
                opacity: [1, 0],
                scale: [1, 0.5]
              }}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ y: 0, opacity: 0 }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeOut" as const
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

export default Quations;
