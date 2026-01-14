"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Photography() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );

  const scale1 = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.95]);
  const opacity1 = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.5]);

  const linePosition = useTransform(scrollYProgress, [0.2, 0.8], ["100%", "0%"]);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-20 pointer-events-none" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20 z-20 pointer-events-none" />

      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: scale1, opacity: opacity1 }}
      >
        <img
          alt="Top Portrait"
          className="w-full h-full object-cover object-top"
          src="/portrait/cyberpunk-portrait-top.jpg"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10"
        style={{ clipPath }}
      >
        <img
          alt="Bottom Portrait"
          className="w-full h-full object-cover object-top"
          src="/portrait/cyberpunk-portrait-bottom.jpg"
        />

        <motion.div
          className="absolute left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-pink-500 to-transparent z-30"
          style={{
            top: linePosition,
            boxShadow: "0 0 20px 5px rgba(236, 72, 153, 0.8), 0 0 40px 10px rgba(168, 85, 247, 0.5)"
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-center"
        animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-gray-300 text-sm tracking-widest uppercase">Scroll to reveal</p>
        <div className="mt-2 w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-pink-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Photography;
