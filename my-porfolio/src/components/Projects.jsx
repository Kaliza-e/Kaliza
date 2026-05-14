import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Nexus E-Commerce',
    description: 'A full-stack e-commerce platform with real-time inventory, secure payments, and a sleek admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'bg-gradient-to-br from-forest-800 via-leaf-400 to-olive-500',
  },
  {
    title: 'Aero UI Kit',
    description: 'A comprehensive, accessible UI component library built for modern web applications.',
    tags: ['Vue', 'TypeScript', 'Tailwind', 'Storybook'],
    image: 'bg-gradient-to-br from-leaf-300 via-olive-400 to-forest-900',
  },
  {
    title: 'CryptoTracker',
    description: 'Real-time cryptocurrency tracking app featuring live charts, portfolio management, and market news.',
    tags: ['Next.js', 'Framer Motion', 'REST API'],
    image: 'bg-gradient-to-br from-cream-200 via-leaf-400 to-olive-600',
  },
  {
    title: 'AI Image Gen',
    description: 'Web application leveraging OpenAI models to generate, edit, and curate digital art.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
    image: 'bg-gradient-to-br from-leaf-400 via-forest-800 to-cream-300',
  }
]

// 3D Tilt Card Component
function ProjectCard({ project, index }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left - width / 2)
    mouseY.set(clientY - top - height / 2)
  }

  return (
    <motion.div
      className="glass-card group relative w-full overflow-visible"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        rotateX: useMotionTemplate`${useTransform(mouseY, [-250, 250], [7, -7])}deg`,
        rotateY: useMotionTemplate`${useTransform(mouseX, [-250, 250], [-7, 7])}deg`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 blur-xl"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${useTransform(mouseX, val => val + 200)}px ${useTransform(mouseY, val => val + 200)}px,
              rgba(139, 174, 102, 0.15),
              rgba(235, 213, 171, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      <div style={{ transform: "translateZ(50px)" }}>
        {/* Project Image Placeholder */}
        <div className={`h-64 w-full ${project.image} relative overflow-hidden rounded-t-3xl`}>
          <div className="absolute inset-0 bg-forest-900/40 group-hover:bg-transparent transition-colors duration-700"></div>
          
          {/* Decorative Mesh Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

          {/* Overlay Links */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 backdrop-blur-md bg-forest-900/60">
            <a href="#" className="w-12 h-12 rounded-2xl bg-leaf-400 text-forest-900 flex items-center justify-center hover:scale-110 transition-transform shadow-glow">
              <FiExternalLink size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-2xl bg-white text-forest-900 flex items-center justify-center hover:scale-110 transition-transform shadow-card">
              <FiGithub size={20} />
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-display text-3xl font-bold text-white group-hover:text-gradient transition-all duration-500">
              {project.title}
            </h3>
          </div>
          
          <p className="font-body text-slate-300 text-sm md:text-base leading-relaxed mb-8 line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-[10px] font-black font-creative uppercase tracking-widest text-leaf-400 bg-leaf-400/5 border border-leaf-400/10 rounded-full group-hover:border-leaf-400/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">SELECTED WORKS</span>
          <h2 className="section-title">Case <span className="text-gradient">Studies</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 pointer-events-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-20 text-center pointer-events-auto">
          <a href="#" className="btn-outline border-leaf-400/30 hover:border-leaf-400 text-leaf-400">
            View Archives
          </a>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-leaf-400/5 blur-[150px] -z-10 rounded-full"></div>
    </section>
  )
}
