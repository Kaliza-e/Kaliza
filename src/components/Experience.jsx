import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    title: "Software Developer",
    period: "2023 - Present",
    description: "Building real-world applications and learning by doing.",
    highlights: [
      "Developed multiple full-stack applications from concept to deployment.",
      "Created responsive, user-friendly interfaces with clean design.",
      "Implemented backend APIs and database integrations.",
      "Worked with AI and IoT solutions for practical use cases.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="site-section">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="eyebrow">Experience</span>
            <h2 className="section-heading">My Journey</h2>
            <p className="section-copy">
              Learning through hands-on project experience and continuous improvement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold">{experiences[0].title}</h3>
              <p className="text-[#818cf8] text-sm font-medium mt-1">{experiences[0].period}</p>
              <p className="text-[#a0a0b0] text-sm mt-2">{experiences[0].description}</p>
            </div>
            <ul className="space-y-4">
              {experiences[0].highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#818cf8] shrink-0 mt-0.5" />
                  <span className="text-[#a0a0b0] leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
