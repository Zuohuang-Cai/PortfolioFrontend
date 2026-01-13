"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function LightLine({
                     rotate,
                     top,
                     left
                   }: {
  rotate: string;
  top?: number;
  left?: number;
}) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth === 0) {
    return null; // Don't render until we have the window width
  }

  return (
    <div className={rotate}>
      <motion.div
        animate={{
          scaleX: windowWidth * 2,
          opacity: [0, 0.3, 0.6, 0.3, 0.7, 0]
        }}
        className="absolute bg-red-500 w-[1px] h-[0.1px] z-10 opacity-0"
        style={{
          transformOrigin: "left center",
          top: top,
          left: left
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default LightLine;
