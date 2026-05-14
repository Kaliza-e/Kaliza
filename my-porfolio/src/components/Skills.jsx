import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Visual Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'JavaScript / TS', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 }
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
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[150px] pointer-events-none"></div>

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
            <h2 className="section-title mb-8">Mastering the <br/><span className="text-gradient">Digital Craft</span></h2>
            <p className="font-body text-slate-300 text-lg leading-relaxed mb-10 opacity-80">
              I've spent years mastering the tools needed to build incredible digital experiences. I focus on modern stacks that ensure high performance and seamless user interaction.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Docker', 'AWS', 'GraphQL', 'Figma', 'Git', 'Vercel', 'Prisma'].map(tool => (
                <span key={tool} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-slate-400 text-xs font-black font-creative uppercase tracking-widest hover:border-fuchsia-500/50 hover:text-white transition-all duration-300">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div 
                key={catIdx}
                className="glass-card p-10 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: catIdx * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-12">
                  <span className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-glow ${catIdx === 0 ? 'bg-cyan-400/10 text-cyan-400' : 'bg-fuchsia-500/10 text-fuchsia-500 shadow-fuchsia'}`}>
                    {catIdx === 0 ? '✨' : '⚡'}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-10">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-slate-200 font-body text-base font-semibold group-hover:text-white transition-colors">{skill.name}</span>
                        <span className={`font-display font-black tracking-tighter text-xl ${catIdx === 0 ? 'text-cyan-400' : 'text-fuchsia-500'}`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-navy-800 rounded-full overflow-hidden p-[2px]">
                        <motion.div 
                          className={`h-full rounded-full relative shadow-glow ${catIdx === 0 ? 'bg-cyan-400' : 'bg-fuchsia-500 shadow-fuchsia'}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-12 bg-white/30 blur-[4px]"></div>
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
