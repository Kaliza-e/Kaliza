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
      className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <nav className={`w-full max-w-5xl rounded-[30px] transition-all duration-500 flex items-center justify-between px-8 py-4 ${
        scrolled ? 'bg-navy-900/80 backdrop-blur-2xl shadow-card border border-white/10' : 'bg-transparent border border-transparent'
      }`}>
        
        {/* Logo Icon */}
        <Link to="home" smooth duration={600} className="group relative w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center cursor-pointer flex-shrink-0 text-white border border-white/10 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden shadow-glow">
          <div className="absolute inset-0 bg-grad-viby opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <span className="font-display font-black text-xl leading-none tracking-tighter">EK</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                className={`relative font-body text-[13px] font-bold uppercase tracking-widest px-6 py-2.5 rounded-full cursor-pointer transition-all duration-500 z-10 block ${
                  active === to ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
                {active === to && (
                  <motion.span
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-full -z-10 shadow-glow"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="btn-primary px-8 py-2.5 text-xs font-black uppercase tracking-widest hidden md:inline-flex">
          Let's Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 hover:text-white transition-all pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-24 left-6 right-6 glass-card p-8 shadow-card flex flex-col md:hidden z-40"
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
                    className={`block font-display text-xl font-bold px-6 py-4 rounded-2xl cursor-pointer transition-all ${
                      active === to ? 'bg-white/10 text-white shadow-glow' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-8 btn-primary w-full py-4 text-center text-sm font-black uppercase tracking-widest" onClick={() => setMenuOpen(false)}>
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
