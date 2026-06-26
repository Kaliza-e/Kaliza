import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Major projects built" },
  { value: "Full-stack", label: "Development practice" },
  { value: "AI & IoT", label: "Solution areas" },
  { value: "100%", label: "Learning mindset" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-14">
      <div className="section-container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-center shadow-sm"
            >
              <p className="font-display text-4xl font-black gradient-text">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
