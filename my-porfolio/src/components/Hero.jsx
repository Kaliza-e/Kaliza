import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import WaveBackground from './WaveBackground'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <WaveBackground />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-display text-xl md:text-2xl font-light text-slate-300 mb-2">
            Explore my creative
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight">
            <span className="text-gradient">Portfolio</span>
          </h1>
          
          <div className="h-12 mb-8">
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Creative Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl md:text-2xl text-cyan-400 font-display font-medium"
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image/Avatar */}
        <motion.div 
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Glowing ring behind */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-cyan-500/20 shadow-[0_0_50px_rgba(192,132,252,0.2)]"></div>
            
            {/* Avatar image container */}
            <div className="absolute inset-0 rounded-full overflow-hidden flex items-end justify-center bg-gradient-to-b from-transparent to-navy-800/50">
              <img 
                src="/src/assets/avatar.jpg" 
                alt="Creative Developer" 
                className="w-[85%] object-cover object-bottom"
              />
            </div>

            {/* Badge overlay */}
            <motion.div 
              className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 glass-card px-8 py-4 rounded-full flex items-center gap-4 whitespace-nowrap border-cyan-400/30 backdrop-blur-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-full bg-grad-cyan flex items-center justify-center text-navy-900 font-bold font-display text-sm">
                Dev
              </div>
              <div>
                <p className="text-white font-display font-bold text-base">Creative Code</p>
                <p className="text-cyan-400 text-xs tracking-widest uppercase mt-0.5">innovative</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
