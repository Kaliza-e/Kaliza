import { motion, useInView } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AURA AI",
    description: "AI-powered platform for intelligent assistance and productivity automation.",
    image: "/project_aura.png",
    tech: ["React", "Node.js", "AI APIs", "PostgreSQL"],
  },
  {
    title: "Terimbere Cooperative",
    description: "Management platform for cooperatives with contributions and reporting.",
    image: "/project_terimbere.png",
    tech: ["Spring Boot", "PostgreSQL", "React"],
  },
  {
    title: "Foodly",
    description: "Recipe discovery and sharing application for food enthusiasts.",
    image: "/project_foodly.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Musica",
    description: "Music streaming experience focused on user-centric interface.",
    image: "/project_musica.png",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "IsokoSense",
    description: "IoT-powered water monitoring platform with real-time dashboards.",
    image: "/project_isokosense.png",
    tech: ["React", "Spring Boot", "IoT"],
  },
  {
    title: "Movia",
    description: "Smart transport platform for booking and route management.",
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
          className="section-header center"
        >
          <span className="eyebrow">My Work</span>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-copy">
            A curated selection of projects that showcase my skills and passion for building great products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <ArrowUpRight size={18} className="text-[#818cf8] opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 group-hover:translate-y-0 group-hover:translate-x-1" />
                </div>
                <p className="text-[#a0a0b0] text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium text-[#818cf8] bg-[#818cf8]/10 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-[#a0a0b0] hover:text-[#818cf8] transition-colors">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-[#a0a0b0] hover:text-[#818cf8] transition-colors">
                    <FaGithub size={16} />
                    Code
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
