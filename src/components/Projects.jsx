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
    demo: "#",
    github: "#",
  },
  {
    title: "Terimbere Cooperative System",
    description:
      "A cooperative management platform for members, contributions, transactions and reporting.",
    image: "/project_terimbere.png",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "Foodly",
    description:
      "Recipe discovery platform for creating, browsing and managing recipes.",
    image: "/project_foodly.png",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Musica",
    description:
      "Modern music streaming experience with playlists, libraries and playback.",
    image: "/project_musica.png",
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "IsokoSense",
    description:
      "IoT-powered water monitoring platform featuring dashboards and analytics.",
    image: "/project_isokosense.png",
    tech: ["React", "Spring Boot", "IoT"],
    demo: "#",
    github: "#",
  },
  {
    title: "Movia",
    description:
      "Smart transport platform for booking, routing and passenger management.",
    image: "/project_movia.png",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <section id="portfolio" className="site-section">

            <div
                ref={ref}
                className="section-container"
            >

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="section-header"
                >
                    <p className="eyebrow">Portfolio</p>

                    <h2 className="section-heading">
                        Selected Projects
                    </h2>

                    <p className="section-copy">
                        A collection of products demonstrating frontend,
                        backend, databases, AI and IoT engineering.
                    </p>

                </motion.div>

                <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                    {projects.map((project, index) => (

                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: .6,
                                delay: index * .08,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                            className="
                            group
                            flex
                            h-full
                            min-h-[650px]
                            flex-col
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/[0.03]
                            backdrop-blur-xl
                            transition-all
                            duration-500
                            hover:border-cyan-400/40
                            hover:shadow-[0_25px_60px_rgba(34,211,238,.15)]
                        "
                        >

                            {/* IMAGE */}

                            <div className="overflow-hidden">

                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="
                                        aspect-video
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        group-hover:scale-105
                                    "
                                    />
                                ) : (
                                    <div className="aspect-video flex items-center justify-center bg-[#0b0f19]">
                                        <Monitor className="h-12 w-12 text-cyan-300" />
                                    </div>
                                )}

                            </div>

                            {/* CONTENT */}

                            <div className="flex flex-1 flex-col p-8">

                                <div className="flex items-start justify-between gap-4">

                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        {project.title}
                                    </h3>

                                    <ArrowUpRight
                                        className="
                                        mt-1
                                        h-5
                                        w-5
                                        text-cyan-400
                                        transition-transform
                                        duration-300
                                        group-hover:translate-x-1
                                        group-hover:-translate-y-1
                                    "
                                    />

                                </div>

                                <p className="mt-6 flex-1 text-[15px] leading-7 text-white/70">
                                    {project.description}
                                </p>

                                {/* TECHNOLOGIES */}

                                <div className="mt-8 flex flex-wrap gap-2">

                                    {project.tech.map((tech) => (

                                        <span
                                            key={tech}
                                            className="
                                            rounded-full
                                            border
                                            border-cyan-400/20
                                            bg-cyan-400/10
                                            px-4
                                            py-2
                                            text-xs
                                            font-semibold
                                            tracking-wide
                                            text-cyan-300
                                        "
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                {/* FOOTER */}

                                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">

                                    <a
                                        href={project.demo}
                                        className="
                                        flex
                                        items-center
                                        gap-2
                                        text-cyan-400
                                        transition
                                        hover:text-cyan-300
                                    "
                                    >
                                        <ExternalLink size={17} />
                                        Demo
                                    </a>

                                    <a
                                        href={project.github}
                                        className="
                                        flex
                                        items-center
                                        gap-2
                                        text-white/70
                                        transition
                                        hover:text-white
                                    "
                                    >
                                        <FaGithub size={17} />
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