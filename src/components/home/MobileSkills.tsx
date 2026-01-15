"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface SkillCard {
  title: string;
  icon: string;
  description: string;
  technologies: string[];
  color: string;
  glowColor: string;
}

const skills: SkillCard[] = [
  {
    title: "Frontend",
    icon: "🎨",
    description: "Building beautiful, responsive user interfaces",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap"],
    color: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.5)"
  },
  {
    title: "Backend",
    icon: "⚙️",
    description: "Creating robust server-side applications",
    technologies: ["Node.js", "C#", "Java", ".Net", "Springboot", "Express.js"],
    color: "from-green-500 to-emerald-600",
    glowColor: "rgba(34, 197, 94, 0.5)"
  },
  {
    title: "Database",
    icon: "🗄️",
    description: "Designing efficient data architectures",
    technologies: ["PostgreSQL", "Redis", "MySQL"],
    color: "from-purple-500 to-violet-600",
    glowColor: "rgba(168, 85, 247, 0.5)"
  },
  {
    title: "DevOps",
    icon: "🚀",
    description: "Streamlining deployment & infrastructure",
    technologies: ["Docker", "Azure", "CI/CD"],
    color: "from-orange-500 to-red-600",
    glowColor: "rgba(249, 115, 22, 0.5)"
  },
  {
    title: "Mobile",
    icon: "📱",
    description: "Cross-platform mobile development",
    technologies: ["React Native"],
    color: "from-pink-500 to-rose-600",
    glowColor: "rgba(236, 72, 153, 0.5)"
  }
];

function SkillCardItem({ skill, index }: { skill: SkillCard; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const springConfig = { damping: 20, stiffness: 100, mass: 1 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(smoothProgress, [0, 1], [0.8, 1]);
  const x = useTransform(
    smoothProgress,
    [0, 1],
    [index % 2 === 0 ? -100 : 100, 0]
  );
  const rotateY = useTransform(
    smoothProgress,
    [0, 1],
    [index % 2 === 0 ? -15 : 15, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      className="w-full px-4 py-6"
      style={{ opacity, scale, x, rotateY }}
    >
      <motion.div
        className={`relative rounded-2xl p-6 bg-gradient-to-br ${skill.color} overflow-hidden`}
        style={{
          boxShadow: `0 0 30px ${skill.glowColor}, 0 0 60px ${skill.glowColor}`
        }}
        whileTap={{ scale: 0.98 }}
      >
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-white/10"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.span
              className="text-4xl"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut" as const
              }}
            >
              {skill.icon}
            </motion.span>
            <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
          </div>

          {/* 描述 */}
          <p className="text-white/80 text-sm mb-4">{skill.description}</p>

          {/* 技术标签 */}
          <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.1 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 闪光效果 */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut" as const
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function MobileSkills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black py-12"
    >
      <motion.div
        className="text-center mb-8 px-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-gray-400 text-sm mt-2">Swipe through my expertise</p>

        <motion.div
          className="h-1 w-20 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
          animate={{
            width: ["5rem", "8rem", "5rem"],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
      </motion.div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillCardItem key={skill.title} skill={skill} index={index} />
        ))}
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div
          className="inline-block"
          animate={{
            y: [0, -10, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        >
          <span className="text-gray-500 text-sm">↓ Keep Scrolling ↓</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

