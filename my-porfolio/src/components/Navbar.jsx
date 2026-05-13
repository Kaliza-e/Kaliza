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
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className={`w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3 ${
        scrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-2xl border border-white/5' : 'bg-navy-800/50 backdrop-blur-sm border border-white/5'
      }`}>
        
        {/* Logo Icon */}
        <Link to="home" smooth duration={600} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center cursor-pointer flex-shrink-0 text-white border border-white/10 hover:bg-white/10 transition-colors">
          <span className="font-display font-bold text-lg leading-none mt-0.5">K</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={600}
                className={`relative font-display text-sm font-medium px-5 py-2 rounded-full cursor-pointer transition-colors duration-300 z-10 block ${
                  active === to ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {label}
                {active === to && (
                  <motion.span
                    className="absolute inset-0 bg-white/10 border border-white/5 rounded-full -z-10"
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a href="#contact" className="hidden md:inline-flex bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-white px-6 py-2 rounded-full font-medium text-sm transition-all shadow-[0_0_15px_rgba(217,70,239,0.3)]">
          Contact
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-20 left-4 right-4 bg-navy-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={600}
                    className="block font-display text-base font-medium text-slate-300 px-4 py-3 rounded-xl cursor-pointer hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-4 bg-gradient-to-r from-cyan-400 to-teal-400 text-white text-center py-3 rounded-xl font-medium" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
