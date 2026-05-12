import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'JavaScript/TS', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name:''}
    ]
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Python/Django', level: 70 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 75 },
      {name:"Express.js",level:"90"},
      {name:"MySQL",level:"85"}
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-800/30">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Expertise</span>
            <h2 className="section-title mb-6">My <span className="text-gradient">Skills</span></h2>
            <p className="text-slate-300 leading-relaxed mb-8">
              I've spent years mastering the tools needed to build incredible digital experiences. I focus on modern stacks that ensure high performance and seamless developer experience.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Docker', 'AWS', 'GraphQL', 'Figma', 'Git'].map(tool => (
                <span key={tool} className="px-4 py-2 border border-glass-border rounded-lg text-slate-300 text-sm font-medium backdrop-blur-sm">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIdx) => (
              <motion.div 
                key={catIdx}
                className="glass-card p-10 border-cyan-400/10 hover:border-cyan-400/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: catIdx * 0.2 }}
              >
                <h3 className="text-2xl font-display font-bold text-white mb-10 flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl shadow-glow">
                    {catIdx === 0 ? '</>' : '⚙️'}
                  </span>
                  {category.title}
                </h3>
                
                <div className="space-y-8">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-slate-200 font-medium text-lg">{skill.name}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-3 w-full bg-navy-900 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          className="h-full bg-grad-cyan rounded-full relative"
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
