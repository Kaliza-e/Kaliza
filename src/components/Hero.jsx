import { motion } from "framer-motion";
import {Palette,ArrowRight} from 'lucide-react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";



const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-28 pb-16"
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 relative z-10"
      >
        {/* Profile & Brand Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col items-center text-center space-y-6 shadow-2xl"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-30" />
            <div className="relative w-40 h-40 rounded-full border-2 border-white/10 overflow-hidden ring-8 ring-white/5">
              <img
                src="/esther.png"
                alt="KALIZA Esther"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="space-y-1">
            <h2 className="text-4xl font-extrabold tracking-tight font-display">
              KALIZA Esther
            </h2>
            <p className="text-purple-400 font-semibold tracking-wide uppercase text-xs">
              Junior Software Developer
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { icon: FaGithub, href: "https://github.com", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: FaEnvelope, href: "mailto:kalizaesther5@gmail.com", label: "Email" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/80 hover:bg-white/10 hover:text-purple-300 transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Hero Content Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 lg:col-span-8 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col justify-center space-y-6 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">
              Open for projects
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold font-display leading-[0.9] tracking-tighter">
            Designing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-indigo-400 to-pink-400 italic">
              seamless
            </span>{" "}
            digital experiences.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I bridge the gap between complex backend logic and pixel-perfect
            frontend aesthetics — building high-performance, human-centered web
            applications.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm tracking-wide hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-foreground font-semibold text-sm tracking-wide hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Stack Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 lg:col-span-5 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl flex flex-col justify-between"
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
            Primary Stack
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
              <span className="text-xs text-purple-400 font-bold">Frontend</span>
              <span className="text-sm font-medium">React, Tailwind, TS</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-2">
              <span className="text-xs text-indigo-400 font-bold">Backend</span>
              <span className="text-sm font-medium">Node, Python, SQL</span>
            </div>
          </div>
        </motion.div>

        {/* UI/UX Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 lg:col-span-4 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl overflow-hidden group"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              UI / UX Design
            </h3>
            <div className="p-2 rounded-lg bg-white/5">
              <Palette size={16} className="text-purple-300" />
            </div>
          </div>
          <div className="h-24 flex items-end gap-2">
            <div className="flex-1 bg-white/5 rounded-t-xl group-hover:bg-purple-500/20 transition-all h-[40%]" />
            <div className="flex-1 bg-white/10 rounded-t-xl group-hover:bg-purple-500/40 transition-all h-[70%]" />
            <div className="flex-1 bg-white/5 rounded-t-xl group-hover:bg-purple-500/20 transition-all h-[50%]" />
            <div className="flex-1 bg-white/10 rounded-t-xl group-hover:bg-purple-500/40 transition-all h-[90%]" />
          </div>
        </motion.div>

        {/* Contact CTA Widget */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 0.98 }}
          className="md:col-span-4 lg:col-span-3 p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-600 to-indigo-700 border border-white/20 shadow-[0_0_40px_rgba(147,51,234,0.3)] flex flex-col justify-between cursor-pointer min-h-[180px]"
        >
          <div className="flex justify-end">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-bold font-display text-white">Let's Chat</h4>
            <p className="text-white/70 text-sm">Start a new project together</p>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;