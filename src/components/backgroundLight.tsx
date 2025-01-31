import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

function BackgroundLight({
  positionFormula = (n: number) => n,
  colorInner,
  colorMiddle,
  colorOuter,
  defaultPosition,
}: {
  colorInner?: string;
  colorMiddle?: string;
  colorOuter?: string;
  defaultPosition: { top: number; left: number };
  positionFormula?: (n: number) => number;
}) {
  const controls = useAnimation();
  const [oldMousePositio, setOldMousePosition] = React.useState({ x: 0, y: 0 });
  const [currentMousePosition, setCurrentMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      setCurrentMousePosition({ x: mouseX, y: mouseY });

      if (outDistance(30, oldMousePositio, currentMousePosition)) {
        controls.start({
          top: `${positionFormula(currentMousePosition.y)}%`,
          left: `${positionFormula(currentMousePosition.x)}%`,
          transition: {
            duration: 2,
            ease: "easeOut",
          },
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // };
  }, [controls, currentMousePosition, oldMousePositio]);

  //default
  const light: React.CSSProperties = {
    boxShadow: `0 0 60px 30px ${colorInner},0 0 100px 60px ${colorMiddle},0 0 140px 90px ${colorOuter}`,
    top: `${defaultPosition.top}%`,
    left: `${defaultPosition.left}%`,
  };

  return (
    <motion.div
      animate={controls}
      className={"absolute rounded-full border-0 before:content-['']"}
      style={light}
      onAnimationComplete={() => {
        setOldMousePosition({
          x: currentMousePosition.x,
          y: currentMousePosition.y,
        });
      }}
    />
  );
}

const outDistance = (
  limit: number,
  oldPosition: { x: number; y: number },
  currentPosition: { x: number; y: number },
) => {
  const distanceX = Math.abs(currentPosition.x - oldPosition.x);
  const distanceY = Math.abs(currentPosition.y - oldPosition.y);

  return distanceX > limit || distanceY > limit;
};

export default BackgroundLight;
