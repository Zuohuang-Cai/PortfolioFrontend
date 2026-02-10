/**
 * Skills data - Centralized data for all skill components
 */

export interface SkillData {
  title: string;
  fullTitle: string;
  icon: string; // Emoji or icon identifier
  description: string;
  technologies: string[];
  color: string; // Tailwind gradient classes
  glowColor: string; // CSS rgba color for glow effects
}

export const programmingSkills: SkillData[] = [
  {
    title: "Frontend",
    fullTitle: "Frontend Development",
    icon: "🎨",
    description: "Building beautiful, responsive user interfaces",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "HERO UI"],
    color: "from-blue-500 to-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.5)"
  },
  {
    title: "Backend",
    fullTitle: "Backend Development",
    icon: "⚙️",
    description: "Creating robust and scalable server solutions",
    technologies: ["Node.js", "C#", "Java", ".Net", "Springboot", "Express.js", "ORM"],
    color: "from-green-500 to-emerald-400",
    glowColor: "rgba(34, 197, 94, 0.5)"
  },
  {
    title: "Database",
    fullTitle: "Database Design",
    icon: "🗄️",
    description: "Designing efficient data structures and queries",
    technologies: ["PostgreSQL", "Redis", "MySQL"],
    color: "from-purple-500 to-pink-400",
    glowColor: "rgba(168, 85, 247, 0.5)"
  },
  {
    title: "DevOps",
    fullTitle: "DevOps & Cloud",
    icon: "🚀",
    description: "Deploying and managing cloud infrastructure",
    technologies: ["Docker", "Azure", "CI/CD"],
    color: "from-orange-500 to-yellow-400",
    glowColor: "rgba(249, 115, 22, 0.5)"
  },
  {
    title: "Mobile",
    fullTitle: "Mobile Development",
    icon: "📱",
    description: "Creating cross-platform mobile applications",
    technologies: ["React Native", "Native Wind"],
    color: "from-red-500 to-rose-400",
    glowColor: "rgba(236, 72, 153, 0.5)"
  }
];


export default programmingSkills;
