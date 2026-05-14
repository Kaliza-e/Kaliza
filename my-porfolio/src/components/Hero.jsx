import { motion } from 'framer-motion'
import WaveBackground from './WaveBackground'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-10 overflow-hidden bg-forest-900">
      <WaveBackground />
      
      {/* Deep Shadow Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forest-900/40 to-forest-900 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-creative text-[10px] md:text-xs font-black tracking-[0.5em] text-leaf-400 uppercase mb-4 bg-leaf-400/10 px-6 py-2 rounded-full border border-leaf-400/20">
            AVAILABLE FOR NEW VENTURES
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            Hi, I'm <span className="font-normal opacity-80">Esther Kaliza</span>
          </h2>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.8] tracking-tighter">
            <span className="text-gradient">Creative</span> <br/> 
            <span className="opacity-90">Developer</span>
          </h1>
          
          <p className="font-body text-slate-300 max-w-md text-base md:text-lg leading-relaxed mb-12 opacity-70">
            Blending organic aesthetics with architectural precision to build high-end digital environments.
          </p>

          <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
            <a href="#projects" className="btn-primary group">
              View Work <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
            <div className="flex gap-4">
              {['in', 'gh', 'tw'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-leaf-400/20 hover:border-leaf-400 transition-all duration-500 shadow-card">
                  <span className="font-black text-[10px] uppercase tracking-tighter">{social}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* The distinctive rounded glowing frame */}
            <div className="absolute inset-4 rounded-[50px] border-[16px] border-leaf-400/30 shadow-glow transform rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
            <div className="absolute inset-4 rounded-[50px] border-[16px] border-cream-200/10 blur-xl transform rotate-6"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -left-10 bottom-10 w-20 h-20 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 flex items-center justify-center text-3xl transform -rotate-12 shadow-card z-20"
              animate={{ y: [0, -20, 0], rotate: [-12, 0, -12] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >🌿</motion.div>
            <motion.div 
              className="absolute -right-8 top-20 w-16 h-16 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center text-2xl transform rotate-12 shadow-card z-20"
              animate={{ y: [0, 25, 0], rotate: [12, -12, 12] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >✨</motion.div>

            {/* Avatar image container */}
            <div className="absolute inset-8 rounded-[35px] overflow-hidden flex items-end justify-center bg-forest-800 z-10 border border-white/5 shadow-2xl">
              <img 
                src="/src/assets/avatar.jpg" 
                alt="Creative Developer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 brightness-90 hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-leaf-400 hover:text-forest-900 transition-all duration-500 z-20 shadow-glow"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="text-xl">↓</span>
      </motion.a>
    </section>
  )
}
