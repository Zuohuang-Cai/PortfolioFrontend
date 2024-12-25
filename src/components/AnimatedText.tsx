import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ texts }: { texts: React.ReactNode[] }) => {
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <motion.h1
      animate={{ y: [-10, 40], opacity: [0.5, 1] }}
      initial={{ y: 0 }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      {currentText}
    </motion.h1>
  );
};

export default AnimatedText;
