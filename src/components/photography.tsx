import { useState } from "react";
import { motion } from "framer-motion";

function Photography() {
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/portrait/hackerStyle.png",
    "/portrait/robotStyle.png",
    "/portrait/jojoStyle.png",
  ];

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="h-screen w-full relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main image */}
      <motion.img
        alt="MainImage"
        className="absolute w-full h-full object-cover"
        src={images[currentImageIndex]}
        initial={{ opacity: 1 }}
        animate={{
          opacity: isHovering ? 0.5 : 1,
          filter: isHovering ? "brightness(60%) blur(2px)" : "brightness(100%)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Reveal image (partially visible on hover) */}
      <motion.img
        alt="RevealImage"
        className="absolute w-full h-full object-cover"
        src={images[(currentImageIndex + 1) % images.length]}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{
          clipPath: isHovering ? "inset(0 50% 0 0)" : "inset(0 100% 0 0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}

export default Photography;
