import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled
            ? 'rgba(247, 241, 222, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(176, 186, 153, 0.35)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(78, 34, 15, 0.08)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            whileHover={{ scale: 1.02 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--dark-brown)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-bronze), var(--dark-brown))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--bg-primary)',
              fontSize: '1rem',
              fontWeight: 900,
              fontFamily: 'var(--font-sans)',
              flexShrink: 0,
            }}>EK</span>
            Esther Kaliza
          </motion.a>

          {/* Desktop Links */}
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '4px',
            alignItems: 'center',
          }}
            className="nav-desktop-links"
          >
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.replace('#', '');
              return (
                <li key={href}>
                  <motion.a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    whileHover={{ y: -1 }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--accent-bronze)' : 'var(--dark-brown)',
                      textDecoration: 'none',
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: isActive ? 'rgba(157, 102, 56, 0.1)' : 'transparent',
                      transition: 'all 0.25s ease',
                      display: 'block',
                    }}
                  >
                    {label}
                  </motion.a>
                </li>
              );
            })}
            <li>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  marginLeft: '8px',
                }}
                className="btn-primary"
              >
                Hire Me
              </motion.a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            id="nav-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--dark-brown)',
              padding: '8px',
              borderRadius: 'var(--radius-sm)',
            }}
            className="nav-hamburger"
          >
            {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '280px',
              background: 'rgba(247, 241, 222, 0.97)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              zIndex: 999,
              padding: '80px 32px 32px',
              boxShadow: '-8px 0 40px rgba(78, 34, 15, 0.15)',
              borderLeft: '1px solid rgba(176, 186, 153, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {navLinks.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--dark-brown)',
                  textDecoration: 'none',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: activeSection === href.replace('#', '') ? 'rgba(157, 102, 56, 0.1)' : 'transparent',
                  borderBottom: '1px solid rgba(176, 186, 153, 0.2)',
                  transition: 'background 0.2s ease',
                }}
              >
                {label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              className="btn-primary"
              style={{ marginTop: '16px', justifyContent: 'center' }}
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(78, 34, 15, 0.3)',
              zIndex: 998,
              backdropFilter: 'blur(2px)',
            }}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
