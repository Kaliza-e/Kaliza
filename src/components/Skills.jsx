import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
    ],
    accent: "text-purple-300",
    bar: "from-purple-500 to-indigo-500",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express.js", level: 65 },
      { name: "Python", level: 60 },
    ],
    accent: "text-indigo-300",
    bar: "from-indigo-500 to-purple-500",
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 65 },
      { name: "PostgreSQL", level: 60 },
      { name: "MySQL", level: 70 },
    ],
    accent: "text-fuchsia-300",
    bar: "from-fuchsia-500 to-purple-500",
  },
  {
    title: "Design Tools",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 70 },
      { name: "Canva", level: 90 },
    ],
    accent: "text-purple-300",
    bar: "from-purple-400 to-pink-500",
  },
];

const softSkills = [
  { name: "Communication", icon: "💬" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Time Management", icon: "⏰" },
  { name: "Adaptability", icon: "🔄" },
  { name: "Creativity", icon: "🎨" },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {/* Section label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl"
          >
            <Sparkles className="w-3 h-3 text-purple-300" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">Skills</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-6">
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-400">build with.</span>
          </motion.h2>

          {/* Skill widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, ci) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-sm font-bold uppercase tracking-widest ${category.accent}`}>
                    {category.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {category.skills.length} skills
                  </span>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium text-sm">{skill.name}</span>
                        <span className={`text-xs font-bold ${category.accent}`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: ci * 0.1 + si * 0.08, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft skills widget */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl"
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2 text-sm text-foreground/80 hover:border-purple-500/40 hover:text-purple-200 transition-colors"
                >
                  <span>{s.icon}</span>
                  <span className="font-medium">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;