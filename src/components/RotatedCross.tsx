"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function RotatedCross({
                        classNameOuter,
                        classNameInner
                      }: {
  classNameOuter?: string;
  classNameInner?: string;
}) {
  const [rotate, setRotate] = useState(0);
  const repeatDelay = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((rotate) => {
        return rotate + 45;
      });
    }, repeatDelay * 1000);

    return () => clearInterval(interval);
  }, [rotate]);

  return (
    <motion.div
      animate={{ rotate: rotate }}
      className={`w-[25px] h-[25px] flex justify-center ${classNameOuter}`}
      transition={{
        duration: 0.1,
        repeatDelay: repeatDelay,
        repeat: Infinity,
        ease: "backInOut"
      }}
    >
      <div
        className={`w-[5px] h-[25px] bg-white rotate-[-45deg]  absolute ${classNameInner}`}
      />
      <div
        className={`w-[5px] h-[25px] bg-white rotate-[45deg] absolute ${classNameInner}`}
      />
    </motion.div>
  );
}

export default RotatedCross;
