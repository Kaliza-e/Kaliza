import { FiGithub, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#1B211A] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-leaf-400/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="group flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-grad-viby flex items-center justify-center text-forest-900 font-display font-black text-xl shadow-glow">
                K
              </div>
              <span className="font-display text-3xl font-bold text-white tracking-tighter">
               <span className="text-gradient">Kaliza</span>
              </span>
            </a>
            <p className="font-body text-slate-400 text-base max-w-sm leading-relaxed opacity-70">
              Designing and building digital experiences that blend artistic vision with technical precision. 
              Available for new projects and collaborations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-fancy text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 mb-8">Navigation</h4>
            <div className="flex flex-col gap-4">
              {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="font-body text-slate-400 hover:text-white hover:translate-x-1 transition-all text-sm font-semibold">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-fancy text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 mb-8">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: FiGithub, href: '#', color: 'hover:border-leaf-400 hover:text-leaf-400 hover:bg-leaf-400/5' },
                { icon: FiLinkedin, href: '#', color: 'hover:border-cream-200 hover:text-cream-200 hover:bg-cream-200/5' },
                { icon: FiTwitter, href: '#', color: 'hover:border-leaf-400 hover:text-leaf-400 hover:bg-leaf-400/5' },
                { icon: FiDribbble, href: '#', color: 'hover:border-cream-200 hover:text-cream-200 hover:bg-cream-200/5' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className={`w-12 h-12 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-slate-400 transition-all duration-500 shadow-card ${social.color}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-black font-fancy uppercase tracking-[0.3em] text-slate-600">
          <p>© {new Date().getFullYear()} ESTHER KALIZA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-leaf-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
