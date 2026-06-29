import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink, Monitor } from "lucide-react";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AURA AI",
    description:
      "AI-powered platform for intelligent assistance, automation, and productivity workflows.",
    image: "/project_aura.png",
    tech: ["React", "Node.js", "AI APIs", "PostgreSQL"],
  },
  {
    title: "Terimbere Cooperative System",
    description:
      "A cooperative management platform for members, contributions, transactions, and reporting.",
    image: "/project_terimbere.png",
    tech: ["Spring Boot", "PostgreSQL", "React"],
  },
  {
    title: "Foodly",
    description:
      "Recipe discovery app for creating, browsing, and managing shared recipes.",
    image: "/project_foodly.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Musica",
    description:
      "Music streaming experience with library browsing and playback-focused user flows.",
    image: "/project_musica.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "IsokoSense",
    description:
      "IoT-powered water monitoring platform with dashboards and resource management tools.",
    image: "/project_isokosense.png",
    tech: ["React", "Spring Boot", "IoT"],
  },
  {
    title: "Movia",
    description:
      "Smart transport platform focused on booking, route management, and passenger experience.",
    image: "/project_movia.png",
    tech: ["React", "Spring Boot", "PostgreSQL"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="site-section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header"
        >
          <p className="eyebrow">Portfolio</p>
          <h2 className="section-heading">Selected projects and product work.</h2>
          <p className="section-copy">
            A focused collection of web applications that show frontend,
            backend, database, AI, and IoT work.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mt-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="project-card glass-card group overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden bg-white/[0.02] shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Monitor className="h-12 w-12 text-purple-300" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d]/80 via-[#05070d]/10 to-transparent" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-4 min-h-[5rem] text-sm leading-relaxed text-muted-foreground flex-grow">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-[0.7rem] uppercase tracking-wider font-bold bg-cyan-400/10 text-cyan-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex gap-5 pt-5 text-sm font-semibold">
                  <a href="#" className="flex items-center gap-2 text-cyan-400 transition hover:text-cyan-200">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-white/70 transition hover:text-white">
                    <FaGithub size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
