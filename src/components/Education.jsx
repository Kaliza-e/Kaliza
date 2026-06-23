import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Code, Zap } from "lucide-react";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Text */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Let me introduce myself
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-display">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                I'm <span className="text-foreground font-semibold">KALIZA Esther</span>, a passionate junior software developer 
                currently studying at <span className="text-primary font-medium">Rwanda Coding Academy</span>. My journey in tech 
                is driven by curiosity and a desire to create impactful solutions.
              </p>
              <p>
                With skills spanning frontend development, backend engineering, and UI/UX design, 
                I bring a holistic approach to every project. I believe in writing clean, 
                maintainable code that not only works but also provides exceptional user experiences.
              </p>
              <p>
                My goal is to leverage technology to solve real-world problems, especially 
                in my community. I'm constantly learning and growing, embracing new challenges 
                that push me to become a better developer.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {[
                { icon: Code, label: "Full Stack", value: "Developer", color: "from-primary to-violet-400" },
                { icon: GraduationCap, label: "RCA", value: "Student", color: "from-accent to-fuchsia-400" },
                { icon: MapPin, label: "Rwanda", value: "Based", color: "from-cyan-400 to-blue-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="interactive-card p-5 text-center group"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-foreground font-bold text-lg">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Education Timeline */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display">Education Journey</h3>
            </div>

            <div className="space-y-6 relative">
              {/* Timeline Line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-cyan-400" />

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="relative pl-14"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`absolute left-2.5 top-6 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                      edu.current
                        ? "bg-primary border-primary animate-pulse-glow"
                        : "bg-background border-muted hover:border-primary"
                    }`}
                  />

                  <div className={`interactive-card p-6 ${edu.current ? "gradient-border" : ""}`}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-foreground text-lg">{edu.school}</h4>
                      {edu.current && (
                        <span className="flex items-center gap-1 text-xs bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-3 py-1.5 rounded-full">
                          <Zap size={12} />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{edu.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-accent" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
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
