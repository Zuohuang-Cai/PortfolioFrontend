import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function RotatedCross({
  classNameOuter,
  classNameInner,
}: {
  classNameOuter?: string;
  classNameInner?: string;
}) {
  const [rotate, setRotate] = useState(0);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((rotate) => {
        if (rotate === 360) {
          setDuration(0.5);

          return -360;
        }
        setDuration(0.1);

        return rotate + 45;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [rotate, duration]);

  return (
    <motion.div
      animate={{ rotate: rotate }}
      className={`w-[25px] h-[25px] flex justify-center ${classNameOuter}`}
      transition={{
        duration: duration,
        repeatDelay: 1,
        repeat: Infinity,
        ease: "easeIn",
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
