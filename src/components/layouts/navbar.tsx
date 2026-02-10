"use client";

import { Variants, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setHidden] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);
  const [zIndex, setZIndex] = useState("-z-10");

  // Scroll tracking for elastic bounce effect
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Spring animation for elastic effect
  const springConfig = { stiffness: 300, damping: 20, mass: 0.8 };
  const yOffset = useSpring(0, springConfig);
  const rotate = useSpring(0, springConfig);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const diff = latest - lastScrollY;

    if (Math.abs(diff) > 2) {
      // Apply a subtle bounce based on scroll velocity
      const velocity = Math.min(Math.abs(diff) * 0.3, 8);
      const direction = diff > 0 ? 1 : -1;

      yOffset.set(direction * velocity);
      rotate.set(direction * velocity * 0.15);

      // Reset after bounce
      setTimeout(() => {
        yOffset.set(0);
        rotate.set(0);
      }, 100);

      setScrollDirection(diff > 0 ? "down" : "up");
      setLastScrollY(latest);
    }
  });

  return (
    <>
      <motion.div
        className={"fixed top-0 right-0"}
        style={{
          zIndex: 100,
          y: yOffset,
          rotate: rotate
        }}
      >
        <MenuToggle
          isOpen={isOpen}
          toggle={() => {
            setIsOpen(!isOpen);
            setHidden(false);
          }}
        />
      </motion.div>
      <div className={`fixed top-0 left-0 right-0 ${zIndex}`}>
        <div style={container}>
          <motion.nav
            ref={containerRef}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            initial={false}
            style={nav}
          >
            <motion.div style={background} variants={sidebarVariants} />
            <Navigation
              isHidden={isHidden}
              isOpen={isOpen}
              setHidden={setHidden}
              setZIndex={setZIndex}
            />
          </motion.nav>
        </div>
      </div>
    </>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = ({
                      isHidden,
                      setHidden,
                      isOpen,
                      setZIndex
                    }: {
  isHidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  setZIndex: React.Dispatch<React.SetStateAction<string>>;
}) => (
  <motion.ul
    className={`${isHidden && !isOpen ? "hidden" : ""}`}
    style={list}
    variants={navVariants}
    onAnimationComplete={() => {
      setHidden(true);
      if (!isOpen) {
        setZIndex("-z-10");
      }
    }}
    onAnimationStart={() => {
      setZIndex("z-50");
    }}
  >
    {navItems.map((_, i) => (
      <MenuItem key={i} i={i} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const navItems = [
  { name: "Home", href: "#home", icon: "🏠", desc: "Back to top" },
  { name: "Skills", href: "#skills", icon: "⚡", desc: "Technical skills" },
  { name: "Design", href: "#design", icon: "🎨", desc: "Design philosophy" },
  { name: "Projects", href: "#projects", icon: "💼", desc: "View my work" },
  { name: "Contact", href: "#contact", icon: "📧", desc: "Get in touch" }
];

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const handleAnchorClick = (e: React.MouseEvent, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const element = document.querySelector(href) as HTMLElement;
    if (element) {
      // Calculate absolute position by walking up the offsetParent chain
      let offsetTop = 0;
      let currentElement: HTMLElement | null = element;
      while (currentElement) {
        offsetTop += currentElement.offsetTop;
        currentElement = currentElement.offsetParent as HTMLElement | null;
      }
      window.scrollTo({
        top: offsetTop,
        behavior: "instant"
      });
    }
  }
};

const MenuItem = ({ i }: { i: number }) => {
  const item = navItems[i];
  const color = colors[i];

  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        x: 10
      }}
      whileTap={{ scale: 0.98 }}
    >
      <a
        href={item.href}
        onClick={(e) => handleAnchorClick(e, item.href)}
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          width: "100%",
          padding: "12px 16px",
          borderRadius: "16px",
          background: `linear-gradient(135deg, ${color}15, transparent)`,
          border: `1px solid ${color}30`,
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at left, ${color}20, transparent 70%)`,
            opacity: 0,
            transition: "opacity 0.3s ease"
          }}
          whileHover={{ opacity: 1 }}
        />

        {/* Icon container */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            background: `linear-gradient(135deg, ${color}30, ${color}10)`,
            border: `2px solid ${color}50`,
            marginRight: 16,
            boxShadow: `0 4px 15px ${color}30`
          }}
        >
          {item.icon}
        </div>

        {/* Text container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textShadow: `0 0 20px ${color}50`
            }}
          >
            {item.name}
          </span>
          <span
            style={{
              fontSize: "12px",
              color: color,
              opacity: 0.8,
              marginTop: 2
            }}
          >
            {item.desc}
          </span>
        </div>

        {/* Arrow indicator */}
        <motion.div
          style={{
            marginLeft: "auto",
            fontSize: "20px",
            color: color,
            opacity: 0.6
          }}
          whileHover={{ x: 5, opacity: 1 }}
        >
          →
        </motion.div>
      </a>
    </motion.li>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring" as const,
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      delay: 0.2,
      type: "spring" as const,
      stiffness: 400,
      damping: 40
    }
  }
};

interface PathProps {
  d?: string;
  isOpen: boolean;
  variants: Variants;
  transition?: { duration: number };
}

const Path = ({ isOpen, ...props }: PathProps) => (
  <motion.path
    animate={isOpen ? "open" : "closed"}
    className={"w-[20px]"}
    fill="transparent"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

const MenuToggle = ({
                      toggle,
                      isOpen
                    }: {
  toggle: () => void;
  isOpen: boolean;
}) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg fill="white" height="23" viewBox="0 0 23 23">
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 99%)" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 99%)" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        isOpen={isOpen}
        transition={{ duration: 0.1 }}
        variants={{
          closed: { opacity: 1, stroke: "hsl(0, 0%, 99%)" },
          open: { opacity: 0, stroke: "hsl(0, 0%, 99%)" }
        }}
      />
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 99%)" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 99%)" }
        }}
      />
    </svg>
  </button>
);

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  position: "absolute",
  opacity: 0.8,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  top: 0,
  width: "100vw",
  maxWidth: "100%",
  height: "100vh",
  backgroundColor: "var(--accent)",
  borderRadius: 20,
  overflow: "hidden"
};

const nav: React.CSSProperties = {
  width: "100%"
};

const background: React.CSSProperties = {
  backgroundColor: "black",
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "100%"
};

const toggleContainer: React.CSSProperties = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 18,
  right: 0,
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent"
};

const list: React.CSSProperties = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 80,
  width: "100%"
};

const listItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 12,
  cursor: "pointer"
};

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
