import { motion, useInView } from "framer-motion";
import { Brush, Code2, Database, Server } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    level: 88,
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    level: 76,
    skills: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    level: 72,
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    icon: Brush,
    title: "Design",
    level: 80,
    skills: ["Figma", "Adobe XD", "Canva", "Responsive UI"],
  },
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem solving",
  "Time management",
  "Adaptability",
  "Creativity",
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="site-section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header center"
        >
          <p className="eyebrow">Skills</p>
          <h2 className="section-heading">Tools I use to build products.</h2>
          <p className="section-copy">
            A practical stack for creating responsive interfaces, server logic,
            databases, and design systems that feel consistent.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.06 }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-sm hover:border-cyan-500/30 transition-colors duration-300"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
                </div>
                <span className="text-sm font-black text-cyan-200">{category.level}%</span>
              </div>
              <div className="skill-meter">
                <span style={{ width: `${category.level}%` }} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="tech-badge"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
