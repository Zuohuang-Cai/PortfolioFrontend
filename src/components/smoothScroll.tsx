import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import { SmoothScrollContext } from "@/context/smoothScrollContext";

interface Props {
  children: React.ReactNode;
}

function blockScroll() {
  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
  window.addEventListener("keydown", preventScroll, { passive: false });
}

function unblockScroll() {
  window.removeEventListener("wheel", preventScroll);
  window.removeEventListener("touchmove", preventScroll);
  window.removeEventListener("keydown", preventScroll);
}

const preventScroll = (e: Event) => e.preventDefault();

export default function SmoothScroll({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [anchor, setAnchor] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();


  const springConfig = React.useMemo(() => {
    return {
      damping: 20,
      stiffness: 1000,
      mass: 2
    };
  }, []);

  const y = useSpring(
    useTransform(scrollY, (latest) => {
      if (isPaused) return anchor;
      springConfig.stiffness = Math.max(50, Math.min(200, 1));

      return -latest;
    }),
    springConfig
  );

  const pause = () => {
    setAnchor(y.get());
    setIsPaused(true);
    blockScroll();
  };

  const resume = () => {
    setIsPaused(false);
    unblockScroll();
  };

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
    <SmoothScrollContext.Provider value={{ y, pause, resume}}>
      <motion.div
        ref={scrollRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          y,
          willChange: "transform"
        }}
      >
        <div ref={contentRef}>{children}</div>
      </motion.div>
    </SmoothScrollContext.Provider>
  );
}
