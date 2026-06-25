import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, MapPin, Sparkles } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:kalizaesther5@gmail.com", label: "Email" },
];

const highlights = [
  "React interfaces",
  "Backend APIs",
  "UI/UX design",
  "Database systems",
];

const metrics = [
  { value: "6+", label: "Projects" },
  { value: "Full-stack", label: "Focus" },
  { value: "RCA", label: "Training" },
];

const Hero = () => {
  return (
    <section
  id="home"
  className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-20">
      <div className="absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="section-container relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Available for projects</p>
          <h1 className="display-title text-balance">
         KALIZA Esther, junior software developer.
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-cyan-100/90">
            I build clean web interfaces, practical backend systems, and useful
            digital products for real-world problems.
          </p>
          <p className="section-copy max-w-2xl">
            A Rwanda Coding Academy developer combining React, APIs, databases,
            and UI thinking to create polished, responsive experiences.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#portfolio" className="primary-link">
              View Portfolio <ArrowRight size={18} />
            </a>
            <a href="#contact" className="secondary-link">
              <Mail size={18} /> Start a Project
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="font-display text-2xl font-black gradient-text">{metric.value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-semibold text-muted-foreground"
              >
                <CheckCircle2 size={15} className="text-cyan-300" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="surface-card overflow-hidden p-4 sm:p-5"
        >
          <div className="mb-4 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.035] px-4 py-3">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-cyan-100">
              <Sparkles size={16} className="text-cyan-300" /> Portfolio Snapshot
            </span>
            <span className="rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-bold text-emerald-200">
              Open to work
            </span>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
            <img
              src="/esther.png"
              alt="KALIZA Esther"
              className="h-[360px] w-full object-cover object-top sm:h-[430px]"
            />
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold">KALIZA Esther</h2>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Junior Software Developer
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-cyan-300" /> Rwanda
              </p>
            </div>

            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-300/35 hover:text-cyan-300"
                >
                  <social.icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
