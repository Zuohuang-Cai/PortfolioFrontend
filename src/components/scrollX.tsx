import { useEffect, useRef } from "react";
import { useInView, useScroll } from "framer-motion";

const ScrollX = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (isInView) {
      document.body.style.height = scrollY.getPrevious() + "px";
    }
  }, [isInView]);

  return <div ref={ref} />;
};

export default ScrollX;
