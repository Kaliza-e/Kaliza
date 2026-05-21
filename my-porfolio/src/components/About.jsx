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
    <section id="about" className="snap-start relative py-32 bg-[#0b0310] overflow-hidden">
      {/* Dynamic atmospheric orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-rose-400/5 rounded-full blur-[130px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-rose-500/5 rounded-full blur-[130px] -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Visual/Image side */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative w-full max-w-[400px] aspect-square">
              {/* High-quality character portrait inside styled brackets */}
              <div className="relative w-full h-full z-10 overflow-hidden border border-white/10 shadow-neon">
                {/* Corner accent bracket markers */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-rose-400 z-20"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-rose-400 z-20"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-rose-400 z-20"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-rose-400 z-20"></div>

                <img
                  src={avatarImg}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0310] via-[#0b0310]/20 to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Decorative industrial badge */}
              <motion.div
                className="absolute -right-6 bottom-12 w-16 h-16 bg-[#140521] border border-white/10 flex flex-col items-center justify-center z-20 shadow-card font-creative text-[10px] tracking-widest font-black text-rose-400"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <span>SYS</span>
                <span className="text-[7px] text-white opacity-40">ACTIVE</span>
              </motion.div>
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
              Crafting Digital <br />
              <span className="text-gradient">Magic</span>
            </h2>

            <p className="font-creative text-slate-300 text-sm md:text-base leading-relaxed mb-8 opacity-70">
              I blend deep visual grit with high-voltage clean code to build striking gaming experiences and immersive web interfaces.
              My focus centers on responsive structures, micro-interactions, and premium aesthetics that stand out immediately.
            </p>

            <p className="font-creative text-[#A0A5A0] text-xs md:text-sm leading-relaxed mb-12 italic border-l border-rose-400 pl-6 uppercase tracking-wider">
              "Every line of code is an asset; every pixel is an atmospheric vector."
            </p>

            {/* Stats - formatted as digital terminals */}
            <div ref={ref} className="grid grid-cols-3 gap-4 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="relative group p-4 border border-white/5 bg-black/40 hover:border-rose-400 transition-all duration-500">
                  {/* Micro Corner notch */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-rose-400/20 group-hover:border-rose-400 transition-colors"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-rose-400/20 group-hover:border-rose-400 transition-colors"></div>

                  <div className="font-display text-3xl md:text-5xl font-black text-white mb-2 drop-shadow-sm tracking-tighter">
                    {inView ? (
                      <AnimatedCounter value={stat.value} />
                    ) : (
                      '0'
                    )}
                    <span className="text-rose-400 font-creative font-normal">{stat.suffix}</span>
                  </div>
                  <div className="font-creative text-[8px] md:text-[9px] text-[#A0A5A0] uppercase tracking-[0.2em] font-black group-hover:text-white transition-colors">
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

