import { motion, useInView } from "framer-motion";
import { Code, GraduationCap, HeartHandshake, MapPin } from "lucide-react";
import { useRef } from "react";

const stats = [
  { icon: Code, label: "Focus", value: "Full-stack development" },
  { icon: GraduationCap, label: "Education", value: "Rwanda Coding Academy" },
  { icon: MapPin, label: "Location", value: "Rwanda" },
];

const principles = [
  "Readable code",
  "Human-centered layouts",
  "Mobile-first thinking",
  "Reliable delivery",
];

const education = [
  {
    school: "Rwanda Coding Academy",
    period: "2024 - Present",
    description: "Software Development and Embedded Systems",
    location: "Rwanda",
  },
  {
    school: "Lycee Notre Dame de Citeaux",
    period: "2021 - 2024",
    description: "Ordinary Level Education",
    location: "Rwanda",
  },
  {
    school: "Espoir Primary School",
    period: "2014 - 2021",
    description: "Primary Education",
    location: "Rwamagana",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="site-section">
      <div className="section-container" ref={ref}>

        {/* ── Top: text + stats side by side, vertically centered ── */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left: heading + description + how I work */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <p className="eyebrow">About</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display leading-tight text-balance mt-3">
                I turn ideas into reliable, readable web products.
              </h2>
            </div>
            <p className="text-sm leading-7 text-muted-foreground">
              I am a passionate junior software developer at Rwanda Coding
              Academy. I enjoy building clean interfaces, thoughtful user flows,
              and backend systems that support real-world use.
            </p>

            <div className="mt-6 pt-6">
              <div className="mb-3 flex items-center gap-3 text-cyan-100">
                <HeartHandshake size={18} className="text-cyan-300" />
                <span className="font-display text-base font-bold">How I work</span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">
                I care about products that are clear to use, simple to maintain,
                and polished enough to earn trust from the first interaction.
              </p>
            </div>
          </motion.div>

          {/* Right: stat cards stacked vertically so they don't float weirdly */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card flex items-center gap-5 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  <stat.icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="font-semibold text-white">{stat.value}</p>
                </div>
              </div>
            ))}

            {/* Principles badges sit naturally under the stats */}
            <div className="flex flex-wrap gap-3 pt-3">
              {principles.map((principle) => (
                <span key={principle} className="tech-badge">
                  {principle}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: education cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.14, duration: 0.5 }}
          className="mt-14"
        >
          <h3 className="mb-8 font-display text-2xl font-bold">
            Education Journey
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((item) => (
              <article key={item.school} className="glass-card p-6 sm:p-8 flex flex-col h-full">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  {item.period}
                </p>
                <h4 className="mt-4 text-xl font-bold text-white leading-tight">{item.school}</h4>
                <p className="mt-3 text-sm leading-6 text-muted-foreground flex-grow">
                  {item.description}
                </p>
                <div className="mt-6 pt-4">
                  <p className="flex items-center gap-2 text-sm font-medium text-white/70">
                    <MapPin size={16} className="text-cyan-400" /> {item.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;