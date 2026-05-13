import { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import avatarImg from '../assets/avatar.jpg'

const stats = [
  { label: 'Years of Experience', value: 3, suffix: '+' },
  { label: 'Completed Projects', value: 40, suffix: '+' },
  { label: 'Happy Clients', value: 25, suffix: '+' },
]

const skills = [
  { name: 'React & Next.js', level: 90 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Backend Architecture', level: 80 },
]

function AnimatedCounter({ value }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" })
    return () => controls.stop()
  }, [count, value])

  return <motion.span>{rounded}</motion.span>
}

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full mix-blend-screen blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-400/5 rounded-full mix-blend-screen blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center md:text-left mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <div className="h-[2px] w-12 bg-cyan-400"></div>
            <span className="section-label !mb-0 text-cyan-400 tracking-[0.3em] uppercase text-xs font-bold">Who I Am</span>
          </div>
          <h2 className="section-title text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: Image & Visuals */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            {/* Main Image Container */}
            <div className="relative group rounded-3xl overflow-hidden aspect-[4/5] border border-glass-border/50 shadow-2xl z-10 bg-navy-800">
              <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={avatarImg} 
                alt="Profile Avatar" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent z-10"></div>
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="text-2xl font-display font-bold text-white mb-1">Aesthetics & Logic</h3>
                <p className="text-cyan-400 font-medium tracking-wide text-sm uppercase">Bridging the gap</p>
              </div>
            </div>

            {/* Floating Element 1 - Experience Badge */}
            <motion.div 
              className="absolute -right-6 top-1/4 z-20 glass-card p-4 flex items-center gap-4 rounded-2xl border border-glass-border shadow-xl backdrop-blur-md bg-glass-bg"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl font-bold border border-cyan-400/30">
                3+
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Years of</p>
                <p className="text-sm font-bold text-white">Experience</p>
              </div>
            </motion.div>

            {/* Floating Element 2 - Decoration */}
            <motion.div 
              className="absolute -left-8 bottom-1/3 z-20 w-20 h-20 rounded-full border border-teal-400/30 flex items-center justify-center backdrop-blur-md bg-navy-800/40"
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [0, 15, 0], rotate: [0, 90, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center">
                <span className="text-teal-400 text-lg">✨</span>
              </div>
            </motion.div>

            {/* Frame accent */}
            <div className="absolute -inset-4 border-2 border-cyan-400/20 rounded-[2.5rem] -z-0 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          </motion.div>

          {/* Right: Content & Stats */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
              I craft digital experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 border-b-2 border-cyan-400/30">leave a lasting impact.</span>
            </h3>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
              I'm a passionate developer focusing on creating intuitive, user-centric interfaces backed by robust architectures. By combining deep technical knowledge with a keen eye for design, I transform complex challenges into elegant solutions.
            </p>
            
            <p className="text-slate-400 leading-relaxed mb-10">
              My philosophy centers around clean code, fluid animations, and pixel-perfect layouts. Whether I'm designing a marketing landing page or engineering a full-stack SaaS application, I ensure every detail aligns perfectly with the user's journey.
            </p>

            {/* Skills Progress Bars */}
            <div className="mb-12 space-y-5">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-slate-200 tracking-wide">{skill.name}</span>
                    <span className="text-sm text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 + (index * 0.2), ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div ref={ref} className="grid grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass-card p-4 sm:p-6 text-center border-t-2 border-t-transparent hover:border-t-cyan-400 transition-all duration-300 hover:-translate-y-1 bg-glass-bg border-glass-border">
                  <div className="text-3xl md:text-4xl font-display font-extrabold text-white mb-2 tracking-tight">
                    {inView ? (
                      <AnimatedCounter value={stat.value} />
                    ) : (
                      '0'
                    )}
                    <span className="text-cyan-400 ml-1">{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-widest font-semibold leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
