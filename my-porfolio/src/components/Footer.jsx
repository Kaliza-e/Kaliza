import { FiGithub, FiTwitter, FiLinkedin, FiDribbble } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <section className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-navy-900 border-l border-glass-border">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="font-display text-5xl font-extrabold text-white mb-6">
              <span className="text-cyan-400 font-light">&lt;</span>
              Dev
              <span className="text-gradient">Portfolio</span>
              <span className="text-cyan-400 font-light">/&gt;</span>
            </a>
            <p className="text-slate-300 text-xl max-w-md leading-relaxed mb-10">
              Crafting digital experiences with pixel-perfect precision and cutting-edge technologies.
            </p>
            
            {/* Social */}
            <div className="flex gap-6 pointer-events-auto">
              <a href="#" className="w-14 h-14 rounded-2xl border border-glass-border flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-2 transition-all duration-300 bg-navy-800/50">
                <FiGithub size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl border border-glass-border flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-2 transition-all duration-300 bg-navy-800/50">
                <FiLinkedin size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl border border-glass-border flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-2 transition-all duration-300 bg-navy-800/50">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-2xl border border-glass-border flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-2 transition-all duration-300 bg-navy-800/50">
                <FiDribbble size={24} />
              </a>
            </div>
          </div>

          <div className="glass-card p-12 text-center border-cyan-400/20">
            <h3 className="text-3xl font-display font-bold text-white mb-6">Ready to start?</h3>
            <p className="text-slate-300 text-lg mb-8">
              Let's build something amazing together.
            </p>
            <a href="mailto:hello@example.com" className="btn-primary pointer-events-auto text-lg px-10 py-4">
              hello@example.com
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="absolute bottom-10 left-0 right-0 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 px-6 lg:px-12">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <div className="flex gap-6 pointer-events-auto">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  )
}
