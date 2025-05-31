import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const springConfig = React.useMemo(() => {
    return {
      damping: 30,
      stiffness: 100,
      mass: 1,
    };
  }, []);

  const y = useSpring(
    useTransform(scrollY, (latest) => {
      springConfig.stiffness = Math.max(50, Math.min(200, 1));
      return -latest;
    }),
    springConfig,
  );

  useEffect(() => {
    if (!contentRef.current) return;

    const updateHeight = () => {
      const contentHeight = contentRef.current?.clientHeight || 0;
      document.body.style.height = `${contentHeight}px`;
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <motion.div
      ref={scrollRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100%",
        y,
        willChange: "transform",
      }}
    >
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
