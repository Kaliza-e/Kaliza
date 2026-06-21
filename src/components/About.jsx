import { motion } from 'framer-motion';

const strengths = [
  'Problem Solving',
  'UI/UX Design',
  'Frontend Engineering',
  'Backend Development',
  'Database Design',
  'Team Collaboration',
  'Product Thinking',
];

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="glass" style={{ padding: '40px', marginTop: '40px', textAlign: 'left' }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: 1.8 }}>
              I am <strong>Esther Kaliza</strong>, a passionate software developer focused on building modern web applications and solving real-world challenges through technology.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px', lineHeight: 1.8 }}>
              My expertise spans frontend development, backend systems, databases, UI/UX design, and software architecture. I enjoy transforming ideas into products that create meaningful impact.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.8 }}>
              As the Founder of <strong>IwaCuTech</strong>, I continuously explore innovative solutions in AI, IoT, education, water management, and digital transformation.
            </p>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--accent-bronze)' }}>Key Strengths</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {strengths.map((strength, index) => (
                <motion.span
                  key={strength}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(176, 186, 153, 0.2)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    border: '1px solid rgba(176, 186, 153, 0.4)'
                  }}
                >
                  {strength}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
