import { motion } from 'framer-motion';

const stats = [
  { value: '6+', label: 'Major Projects Built' },
  { value: 'Full-Stack', label: 'Development Experience' },
  { value: 'AI & IoT', label: 'Solution Development' },
  { value: '100%', label: 'Continuous Learning Mindset' },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass"
              style={{ padding: '32px 24px', textAlign: 'center', background: 'var(--dark-brown)', color: 'var(--bg-primary)' }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'var(--font-display)', color: 'var(--accent-bronze)', marginBottom: '8px', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.05em', opacity: 0.9 }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
