import { FiGithub, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#0b0310] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-rose-400/[0.015] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="group flex items-center gap-3 mb-8">
              <span className="font-display text-2xl font-black text-white tracking-[0.2em] uppercase">
                KALIZA
              </span>
            </a>
            <p className="font-creative text-slate-400 text-xs leading-relaxed max-w-sm opacity-70">
              Designing and building digital experiences that blend artistic vision with technical precision. 
              Available for new projects and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-creative text-[9px] font-black tracking-[0.25em] uppercase text-slate-500 mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="font-creative uppercase tracking-wider text-xs text-slate-400 hover:text-white hover:translate-x-1 transition-all">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-creative text-[9px] font-black tracking-[0.25em] uppercase text-slate-500 mb-8">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: FiGithub, href: '#', color: 'hover:border-rose-400 hover:text-rose-400 hover:bg-rose-400/5' },
                { icon: FiLinkedin, href: '#', color: 'hover:border-rose-400 hover:text-rose-400 hover:bg-rose-400/5' },
                { icon: FiTwitter, href: '#', color: 'hover:border-rose-400 hover:text-rose-400 hover:bg-rose-400/5' },
                { icon: FiDribbble, href: '#', color: 'hover:border-rose-400 hover:text-rose-400 hover:bg-rose-400/5' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className={`w-11 h-11 rounded-none border border-white/10 bg-black/40 flex items-center justify-center text-slate-400 transition-all duration-500 shadow-card ${social.color}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] font-black font-creative uppercase tracking-[0.25em] text-slate-600">
          <p>© {new Date().getFullYear()} ESTHER KALIZA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-rose-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

