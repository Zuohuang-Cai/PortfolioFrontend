"use client";

import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setHidden] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);
  const [zIndex, setZIndex] = useState("-z-10");

  return (
    <>
      <div className={"sticky top-0"} style={{ zIndex: "100" }}>
        <MenuToggle
          isOpen={isOpen}
          toggle={() => {
            setIsOpen(!isOpen);
            setHidden(false);
          }}
        />
      </div>
      <div className={`top-0 sticky ${zIndex}`}>
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
    {[0, 1, 2, 3, 4].map((i) => (
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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i }: { i: number }) => {
  const border = `2px solid ${colors[i]}`;

  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div style={{ ...iconPlaceholder, border }} />
      <div style={{ ...textPlaceholder, border }} />
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
  marginBottom: 20,
  cursor: "pointer"
};

const iconPlaceholder: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  flex: "40px 0",
  marginRight: 20
};

const textPlaceholder: React.CSSProperties = {
  borderRadius: 5,
  width: 200,
  height: 20,
  flex: 1
};

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
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
