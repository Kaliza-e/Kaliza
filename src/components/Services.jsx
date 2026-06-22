import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Layout, Globe, Smartphone, Server, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Code, title: "Frontend Development", description: "Responsive, interactive UIs with React, TypeScript, and clean semantic HTML/CSS." },
  { icon: Palette, title: "UI Design", description: "Polished interfaces with strong typography, color, and visual rhythm." },
  { icon: Layout, title: "UX Design", description: "User-centered flows, wireframes, and prototypes that feel obvious." },
  { icon: Globe, title: "Web Development", description: "Full-cycle web work — from concept to deployment, accessible and fast." },
  { icon: Smartphone, title: "Mobile-Ready", description: "Responsive applications that look right across every device." },
  { icon: Server, title: "Backend Development", description: "Solid server-side foundations with Node.js, Express, and databases." },
];

const Services = () => {
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
    <section id="services" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">Services</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold font-display tracking-tight">
            Things I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-400">help with.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group p-7 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl hover:border-purple-500/30 transition-colors flex flex-col gap-4 min-h-[220px]"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-purple-300" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-300 transition-colors" />
                </div>
                <h3 className="text-lg font-bold font-display">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;