import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, GraduationCap, Globe } from "lucide-react";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="site-section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header center"
        >
          <span className="eyebrow">About Me</span>
          <h2 className="section-heading">Crafting Digital Experiences</h2>
          <p className="section-copy">
            Passionate about building products that are both beautiful and functional.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Hello, I'm Esther</h3>
              <p className="text-[#a0a0b0] leading-relaxed mb-4">
                I'm a dedicated software developer with a passion for creating elegant, user-centered applications.
                My approach blends technical excellence with thoughtful design to deliver solutions that truly work.
              </p>
              <p className="text-[#a0a0b0] leading-relaxed">
                Currently focused on full-stack development, I enjoy working across the entire stack to bring ideas to life.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap size={18} className="text-[#818cf8]" />
                  <span className="text-sm text-[#a0a0b0] uppercase tracking-wider font-medium">Education</span>
                </div>
                <p className="text-lg font-semibold">Rwanda Coding Academy</p>
              </div>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={18} className="text-[#818cf8]" />
                  <span className="text-sm text-[#a0a0b0] uppercase tracking-wider font-medium">Location</span>
                </div>
                <p className="text-lg font-semibold">Kigali, Rwanda</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src="/esther1.png"
                  alt="Esther working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#818cf8]/15 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
