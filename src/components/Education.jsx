import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass"
          style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', borderLeft: '6px solid var(--accent-bronze)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--dark-brown)' }}>Rwanda Coding Academy</h3>
            <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-bronze)' }}>Software Programming and Embedded Systems</p>
          </div>

          <h4 style={{ fontSize: '1.1rem', color: 'var(--dark-brown)', marginBottom: '16px', fontWeight: 700 }}>Relevant Coursework:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {[
              'Software Engineering',
              'Web Development',
              'Database Systems',
              'Computer Networks',
              'Data Structures & Algorithms'
            ].map((course) => (
              <span key={course} style={{
                padding: '6px 14px',
                background: 'rgba(176, 186, 153, 0.25)',
                border: '1px solid rgba(176, 186, 153, 0.5)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--dark-brown)',
              }}>
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
