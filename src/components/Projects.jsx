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
    <section id="portfolio" className="site-section border-y border-white/5">
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="bg-[#111827] border border-white/10 rounded-2xl project-card group overflow-hidden shadow-sm hover:shadow-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-white/[0.035]">
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

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-cyan-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="mt-3 min-h-20 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-cyan-500/20 bg-cyan-950/30 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition group-hover:border-cyan-400/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4 border-t border-white/10 pt-5 text-sm font-semibold">
                  <a href="#" className="flex items-center gap-2 text-cyan-300 transition hover:text-cyan-100">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground">
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
