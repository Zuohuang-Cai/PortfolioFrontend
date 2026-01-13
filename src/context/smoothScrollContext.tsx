"use client";

import { createContext, useContext } from "react";
import { MotionValue } from "framer-motion";

interface ScrollCtx {
  y: MotionValue<number>;
  pause: () => void;
  resume: () => void;
}

export const SmoothScrollContext = createContext<ScrollCtx | null>(null);

export const useSmoothScroll = () => {
  const ctx = useContext(SmoothScrollContext);

  if (!ctx)
    throw new Error("you have to using this Context inside SmoothScroll");

  return ctx;
};
