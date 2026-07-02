import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-24"
    >
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#818cf8] animate-pulse" />
              <span className="text-xs font-medium text-[#818cf8]">
                Available for opportunities
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Hi, I'm <br />
                <span className="gradient-text">Kaliza Esther</span>
              </h1>
              <p className="text-lg sm:text-xl text-[#a0a0b0] max-w-xl leading-relaxed">
                Full-stack software developer building elegant, scalable applications with a focus on clean design and robust code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portfolio" className="btn-primary">
                View Portfolio
                <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#818cf8]/40 hover:bg-[#818cf8]/10 text-white/70 hover:text-[#818cf8] transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#818cf8]/40 hover:bg-[#818cf8]/10 text-white/70 hover:text-[#818cf8] transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kalizaesther5@gmail.com" className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-[#818cf8]/40 hover:bg-[#818cf8]/10 text-white/70 hover:text-[#818cf8] transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-[28px] overflow-hidden border border-white/10 bg-white/5">
                <img
                  src="/esther.png"
                  alt="Kaliza Esther"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#818cf8]/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#22d3ee]/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
