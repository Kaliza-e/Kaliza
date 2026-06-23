import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  Monitor,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "AURA AI",
    description:
      "AI-powered platform providing intelligent assistance, automation, and productivity features.",
    image: "/project_aura.png",
    tech: ["React", "Node.js", "AI APIs", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Terimbere Cooperative Management System",
    description:
      "A comprehensive digital platform for cooperative management, member contributions, transactions, financial records, and reporting.",
    image: "/project_terimbere.png",
    tech: ["Spring Boot", "PostgreSQL", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Foodly",
    description:
      "Recipe sharing and discovery platform allowing users to create, browse, and manage recipes.",
    image: "/project_foodly.png",
    tech: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Musica",
    description:
      "Music streaming platform allowing users to stream and manage music.",
    image: "/project_musica.png",
    tech: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "IsokoSense",
    description:
      "IoT-powered water monitoring and management platform with data visualization and resource management capabilities.",
    image: "/project_isokosense.png",
    tech: ["React", "Spring Boot", "PostgreSQL", "IoT Integration"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NoiFix",
    description:
      "Intelligent noise detection and monitoring system using smart automation and analytics.",
    image: null,
    tech: ["React", "Node.js", "AI Analytics"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Movia",
    description:
      "Smart transport platform focused on booking, route management, and passenger experience optimization.",
    image: "/project_movia.png",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 relative"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">
                Work
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-400">
                Projects.
              </span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of applications and solutions I've built.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group rounded-[2rem] overflow-hidden bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl hover:border-purple-500/30 transition-all flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-700/20 flex items-center justify-center">
                      <Monitor className="w-14 h-14 text-purple-300" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40" />

                  <div className="absolute top-5 right-5 flex gap-2 z-10">
                    <a
                      href={project.githubUrl}
                      className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-purple-300 transition-colors"
                    >
                      <FaGithub size={16} />
                    </a>

                    <a
                      href={project.demoUrl}
                      className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 text-purple-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>

                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex gap-6 pt-6 mt-6 border-t border-white/10">
                    <a
                      href={project.demoUrl}
                      className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 hover:text-purple-300 transition-colors"
                    >
                      <FaGithub size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Widget */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-600/20 to-indigo-700/20 border border-purple-500/20 backdrop-blur-3xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span
                  className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                />
                <span
                  className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                />
              </div>

              <p className="font-medium">
                More projects shipping soon.
              </p>
            </div>

            <ArrowUpRight className="w-5 h-5 text-purple-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
