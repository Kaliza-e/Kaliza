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
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 className="section-title">Professional Experience</h2>
        </motion.div>

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'var(--accent-bronze)', opacity: 0.3 }} />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', paddingLeft: '60px', marginBottom: '40px' }}
          >
            {/* Timeline Dot */}
            <div style={{ position: 'absolute', left: '13px', top: '6px', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-primary)', border: '4px solid var(--accent-bronze)' }} />

            <div className="glass" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-brown)', marginBottom: '8px' }}>Software Development Projects</h3>
              <p style={{ color: 'var(--accent-bronze)', fontWeight: 600, marginBottom: '20px', fontSize: '0.9rem' }}>Ongoing</p>
              
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Built multiple full-stack applications from concept to deployment.',
                  'Developed responsive user interfaces.',
                  'Implemented scalable backend APIs.',
                  'Designed and managed relational and NoSQL databases.',
                  'Contributed to AI and IoT solutions addressing real-world challenges.'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px', display: 'flex', gap: '12px', color: 'rgba(78, 34, 15, 0.8)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--accent-bronze)' }}>▹</span>
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
