import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Professional Experience</h2>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))', opacity: 0.3 }} />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', paddingLeft: '60px', marginBottom: '40px' }}
          >
            {/* Timeline Dot */}
            <div style={{ position: 'absolute', left: '13px', top: '6px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-primary)', border: '4px solid var(--accent-primary)', boxShadow: '0 0 12px rgba(6, 182, 212, 0.5)' }} />

            <div className="glass" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px' }}>Software Development Projects</h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '24px', fontSize: '0.95rem' }}>Ongoing</p>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Built multiple full-stack applications from concept to deployment.',
                  'Developed responsive user interfaces.',
                  'Implemented scalable backend APIs.',
                  'Designed and managed relational and NoSQL databases.',
                  'Contributed to AI and IoT solutions addressing real-world challenges.'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: '16px', display: 'flex', gap: '16px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--accent-primary)' }}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
