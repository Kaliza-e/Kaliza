import { FiGithub, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-glass-border pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-extrabold text-white mb-4">
              <span className="text-cyan-400 font-light">&lt;</span>
              <span className="text-gradient">Kaliza</span>
              <span className="text-cyan-400 font-light">/&gt;</span>
            </a>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Crafting digital experiences with pixel-perfect precision and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4 font-display">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Me</a>
              <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Projects</a>
              <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Skills</a>
              <a href="#blog" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Blog</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-4 font-display">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg border border-glass-border flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all">
                <FiGithub size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-glass-border flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all">
                <FiLinkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-glass-border flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg border border-glass-border flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all">
                <FiDribbble size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Kaliza. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
