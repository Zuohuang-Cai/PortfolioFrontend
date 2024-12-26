import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ texts, className, duration }: {
  texts: React.ReactNode[],
  className: string,
  duration: number
}) => {
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <motion.h1
      animate={{ y: [-100, 0, 0, 100], opacity: [0, 1, 1, 0] }}
      className={className}
      initial={{ y: 0 }}
      transition={{
        repeat: Infinity,
        ease: "easeIn",
        duration: duration,
        times: [0, 0.1, 0.9, 1]
      }}
    >
      {currentText}
    </motion.h1>
  );
};

export default AnimatedText;
