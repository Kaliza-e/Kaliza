import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import WaveBackground from './WaveBackground'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-10 overflow-hidden">
      <WaveBackground />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-display text-xs md:text-sm font-bold tracking-widest text-white uppercase mb-4">
            WELCOME TO MY WORLD 👋
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            Hi, I'm <span className="font-normal">John Doe</span>
          </h2>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="text-cyan-400">Full-Stack</span> Developer
          </h1>
          
          <p className="text-slate-300 max-w-md text-sm md:text-base leading-relaxed mb-10">
            Passionate developer, I create intuitive and visually appealing digital experiences. I transform ideas into seamless code that meets users' expectations.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a href="#projects" className="bg-white text-navy-900 hover:bg-slate-200 px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg pointer-events-auto">
              My Projects
            </a>
            <a href="#contact" className="bg-transparent border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-bold text-sm transition-all pointer-events-auto">
              Download CV
            </a>
          </div>

          {/* Social Icons matching image */}
          <div className="flex gap-4 pointer-events-auto">
            <a href="#" className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center hover:-translate-y-1 transition-transform">
              <span className="font-bold">in</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center hover:-translate-y-1 transition-transform">
              <span className="font-bold">x</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white text-navy-900 flex items-center justify-center hover:-translate-y-1 transition-transform">
              <span className="font-bold">fb</span>
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar matching image frame */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* The distinctive rounded glowing frame from the image */}
            <div className="absolute inset-4 rounded-[40px] border-[12px] border-cyan-400/80 shadow-[0_0_40px_rgba(217,70,239,0.5)] transform rotate-6"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -left-4 bottom-10 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center text-2xl transform -rotate-12"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >🚀</motion.div>
            <motion.div 
              className="absolute -right-4 top-20 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center text-xl transform rotate-12"
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >✨</motion.div>

            {/* Avatar image container */}
            <div className="absolute inset-6 rounded-[30px] overflow-hidden flex items-end justify-center bg-transparent z-10">
              <img 
                src="/src/assets/avatar.jpg" 
                alt="Creative Developer" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator from image */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white pointer-events-auto hover:bg-white/30 transition-colors z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        ↓
      </motion.a>
    </section>
  )
}
