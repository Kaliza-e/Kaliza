import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'React Router']
  },
  {
    title: 'Backend',
    skills: ['Java', 'Spring Boot', 'Node.js', 'Express.js', 'PHP']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'Postman', 'VS Code']
  },
  {
    title: 'Professional Skills',
    skills: ['REST API Development', 'Software Architecture', 'UI/UX Design', 'Agile Development', 'Problem Solving']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A comprehensive overview of my technical skills and tools.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass"
              style={{ padding: '32px', background: 'var(--surface-secondary)', color: 'var(--bg-primary)' }}
            >
              <h3 style={{ fontSize: '1.4rem', marginBottom: '20px', color: 'var(--dark-brown)', borderBottom: '2px solid rgba(78, 34, 15, 0.1)', paddingBottom: '12px' }}>
                {category.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {category.skills.map(skill => (
                  <li key={skill} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--dark-brown)', fontWeight: 500 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-bronze)' }}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
