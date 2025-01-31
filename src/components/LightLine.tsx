import { motion } from "framer-motion";

function LightLine({
  rotate,
  top,
  left,
}: {
  rotate: string;
  top?: number;
  left?: number;
}) {
  return (
    <div className={rotate}>
      <motion.div
        animate={{
          scaleX: window.innerWidth * 2,
          opacity: [0, 0.3, 0.6, 0.3, 0.7, 0],
        }}
        className="absolute bg-red-500 w-[1px] h-[0.1px] z-10 opacity-0"
        style={{
          transformOrigin: "left center",
          top: top,
          left: left,
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default LightLine;
