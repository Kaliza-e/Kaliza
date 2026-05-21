import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Visual Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'JavaScript / TS', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 },
      { name: 'UI Design', level: 90 },
      { name: 'UX Design', level: 88 }
    ]
  },
  {
    title: 'Scalable Systems',
    skills: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / Django', level: 75 },
      { name: 'PostgreSQL / Mongo', level: 82 },
      { name: 'Cloud / AWS', level: 70 }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="snap-start py-32 relative overflow-hidden bg-[#0b0310]">
      {/* Decorative atmospheric orbs */}
      <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-rose-400/5 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-rose-500/3 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start">

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">TECHNICAL PROWESS</span>
            <h2 className="section-title mb-8">Mastering the <br /><span className="text-gradient">Digital Craft</span></h2>
            <p className="font-creative text-slate-300 text-sm md:text-base leading-relaxed mb-10 opacity-70">
              I've spent years mastering the tools needed to build incredible digital environments. I focus on high-fidelity, performance-optimized visual layouts and responsive backend pipelines.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {['Docker', 'AWS', 'GraphQL', 'Figma', 'Adobe XD', 'Canva', 'Git', 'Vercel', 'Prisma'].map(tool => (
                <span key={tool} className="px-4 py-2 border border-white/5 bg-black/40 text-slate-400 text-[10px] font-black font-creative uppercase tracking-widest hover:border-rose-400 hover:text-white transition-all duration-300">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                className="glass-card p-8 group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: catIdx * 0.2 }}
              >
                {/* Target-Lock notches for cards */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-rose-400/30 group-hover:border-rose-400 transition-colors"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-rose-400/30 group-hover:border-rose-400 transition-colors"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-rose-400/30 group-hover:border-rose-400 transition-colors"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-rose-400/30 group-hover:border-rose-400 transition-colors"></div>

                <div className="flex items-center gap-4 mb-10">
                  <span className={`w-12 h-12 flex items-center justify-center text-xl border border-white/10 ${catIdx === 0 ? 'bg-rose-400/5 text-rose-400' : 'bg-rose-400/5 text-rose-300'}`}>
                    {catIdx === 0 ? '01' : '02'}
                  </span>
                  <h3 className="text-xl font-display font-black text-white uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-8">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-slate-300 font-creative text-xs uppercase tracking-wide group-hover:text-white transition-colors">{skill.name}</span>
                        <span className={`font-display font-black text-lg ${catIdx === 0 ? 'text-rose-400' : 'text-rose-300'}`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-black border border-white/5 p-[1px] rounded-none overflow-hidden">
                        <motion.div
                          className={`h-full rounded-none relative shadow-glow ${catIdx === 0 ? 'bg-rose-400' : 'bg-rose-300'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 blur-[2px]"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

