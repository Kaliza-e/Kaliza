import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:kalizaesther5@gmail.com", label: "Email" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20"
    >
      {/* Vertical Grid Lines Background */}
      <div className="absolute inset-0 z-[-1] flex justify-between px-10 pointer-events-none opacity-20">
        <div className="w-[1px] h-full bg-white/20"></div>
        <div className="w-[1px] h-full bg-white/20"></div>
        <div className="w-[1px] h-full bg-white/20"></div>
        <div className="w-[1px] h-full bg-white/20"></div>
        <div className="w-[1px] h-full bg-white/20"></div>
      </div>

      <div className="section-container relative flex flex-col items-center text-center z-10">

        {/* Ring Light and Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 mb-10 flex items-center justify-center"
        >
          {/* Ring Light */}
          <div className="absolute inset-0 rounded-full border-[6px] border-white/80 shadow-[0_0_40px_rgba(255,255,255,0.4)] animate-[pulse-glow_4s_ease-in-out_infinite]"></div>

          {/* Image */}
          <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#05070d]">
            <img
              src="/esther.png"
              alt="KALIZA Esther"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-20 mix-blend-difference mt-[-80px]"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white">
            KALIZA<br />ESTHER
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col items-center"
        >
          <p className="max-w-xl text-sm sm:text-base font-medium leading-relaxed text-cyan-50/70 mb-8">
            A software developer crafting elegant interfaces, robust backend APIs, and immersive digital experiences. Based in Rwanda.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a href="#portfolio" className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-white hover:text-cyan-300 transition-colors">
              <span className="w-8 h-[1px] bg-white group-hover:bg-cyan-300 transition-colors"></span>
              View Work
            </a>

            <div className="flex shrink-0 gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  <social.icon size={20} />
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