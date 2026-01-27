"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { Link } from "@heroui/link";

interface Project {
  title: string;
  description: string | ReactNode;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  types: string[];
}

const ProjectDescLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    className="text-purple-400 hover:text-pink-400 underline decoration-purple-400/50 hover:decoration-pink-400 underline-offset-2 transition-all duration-200 font-medium"
  >
    {children}
  </Link>
);

const projects: Project[] = [
  {
    types: ["solo"],
    title: "Portfolio Website",
    description: "A modern, animated personal portfolio built with Next.js, Framer Motion, and Tailwind CSS. Features smooth scrolling, 3D effects, and responsive design.",
    tags: ["Hero ui", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Zuohuang-Cai",
    demo: "/",
    image: "/Projects/portfolio.png",
    featured: true
  },
  {
    types: ["team", "client", "Internship"],
    title: "Kiosk Management System",
    image: "/Projects/kms.png",
    description: (
      <>
        A simple kiosk management system built with TypeScript, React, and Next.js, allowing kitchen staff to view
        orders and manage settings through the UI.
      </>
    ),
    tags: ["TypeScript", "React", "next.js", "Redux"]
  },
  {
    title: "kiosk",
    types: ["team", "client", "Internship"],
    description: (
      <>
        A kiosk ordering system developed during my internship at <ProjectDescLink
        href="https://povis.nl/">Povis</ProjectDescLink>, featuring a React Native (Expo) UI
      </>
    ),
    image: "/Projects/kiosk.png",
    tags: ["React Native", "Expo", "TypeScript", "Redux"]
  },
  {
    title: "Epos Manager",
    types: ["team", "client", "Internship"],
    description: (
      <>
        Backend management system for a POS platform developed during my internship at <ProjectDescLink
        href="https://povis.nl/">Povis</ProjectDescLink>, with contributions to
        selected features using Spring Boot and MySQL.
      </>
    ),
    image: "/Projects/epos.png",
    tags: ["Springboot", "Thymeleaf", "Mysql", "SpringSecurity", "SpringJDBC", "SpringJPA"]
  },
  {
    types: ["solo", "client"],
    title: "Inventory Management System",
    description: "A Inventory Management System (IMS) that streamlines product tracking, stock management, and order processing for businesses.",
    image: "/Projects/IMS.png",
    tags: ["TypeScript", "Supabase", "PostgreSQL", "Next.js"]
  },
  {
    types: ["team", "client"],
    featured: true,
    title: "Jouw Autisme Drive",
    description: (
      <>
        A professional Document management and streaming platform for{" "}
        <ProjectDescLink href="https://jouwautisme.nl/">Jouw Autisme</ProjectDescLink>.
      </>
    ),
    image: "/Projects/jouwArtismeDrive.png",
    tags: ["React", "C#", ".Net", "Next.js", "PostgreSQL"],
    demo: "https://mgo4o840840w4w8oscsoogcc.quixly.xyz/",
    github: "https://github.com/Zuohuang-Cai/Spectrumvisie-BE"
  },
  {
    types: ["solo", "school", "outdated"],
    title: "Binsta",
    image: "/Projects/Binsta.png",
    description: "a social media platform that allows users to share images and videos, follow other users, and engage with content through likes and comments.",
    tags: ["Springboot", "Thymeleaf", "Mysql", "SpringSecurity", "SpringJPA"],
    github: "https://github.com/Zuohuang-Cai/binsta/tree/main"
  },
  {
    types: ["team", "client", "outdated"],
    title: "Baby Groente Tas",
    description: (
      <>
        A modern product management automation platform developed for Stichting{" "}
        <ProjectDescLink href="https://www.babygroentetas.nl/">Baby Groente Tas</ProjectDescLink>.
      </>
    ),
    tags: ["React", "Node.js", "PostgreSQL", "Next.js"],
    demo: "https://baby-groente-tas.vercel.app/",
    github: "https://github.com/BabyGroenteTas/BabyGroenteTas-App"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${project.featured ? "md:col-span-2" : ""}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      whileHover={{ y: -10 }}
    >
      <div
        className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50">
        <div
          className={`w-full relative ${project.featured ? "h-96" : "h-42"} overflow-hidden bg-gradient-to-br from-purple-900/30 to-pink-900/30`}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-6xl opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                💻
              </motion.div>
            </div>
          )}
          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3"
          >
            {project.github && (
              <Link
                href={project.github}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-white/20 transition-colors"
              >
                GitHub
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                className="px-4 py-2 bg-purple-500/80 backdrop-blur-sm rounded-lg text-white text-sm hover:bg-purple-500 transition-colors"
              >
                Live Demo
              </Link>
            )}
          </motion.div>
          <div className="absolute top-3 right-3 flex gap-2">

            {/*{project.featured && (*/}
            {/*  <div*/}
            {/*    className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white"*/}
            {/*  >*/}
            {/*    Featured*/}
            {/*  </div>*/}
            {/*)}*/}

            {project.types.map((type, index) => (
              <div
                key={index}
                className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold text-white"
              >
                {type}
              </div>
            ))}
          </div>

        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300 border border-gray-600/50"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen w-full py-20 px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-purple-400 text-sm font-mono tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="https://github.com/Zuohuang-Cai"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all hover:scale-105"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
