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
    <section id="about" className="site-section border-t border-white/5">
      <div className="section-container" ref={ref}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-header"
          >
            <p className="eyebrow">About</p>
            <h2 className="section-heading text-balance">
              I turn ideas into reliable, readable web products.
            </h2>
            <p className="section-copy">
              I am a passionate junior software developer at Rwanda Coding
              Academy. I enjoy building clean interfaces, thoughtful user flows,
              and backend systems that support real-world use.
            </p>
            <div className="mt-7 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.055] p-5">
              <div className="mb-3 flex items-center gap-3 text-cyan-100">
                <HeartHandshake size={20} className="text-cyan-300" />
                <span className="font-display text-lg font-bold">How I work</span>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                I care about products that are clear to use, simple to maintain,
                and polished enough to earn trust from the first interaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-300/12 text-cyan-300">
                  <stat.icon size={20} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 font-semibold text-foreground">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.12, duration: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {principles.map((principle) => (
            <span key={principle} className="tech-badge">
              {principle}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.14, duration: 0.5 }}
          className="mt-12"
        >
          <h3 className="mb-5 font-display text-2xl font-bold">
            Education Journey
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {education.map((item) => (
              <article key={item.school} className="surface-card p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  {item.period}
                </p>
                <h4 className="mt-4 text-lg font-bold">{item.school}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={15} className="text-cyan-300" /> {item.location}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
