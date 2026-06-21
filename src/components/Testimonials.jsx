import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            What people say about working with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '64px 32px',
            textAlign: 'center',
            borderStyle: 'dashed',
            borderWidth: '2px',
            borderColor: 'rgba(157, 102, 56, 0.4)'
          }}
        >
          <p style={{ fontSize: '1.2rem', color: 'rgba(78, 34, 15, 0.6)', fontStyle: 'italic', marginBottom: '24px' }}>
            "This space is reserved for future recommendations from mentors, instructors, clients, or collaborators."
          </p>
          <div style={{ width: '40px', height: '4px', background: 'var(--surface-secondary)', margin: '0 auto' }} />
        </motion.div>
      </div>
    </section>
  );
}
