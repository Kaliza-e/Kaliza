import { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import avatarImg from '../assets/avatar.jpg'

const stats = [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Happy Clients', value: 10, suffix: '+' },
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
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="about" className="relative py-32 bg-navy-900 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image/Visual side */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px]">
              {/* The distinctive rotated glowing frame */}
              <div className="absolute inset-4 rounded-[50px] border-[14px] border-fuchsia-500 shadow-neon transform -rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -right-6 bottom-12 w-16 h-16 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 flex items-center justify-center text-2xl z-20 shadow-card"
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >💻</motion.div>
              <motion.div 
                className="absolute -left-10 top-16 w-14 h-14 bg-white/5 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center text-xl z-20 shadow-card"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >🎨</motion.div>

              {/* Avatar image container */}
              <div className="absolute inset-8 rounded-[35px] overflow-hidden flex items-end justify-center bg-navy-800 z-10 border border-white/5">
                <img 
                  src={avatarImg} 
                  alt="Profile Avatar" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* Text/Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="section-label">THE STORY SO FAR</span>
            <h2 className="section-title">
              Crafting Digital <br/> 
              <span className="text-gradient">Magic</span>
            </h2>
            
            <p className="font-body text-slate-300 text-base md:text-lg leading-relaxed mb-8 opacity-80">
              I blend technical expertise with artistic vision to transform complex problems into elegant, intuitive digital products. 
              My approach revolves around clean code, modern aesthetics, and seamless interactions. 
            </p>

            <p className="font-body text-slate-400 text-sm md:text-base leading-relaxed mb-12 italic border-l-2 border-fuchsia-500 pl-6">
              "Whether it's a sleek landing page or a complex web application, I ensure every pixel serves a purpose and every interaction feels alive."
            </p>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-3 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="font-display text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-sm tracking-tighter">
                    {inView ? (
                      <AnimatedCounter value={stat.value} />
                    ) : (
                      '0'
                    )}
                    {stat.suffix}
                  </div>
                  <div className="font-body text-[9px] md:text-[10px] text-fuchsia-500 uppercase tracking-[0.3em] font-black">
                    {stat.label}
                  </div>
                  {/* Subtle hover indicator */}
                  <div className="absolute -bottom-4 left-0 w-0 h-1 bg-grad-viby group-hover:w-full transition-all duration-700 rounded-full"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
