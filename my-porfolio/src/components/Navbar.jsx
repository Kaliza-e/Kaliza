import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(link => document.getElementById(link.to))
      const scrollPosition = window.scrollY + 100 

      let currentActive = 'home'
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          currentActive = section.id
        }
      }
      setActive(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav className={`w-full max-w-5xl rounded-none transition-all duration-500 flex items-center justify-between px-8 py-3.5 pointer-events-auto ${
        scrolled ? 'bg-black/70 backdrop-blur-2xl shadow-card border border-white/10' : 'bg-transparent border border-transparent'
      }`}>
        
        {/* Logo Text styled like gaming screen */}
        <Link to="home" smooth duration={600} className="group relative cursor-pointer flex-shrink-0 text-white flex items-center gap-2">
          <span className="font-display font-black text-lg tracking-[0.2em] leading-none text-white hover:text-rose-400 transition-colors uppercase">KALIZA</span>
        </Link>
 
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                className={`relative font-creative text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 cursor-pointer transition-all duration-500 z-10 block ${
                  active === to ? 'text-rose-400' : 'text-[#A0A5A0] hover:text-white'
                }`}
              >
                {label}
                {active === to && (
                  <motion.span
                    className="absolute bottom-0 left-5 right-5 h-[1.5px] bg-rose-400 shadow-glow"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
 
        {/* CONTACT Box Button matching reference image top-right */}
        <a href="#contact" className="bracket-btn py-2 px-5 text-[9px] font-black tracking-[0.25em] hidden md:inline-flex">
          CONTACT
        </a>
 
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 border border-white/10 hover:border-rose-400/50 text-white/80 hover:text-white transition-all rounded-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-24 left-6 right-6 glass-card p-8 shadow-card flex flex-col md:hidden z-40 pointer-events-auto"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    className={`block font-creative text-sm uppercase tracking-widest px-6 py-4 rounded-none cursor-pointer transition-all ${
                      active === to ? 'bg-rose-400/10 text-rose-400 border-l border-rose-400' : 'text-[#A0A5A0] hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 btn-primary w-full py-3.5 text-center text-xs font-black uppercase tracking-widest" onClick={() => setMenuOpen(false)}>
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

