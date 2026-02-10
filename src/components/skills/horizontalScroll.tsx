"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useSmoothScroll } from "@/context/smoothScrollContext";
import { programmingSkills, SkillData } from "./skillsData";

interface SkillCard extends SkillData {
  iconElement?: ReactNode;
}

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 100
    }
  }
};

function SkillCardComponent({ skill }: { skill: SkillCard }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });

  const currentVariant = isInView ? "visible" : "hidden";

  return (
    <motion.div
      ref={cardRef}
      className="min-w-[350px] h-[450px] mx-6 perspective-1000"
      initial="hidden"
      animate={currentVariant}
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
    >
      <div className={`relative h-full w-full rounded-3xl bg-gradient-to-br ${skill.color} p-1`}>
        <div className="h-full w-full rounded-3xl bg-black/90 backdrop-blur-xl p-8 flex flex-col">
          <motion.div
            className="absolute top-4 right-4 text-white/10 text-6xl font-mono"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {"</>"}
          </motion.div>

          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 text-3xl`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {skill.iconElement || skill.icon}
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-white mb-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2 }}
          >
            {skill.fullTitle || skill.title}
          </motion.h3>

          <motion.p
            className="text-gray-400 mb-6 flex-grow"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {skill.description}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${skill.color} text-white`}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: i * 0.1,
                    type: "spring" as const,
                    stiffness: 200
                  }
                } : { opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <motion.div
            className={`absolute bottom-1 left-0 right-0 h-1 rounded-b-3xl rounded-t-3xl bg-gradient-to-r ${skill.color}`}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// 打字机效果组件
function TypewriterText({ text, isInView }: { text: string; isInView: boolean }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!isInView) {
      setDisplayText("");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <span className="font-mono">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  );
}

interface HorizontalScrollProps {
  skills?: SkillCard[];
}

function HorizontalScroll({ skills = programmingSkills }: HorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });
  const { pause, resume } = useSmoothScroll();
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const scrollX = useMotionValue(0);
  const lastScrollDirection = useRef<"up" | "down" | null>(null);
  const wasInView = useRef(false);

  const springScrollX = useSpring(scrollX, {
    damping: 25,
    stiffness: 120,
    mass: 0.5
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        lastScrollDirection.current = "down";
      } else if (currentScrollY < lastScrollY) {
        lastScrollDirection.current = "up";
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const unsubscribe = springScrollX.on("change", (latest) => {
      container.scrollLeft = latest;
      const maxScroll = container.scrollWidth - container.clientWidth;
      setProgress(maxScroll > 0 ? (latest / maxScroll) * 100 : 0);
    });

    return () => unsubscribe();
  }, [springScrollX]);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    const onWheel = (e: WheelEvent) => {
      const currentX = scrollX.get();
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      const atStart = currentX <= 1;
      const atEnd = currentX >= maxScroll - 1;

      if (atStart && isScrollingUp) {
        setIsActive(false);
        resume();
        return;
      }

      if (atEnd && isScrollingDown) {
        setIsActive(false);
        resume();
        return;
      }

      e.preventDefault();
      e.stopPropagation();

      let newX = currentX + e.deltaY;
      newX = Math.max(0, Math.min(newX, maxScroll));
      scrollX.set(newX);
    };

    const justEnteredView = isInView && !wasInView.current;
    wasInView.current = isInView;

    if (justEnteredView) {
      const direction = lastScrollDirection.current;

      if (direction === "up") {
        scrollX.set(maxScroll);
        setIsActive(true);
        pause();
      } else if (direction === "down") {
        scrollX.set(0);
        setIsActive(true);
        pause();
      }
    }

    if (!isInView && isActive) {
      setIsActive(false);
      resume();
    }

    if (isActive) {
      window.addEventListener("wheel", onWheel, { passive: false });
      return () => {
        window.removeEventListener("wheel", onWheel);
      };
    }
  }, [isInView, isActive, pause, resume, scrollX]);

  useEffect(() => {
    return () => {
      resume();
    };
  }, [resume]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-6xl text-white/5 font-mono"
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {"{ }"}
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 text-6xl text-white/5 font-mono"
          animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {"[ ]"}
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/4 text-4xl text-white/5 font-mono"
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {"=>"}
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 z-10">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm flex items-center gap-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>← Scroll to explore →</span>
      </motion.div>

      <div
        ref={containerRef}
        className="flex items-center h-screen overflow-x-auto overflow-y-hidden px-20 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <motion.div
          className="min-w-[400px] h-[450px] mx-6 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl font-black text-white mb-4">
            <TypewriterText text="Skills & Expertise" isInView={isInView} />
          </h2>
          <p className="text-xl text-gray-400">
            Technologies I work with to bring ideas to life
          </p>
          <motion.div
            className="mt-8 flex items-center gap-2 text-white/50"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>Swipe</span>
            <span>→</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <SkillCardComponent key={skill.title} skill={skill} />
          ))}
        </motion.div>

        <motion.div
          className="min-w-[400px] h-[450px] mx-6 flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀
          </motion.div>
          <h3 className="text-3xl font-bold text-white mb-2">
            Always Learning
          </h3>
          <p className="text-gray-400 text-center">
            Constantly exploring new technologies
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function CodeIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}

function ServerIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

export default HorizontalScroll;
export type { SkillCard };
