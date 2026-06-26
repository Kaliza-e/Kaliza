import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Built multiple full-stack applications from concept to deployment.",
  "Developed responsive interfaces for portfolio and product projects.",
  "Implemented backend APIs and connected applications to databases.",
  "Worked on AI and IoT solutions for practical real-world problems.",
];

export default function Experience() {
  return (
    <section id="experience" className="site-section border-y border-white/5">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-header"
          >
            <p className="eyebrow">Experience</p>
            <h2 className="section-heading">Project-based development practice.</h2>
            <p className="section-copy">
              My experience comes from building complete software projects,
              learning through delivery, and improving each implementation.
            </p>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-7 shadow-sm"
          >
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold">
                  Software Development Projects
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  Ongoing
                </p>
              </div>
            </div>
            <ul className="mt-6 space-y-4">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-muted-foreground"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
