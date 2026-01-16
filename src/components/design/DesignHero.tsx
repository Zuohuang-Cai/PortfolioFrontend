"use client";

import { motion } from "framer-motion";

export default function DesignHero() {
  return (
    <motion.section
      className="relative h-[50vh] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(156, 26, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(156, 26, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(156, 26, 255, 0.4) 0%, transparent 70%)",
          filter: "blur(40px)"
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" as const, stiffness: 100 }}
        >
          <span className="bg-gradient-to-r from-[#FF008C] via-[#9C1AFF] to-[#4400FF] bg-clip-text text-transparent">
            Design Philosophy
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Clean code, solid principles, and scalable architecture
        </motion.p>
      </div>
    </motion.section>
  );
}

