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
      setScrolled(window.scrollY > 40)

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
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-900/85 backdrop-blur-[20px] border-b border-cyan-400/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
          : 'py-5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="home" smooth duration={600} className="font-display text-xl font-extrabold cursor-pointer flex-shrink-0 text-white">
          <span className="text-cyan-400 font-light">&lt;</span>
          Dev
          <span className="text-gradient">Portfolio</span>
          <span className="text-cyan-400 font-light">/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1 mx-auto">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                className={`relative font-display text-sm font-medium px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  active === to ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {label}
                {active === to && (
                  <motion.span
                    className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/25 rounded-full -z-10"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a href="#contact" className="hidden lg:inline-flex btn-primary px-6 py-2.5 text-sm pointer-events-auto">
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-cyan-400 border border-glass-border rounded-lg hover:bg-cyan-400/10 transition-colors pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="lg:hidden bg-navy-900/95 backdrop-blur-[20px] border-t border-glass-border px-6 py-5 overflow-hidden flex flex-col pointer-events-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    className="block font-display text-base font-medium text-slate-300 px-4 py-3 rounded-xl cursor-pointer hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary mt-4 justify-center" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
