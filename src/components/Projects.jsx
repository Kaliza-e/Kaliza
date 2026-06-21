import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'AURA AI',
    description: 'AI-powered platform providing intelligent assistance, automation, and productivity features.',
    image: '/project_aura.png',
    tech: ['React', 'Node.js', 'AI APIs', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Terimbere Cooperative Management System',
    description: 'A comprehensive digital platform for cooperative management, member contributions, transactions, financial records, and reporting.',
    image: '/project_terimbere.png',
    tech: ['Spring Boot', 'PostgreSQL', 'React'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Foodly',
    description: 'Recipe sharing and discovery platform allowing users to create, browse, and manage recipes.',
    image: null,
    tech: ['React', 'Node.js', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'IsokoSense',
    description: 'IoT-powered water monitoring and management platform with data visualization and resource management capabilities.',
    image: null,
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'IoT Integration'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'NoiFix',
    description: 'Intelligent noise detection and monitoring system using smart automation and analytics.',
    image: null,
    tech: ['React', 'Node.js', 'AI Analytics'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Movia',
    description: 'Smart transport platform focused on booking, route management, and passenger experience optimization.',
    image: null,
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A selection of applications and solutions I've built.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-strong)' }}
              className="glass"
              style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
            >
              {/* Project Image */}
              <div style={{
                height: '200px',
                background: project.image ? `url(${project.image}) center/cover no-repeat` : 'linear-gradient(135deg, var(--surface-secondary), var(--dark-brown))',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {!project.image && (
                  <span style={{ color: 'var(--bg-primary)', opacity: 0.8, fontSize: '1.2rem', fontWeight: 600 }}>{project.title}</span>
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(78, 34, 15, 0.1)' }} />
              </div>

              {/* Project Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--dark-brown)', marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ color: 'rgba(78, 34, 15, 0.7)', fontSize: '0.95rem', marginBottom: '20px', flexGrow: 1, lineHeight: 1.6 }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      background: 'rgba(176, 186, 153, 0.2)',
                      border: '1px solid rgba(176, 186, 153, 0.4)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--dark-brown)',
                      fontWeight: 600,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid rgba(78, 34, 15, 0.1)', paddingTop: '16px' }}>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-bronze)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--dark-brown)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
                    <FiGithub /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
