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
          <span className="font-body text-[10px] md:text-xs font-black tracking-[0.5em] text-fuchsia-500 uppercase mb-4 text-glow">
            WELCOME TO MY WORLD 👋
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
            Hi, I'm <span className="font-normal opacity-80">Esther Kaliza</span>
          </h2>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-[0.8] tracking-tighter">
            <span className="text-gradient">Creative</span> <br/> 
            <span className="opacity-90">Developer</span>
          </h1>
          
          <p className="font-body text-slate-300 max-w-md text-sm md:text-base leading-relaxed mb-10 opacity-70">
            Designing and building digital experiences that blend artistic vision with technical precision.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a href="#projects" className="btn-primary">
              My Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>

          {/* Social Icons matching image */}
          <div className="flex gap-4 pointer-events-auto">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-magenta-500/20 hover:border-magenta-500 transition-all">
              <span className="font-bold">in</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-fuchsia-500/20 hover:border-fuchsia-500 transition-all">
              <span className="font-bold">gh</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-fuchsia-500/20 hover:border-fuchsia-500 transition-all">
              <span className="font-bold">tw</span>
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
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
            {/* The distinctive rounded glowing frame from the image */}
            <div className="absolute inset-4 rounded-[50px] border-[16px] border-cyan-400 shadow-glow transform rotate-6 animate-pulse"></div>
            <div className="absolute inset-4 rounded-[50px] border-[16px] border-fuchsia-500/30 blur-xl transform rotate-6"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -left-8 bottom-10 w-20 h-20 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 flex items-center justify-center text-3xl transform -rotate-12 shadow-card"
              animate={{ y: [0, -20, 0], rotate: [-12, 0, -12] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >🌈</motion.div>
            <motion.div 
              className="absolute -right-6 top-20 w-16 h-16 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center text-2xl transform rotate-12 shadow-card"
              animate={{ y: [0, 25, 0], rotate: [12, -12, 12] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >🔮</motion.div>

            {/* Avatar image container */}
            <div className="absolute inset-8 rounded-[35px] overflow-hidden flex items-end justify-center bg-navy-800 z-10 border border-white/5">
              <img 
                src="/src/assets/avatar.jpg" 
                alt="Creative Developer" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-fuchsia-500 transition-colors z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        ↓
      </motion.a>
    </section>
  )
}
