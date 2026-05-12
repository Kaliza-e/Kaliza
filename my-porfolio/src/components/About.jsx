import { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Completed', value: 40, suffix: '+' },
  { label: 'Happy Clients', value: 25, suffix: '+' },
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
    threshold: 0.5, // trigger when halfway visible horizontally
  })

  return (
    <section id="about" className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-navy-800/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Discover</span>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="glass-card p-10 aspect-square max-w-md mx-auto flex items-center justify-center border-cyan-400/20 group hover:-translate-y-4 transition-transform duration-500">
              <div className="absolute inset-0 bg-grad-hero opacity-50 rounded-2xl transition-opacity group-hover:opacity-80"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto mb-8 shadow-glow group-hover:scale-110 transition-transform duration-500">
                  <span className="text-6xl">💻</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-2">Code meets Design</h3>
                <p className="text-cyan-400 text-lg">Building digital experiences</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-grad-cyan rounded-full mix-blend-screen blur-2xl opacity-50"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-400 rounded-full mix-blend-screen blur-3xl opacity-30"></div>
          </motion.div>

          {/* Text/Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
              I develop <span className="text-cyan-400">innovative solutions</span> that help brands grow.
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              I'm a passionate developer with a strong focus on building user-centric interfaces and robust backend architectures. I blend creativity with technical expertise to transform complex problems into elegant, intuitive digital products.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-12">
              My approach revolves around clean code, modern aesthetics, and seamless interactions. Whether it's a sleek landing page or a complex web application, I ensure every pixel serves a purpose.
            </p>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-4xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-grad-cyan mb-3">
                    {inView ? (
                      <AnimatedCounter value={stat.value} />
                    ) : (
                      '0'
                    )}
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-slate-400 uppercase tracking-widest font-bold">
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
