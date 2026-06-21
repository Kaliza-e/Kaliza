import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const techBadges = [
  'React', 'JavaScript', 'Spring Boot', 'Node.js',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Tailwind CSS',
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:kalizaesther5@gmail.com', label: 'Email' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function Hero() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '90px',
      }}
    >
      {/* Background Gradient Orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176, 186, 153, 0.35) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-8%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(157, 102, 56, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          left: '40%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(176, 186, 153, 0.2) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
      </div>

      <div className="container" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '20px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                background: 'rgba(157, 102, 56, 0.1)',
                border: '1px solid rgba(157, 102, 56, 0.25)',
                borderRadius: '999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--accent-bronze)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                <span style={{
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: 'var(--accent-bronze)',
                  animation: 'pulse-ring 2s infinite',
                }} />
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                fontWeight: 800,
                color: 'var(--dark-brown)',
                lineHeight: 1.1,
                marginBottom: '20px',
                letterSpacing: '-0.02em',
              }}
            >
              Building Digital{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-bronze) 0%, var(--dark-brown) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Experiences
              </span>{' '}
              That Solve Real Problems
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '1.1rem',
                color: 'rgba(78, 34, 15, 0.7)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '520px',
              }}
            >
              Frontend Engineer, Full-Stack Developer, UI/UX Designer, and Technology Innovator passionate about creating scalable applications, intuitive user experiences, and impactful digital solutions.
            </motion.p>

            {/* Role Tags */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '36px',
              }}
            >
              {['Frontend Engineer', 'Full-Stack Dev', 'UI/UX Designer', 'Founder @ IwaCuTech'].map((role) => (
                <span key={role} style={{
                  padding: '6px 14px',
                  background: 'rgba(176, 186, 153, 0.25)',
                  border: '1px solid rgba(176, 186, 153, 0.5)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--dark-brown)',
                }}>
                  {role}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}
            >
              <motion.button
                id="hero-view-projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#projects')}
                className="btn-primary"
              >
                View My Projects
                <HiArrowDown size={16} />
              </motion.button>

              <motion.a
                id="hero-download-resume"
                href="#"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                <HiDownload size={16} />
                Download Resume
              </motion.a>

              <motion.button
                id="hero-contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('#contact')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  background: 'transparent',
                  color: 'var(--dark-brown)',
                  border: '2px solid rgba(176, 186, 153, 0.5)',
                  borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.target.style.borderColor = 'var(--accent-bronze)'; }}
                onMouseLeave={e => { e.target.style.borderColor = 'rgba(176, 186, 153, 0.5)'; }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <span style={{ fontSize: '0.8rem', color: 'rgba(78, 34, 15, 0.5)', fontWeight: 600 }}>FIND ME ON</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'rgba(176, 186, 153, 0.2)',
                      border: '1px solid rgba(176, 186, 153, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--dark-brown)',
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            {/* Floating ring decoration */}
            <div style={{
              position: 'absolute',
              width: '110%',
              height: '110%',
              borderRadius: '50%',
              border: '1.5px dashed rgba(157, 102, 56, 0.25)',
              top: '-5%',
              left: '-5%',
              animation: 'float 6s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute',
              width: '90%',
              height: '90%',
              borderRadius: '50%',
              border: '1px solid rgba(176, 186, 153, 0.35)',
              top: '5%',
              left: '5%',
            }} />

            {/* Portrait container */}
            <motion.div
              style={{
                width: 'clamp(280px, 40vw, 440px)',
                height: 'clamp(280px, 40vw, 440px)',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 24px 80px rgba(78, 34, 15, 0.22), 0 0 0 6px rgba(176, 186, 153, 0.25)',
                animation: 'float 6s ease-in-out infinite',
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/esther.png"
                alt="Esther Kaliza - Frontend Engineer & Full-Stack Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 60%, rgba(78, 34, 15, 0.1) 100%)',
                pointerEvents: 'none',
              }} />
            </motion.div>

            {/* Floating Badge - Projects */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                background: 'rgba(247, 241, 222, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(176, 186, 153, 0.5)',
                borderRadius: 'var(--radius-md)',
                padding: '14px 18px',
                boxShadow: '0 8px 32px rgba(78, 34, 15, 0.12)',
                textAlign: 'center',
                minWidth: '120px',
              }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(78, 34, 15, 0.18)' }}
            >
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--accent-bronze)', fontFamily: 'var(--font-display)' }}>6+</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'rgba(78, 34, 15, 0.65)', letterSpacing: '0.05em' }}>Projects Built</div>
            </motion.div>

            {/* Floating Badge - IwaCuTech */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              style={{
                position: 'absolute',
                top: '12%',
                left: '-8%',
                background: 'rgba(247, 241, 222, 0.9)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(176, 186, 153, 0.5)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                boxShadow: '0 8px 32px rgba(78, 34, 15, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(78, 34, 15, 0.18)' }}
            >
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: 'linear-gradient(135deg, var(--accent-bronze), var(--dark-brown))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
              }}>🚀</div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--dark-brown)' }}>IwaCuTech</div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(78, 34, 15, 0.6)', fontWeight: 500 }}>Founder</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{
            marginTop: '64px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(176, 186, 153, 0.3)',
          }}
        >
          <p style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: 'rgba(78, 34, 15, 0.45)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            Technology Stack
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
          }}>
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                className="tech-badge"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.05 }}
                whileHover={{ scale: 1.06 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('#about')}
      >
        <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(78, 34, 15, 0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: 28,
            height: 44,
            borderRadius: 14,
            border: '2px solid rgba(157, 102, 56, 0.3)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div style={{
            width: 4,
            height: 8,
            borderRadius: 2,
            background: 'var(--accent-bronze)',
          }} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}
