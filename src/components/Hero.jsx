import { motion } from "framer-motion";
import { ArrowRight, Palette } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:kalizaesther5@gmail.com", label: "Email" },
];

const stack = [
  { label: "Frontend", value: "React, Tailwind, TS", color: "text-purple-300" },
  { label: "Backend", value: "Node, Python, SQL", color: "text-indigo-300" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-0 h-80 w-80 rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-5 lg:grid-cols-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="hero-panel flex flex-col items-center justify-center text-center lg:col-span-4"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500 opacity-30 blur-2xl" />
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-white/10 ring-8 ring-white/5 sm:h-40 sm:w-40">
              <img
                src="/esther.png"
                alt="KALIZA Esther"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="mt-6 space-y-1">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              KALIZA Esther
            </h2>
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-300">
              Junior Software Developer
            </p>
          </div>

          <div className="mt-5 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/80 transition-colors hover:bg-white/10 hover:text-purple-300"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero-panel flex flex-col justify-center lg:col-span-8"
        >
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">
              Open for projects
            </span>
          </div>

          <h1 className="mt-5 font-display text-5xl font-extrabold leading-none sm:text-6xl lg:text-6xl xl:text-7xl">
            Designing{" "}
            <span className="bg-gradient-to-br from-purple-400 via-indigo-400 to-pink-400 bg-clip-text italic text-transparent">
              seamless
            </span>{" "}
            digital experiences.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I bridge the gap between complex backend logic and pixel-perfect
            frontend aesthetics, building high-performance, human-centered web
            applications.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition-all hover:-translate-y-0.5 hover:shadow-purple-700/30"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hero-panel min-h-48 lg:col-span-4"
        >
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Primary Stack
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 rounded-lg border border-white/10 bg-white/5 p-4"
              >
                <span className={`text-xs font-bold ${item.color}`}>
                  {item.label}
                </span>
                <span className="text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hero-panel group min-h-48 overflow-hidden lg:col-span-4"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              UI / UX Design
            </h3>
            <div className="rounded-lg bg-white/5 p-2">
              <Palette size={16} className="text-purple-300" />
            </div>
          </div>
          <div className="flex h-28 items-end gap-2">
            <div className="h-[42%] flex-1 rounded-t-lg bg-white/5 transition-all group-hover:bg-purple-500/20" />
            <div className="h-[72%] flex-1 rounded-t-lg bg-white/10 transition-all group-hover:bg-purple-500/40" />
            <div className="h-[54%] flex-1 rounded-t-lg bg-white/5 transition-all group-hover:bg-purple-500/20" />
            <div className="h-[90%] flex-1 rounded-t-lg bg-white/10 transition-all group-hover:bg-purple-500/40" />
          </div>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ y: -4 }}
          className="flex min-h-48 cursor-pointer flex-col justify-between rounded-lg border border-white/20 bg-gradient-to-br from-purple-600 to-indigo-700 p-7 shadow-[0_0_40px_rgba(147,51,234,0.3)] lg:col-span-4"
        >
          <div className="flex justify-end">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
              <ArrowRight className="h-5 w-5 text-white" />
            </div>
          </div>
          <div>
            <h4 className="font-display text-2xl font-bold text-white">
              Let's Chat
            </h4>
            <p className="text-sm text-white/75">Start a new project together</p>
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
