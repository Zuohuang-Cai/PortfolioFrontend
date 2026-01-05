import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useSmoothScroll } from "@/context/smoothScrollContext";

function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.6 });
  const { pause, resume } = useSmoothScroll();
  const [progress, setProgress] = useState(0);
  const scrollX = useMotionValue(0);

  const springScrollX = useSpring(scrollX, {
    damping: 20,
    stiffness: 100,
    mass: 1
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const unsubscribe = springScrollX.on("change", (latest) => {
      container.scrollLeft = latest;
      setProgress(latest / (container.scrollWidth - container.clientWidth) * 100);
    });

    return () => unsubscribe();
  }, [springScrollX]);

  useEffect(() => {
    if (isInView) return;
    const container = containerRef.current!;

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    if (container.scrollLeft == maxScroll) {
      container.scrollLeft -= 1;
    }
    if (container.scrollLeft == 0) {
      container.scrollLeft += 1;
    }
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const container = containerRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      let newX = scrollX.get() + e.deltaY;
      newX = Math.max(0, Math.min(newX, maxScroll));
      scrollX.set(newX);
    };

    const shouldCapture =
      container.scrollLeft < maxScroll && container.scrollLeft > 0;

    if (shouldCapture) {
      pause();
      window.addEventListener("wheel", onWheel, { passive: false });
    }
    console.log("update");

    return () => {
      window.removeEventListener("wheel", onWheel);
      resume();
    };
  }, [isInView, progress]);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        overflow: "auto",
        background: "red"
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          width: "100vw",
          height: "100%",
          overflowX: "auto",
          overflowY: "hidden"
        }}
      >
        <div className={"flex self-center text-center items-center"} style={{ minWidth: "100vw", flexShrink: 0 }}>
          <h1 className={"text-center text-[100px] w-full"}>Slide 1</h1>
        </div>
        <div className={"flex self-center text-center items-center"} style={{ minWidth: "100vw", flexShrink: 0 }}>
          <h1 className={"text-center text-[100px] w-full"}>Slide 2</h1>
        </div>
        <div className={"flex self-center text-center items-center"} style={{ minWidth: "100vw", flexShrink: 0 }}>
          <h1 className={"text-center text-[100px] w-full"}>Slide 3</h1>
        </div>
      </div>

    </section>
  );
}

export default HorizontalScroll;
