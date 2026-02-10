import { ReactNode } from "react";
import { Link } from "@heroui/link";

export interface ProjectData {
  title: string;
  description: string | ReactNode;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  types: string[];
}

export const ProjectDescLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    className="text-purple-400 hover:text-pink-400 underline decoration-purple-400/50 hover:decoration-pink-400 underline-offset-2 transition-all duration-200 font-medium"
  >
    {children}
  </Link>
);

export const projects: ProjectData[] = [
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
    tags: ["React", "C#", ".Net", "Next.js", "PostgreSQL"]
  },
  {
    types: ["team", "school", "on progress"],
    title: "Speed Code",
    description: "An online collaborative coding platform where users can solve programming problems together and share their problem-solving approaches in real time.",
    tags: [".Net 9", "C#", "Postgres sql", "orm", "Judge0"],
    github: "https://github.com/Zuohuang-Cai/Speedcode-backend"
  },
  {
    types: ["team", "client"],
    title: "Baby Groente Tas",
    description: (
      <>
        A modern product management automation platform developed for Stichting{" "}
        <ProjectDescLink href="https://www.babygroentetas.nl/">Baby Groente Tas</ProjectDescLink>.
      </>
    ),
    tags: ["React", "Node.js", "PostgreSQL", "Next.js"]
  }
];

export default projects;
