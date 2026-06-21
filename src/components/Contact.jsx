import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 className="section-title">Let's Build Something Amazing Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--dark-brown)' }}>Contact Information</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <a href="mailto:kalizaesther5@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--dark-brown)', textDecoration: 'none', fontSize: '1.1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(176, 186, 153, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-bronze)' }}><FiMail size={20} /></div>
                kalizaesther5@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--dark-brown)', fontSize: '1.1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(176, 186, 153, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-bronze)' }}><FiPhone size={20} /></div>
                +250 728 045 049
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--dark-brown)', fontSize: '1.1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(176, 186, 153, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-bronze)' }}><FiMapPin size={20} /></div>
                Kigali, Rwanda
              </div>
            </div>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--dark-brown)' }}>Find Me Online</h3>
            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { icon: <FiGithub size={20}/>, href: '#' },
                { icon: <FiLinkedin size={20}/>, href: '#' },
                { icon: <FiGlobe size={20}/>, href: '#' }
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-sm)', background: 'var(--dark-brown)', color: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass"
            style={{ padding: '32px' }}
          >
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-brown)' }}>Name</label>
                <input type="text" id="name" style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(176, 186, 153, 0.6)', background: 'rgba(255, 255, 255, 0.5)', fontFamily: 'var(--font-sans)', fontSize: '1rem', outline: 'none', transition: 'border 0.2s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-bronze)'} onBlur={(e) => e.target.style.borderColor = 'rgba(176, 186, 153, 0.6)'} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-brown)' }}>Email</label>
                <input type="email" id="email" style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(176, 186, 153, 0.6)', background: 'rgba(255, 255, 255, 0.5)', fontFamily: 'var(--font-sans)', fontSize: '1rem', outline: 'none', transition: 'border 0.2s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-bronze)'} onBlur={(e) => e.target.style.borderColor = 'rgba(176, 186, 153, 0.6)'} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-brown)' }}>Subject</label>
                <input type="text" id="subject" style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(176, 186, 153, 0.6)', background: 'rgba(255, 255, 255, 0.5)', fontFamily: 'var(--font-sans)', fontSize: '1rem', outline: 'none', transition: 'border 0.2s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-bronze)'} onBlur={(e) => e.target.style.borderColor = 'rgba(176, 186, 153, 0.6)'} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--dark-brown)' }}>Message</label>
                <textarea id="message" rows="5" style={{ padding: '12px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(176, 186, 153, 0.6)', background: 'rgba(255, 255, 255, 0.5)', fontFamily: 'var(--font-sans)', fontSize: '1rem', resize: 'vertical', outline: 'none', transition: 'border 0.2s' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-bronze)'} onBlur={(e) => e.target.style.borderColor = 'rgba(176, 186, 153, 0.6)'}></textarea>
              </div>
              <button type="button" className="btn-primary" style={{ marginTop: '8px', justifyContent: 'center' }}>Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
