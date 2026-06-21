import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark-brown)', color: 'var(--bg-primary)', padding: '64px 0 32px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--bg-primary)', marginBottom: '8px' }}>Esther Kaliza</h2>
        <p style={{ color: 'var(--surface-secondary)', fontSize: '0.95rem', marginBottom: '32px' }}>
          Frontend Engineer • Full-Stack Developer • UI/UX Designer
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
          <a href="#" style={{ color: 'var(--bg-primary)', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.8}><FiGithub size={24}/></a>
          <a href="#" style={{ color: 'var(--bg-primary)', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.8}><FiLinkedin size={24}/></a>
          <a href="mailto:kalizaesther5@gmail.com" style={{ color: 'var(--bg-primary)', opacity: 0.8, transition: 'opacity 0.2s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.8}><FiMail size={24}/></a>
        </div>

        <div style={{ borderTop: '1px solid rgba(247, 241, 222, 0.1)', paddingTop: '32px', fontSize: '0.85rem', color: 'rgba(247, 241, 222, 0.6)' }}>
          &copy; {new Date().getFullYear()} Esther Kaliza. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
