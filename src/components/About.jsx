import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code, Zap } from "lucide-react";
const education = [
  {
    school: "Rwanda Coding Academy",
    period: "2024 – Present",
    description: "Software Development & Embedded Systems",
    location: "Rwanda",
    current: true,
  },
  {
    school: "Lycee Notre Dame de Cîteaux",
    period: "2021 – 2024",
    description: "Ordinary Level Education",
    location: "Rwanda",
    current: false,
  },
  {
    school: "Espoir Primary School",
    period: "2014 – 2021",
    description: "Primary Education",
    location: "Rwamagana",
    current: false,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">About</span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4"
        >
          {/* Intro widget */}
          <motion.div
            variants={item}
            className="lg:col-span-7 p-8 lg:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-display leading-[0.95] tracking-tight">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-400">
                me.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">KALIZA Esther</span>, a passionate junior software developer at{" "}
                <span className="text-purple-300 font-medium">Rwanda Coding Academy</span>. My journey is driven by curiosity and a desire to build impactful tools.
              </p>
              <p>
                I combine frontend, backend, and UI/UX skills into a holistic craft — clean code that quietly powers thoughtful, human experiences.
              </p>
            </div>
          </motion.div>

          {/* Quick stat widgets */}
          <motion.div variants={item} className="lg:col-span-5 grid grid-cols-3 gap-4">
            {[
              { icon: Code, label: "Full Stack", value: "Dev" },
              { icon: GraduationCap, label: "RCA", value: "Student" },
              { icon: MapPin, label: "Rwanda", value: "Based" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-5 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col items-center justify-center text-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-purple-300" />
                </div>
                <p className="font-bold text-foreground text-sm">{s.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Education timeline widget */}
          <motion.div
            variants={item}
            className="lg:col-span-12 p-8 lg:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold font-display">Education Journey</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl bg-white/[0.03] border ${edu.current ? "border-purple-500/40" : "border-white/10"} flex flex-col gap-3`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{edu.period}</span>
                    {edu.current && (
                      <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-purple-500/15 text-purple-300 px-2 py-1 rounded-full border border-purple-500/20">
                        <Zap size={10} /> Now
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-foreground">{edu.school}</h4>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto">
                    <MapPin size={12} className="text-purple-400" /> {edu.location}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
