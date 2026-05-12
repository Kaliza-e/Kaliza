import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Nexus E-Commerce',
    description: 'A full-stack e-commerce platform with real-time inventory, secure payments, and a sleek admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'bg-gradient-to-br from-indigo-500 to-purple-600',
  },
  {
    title: 'Aero UI Kit',
    description: 'A comprehensive, accessible UI component library built for modern web applications.',
    tags: ['Vue', 'TypeScript', 'Tailwind', 'Storybook'],
    image: 'bg-gradient-to-br from-cyan-500 to-blue-500',
  },
  {
    title: 'CryptoTracker',
    description: 'Real-time cryptocurrency tracking app featuring live charts, portfolio management, and market news.',
    tags: ['Next.js', 'Framer Motion', 'REST API'],
    image: 'bg-gradient-to-br from-emerald-400 to-teal-500',
  },
  {
    title: 'AI Image Gen',
    description: 'Web application leveraging OpenAI models to generate, edit, and curate digital art.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
    image: 'bg-gradient-to-br from-pink-500 to-rose-500',
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
      className="glass-card group relative min-w-[400px] max-w-[450px] w-full flex-shrink-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        rotateX: useMotionTemplate`${useTransform(mouseY, [-250, 250], [5, -5])}deg`,
        rotateY: useMotionTemplate`${useTransform(mouseX, [-250, 250], [-5, 5])}deg`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${useTransform(mouseX, val => val + 200)}px ${useTransform(mouseY, val => val + 200)}px,
              rgba(0, 212, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div style={{ transform: "translateZ(30px)" }}>
        {/* Project Image Placeholder */}
        <div className={`h-56 w-full ${project.image} relative overflow-hidden rounded-t-xl`}>
          <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
          {/* Overlay Links */}
          <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-navy-900/40">
            <a href="#" className="w-14 h-14 rounded-full bg-cyan-400 text-navy-900 flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,212,255,0.5)]">
              <FiExternalLink size={24} />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-white text-navy-900 flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              <FiGithub size={24} />
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8">
          <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-300 text-lg mb-8 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-4 py-1.5 text-sm font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-full"
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

// Missing useTransform import fix for the Component
import { useTransform } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="relative w-screen h-screen flex-shrink-0 flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center">
        <div className="flex justify-between items-end mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Portfolio</span>
            <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          </motion.div>

          <motion.a 
            href="#" 
            className="hidden md:inline-flex btn-outline pointer-events-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            View All Projects
          </motion.a>
        </div>

        <div className="flex gap-8 overflow-visible pb-12 items-center pointer-events-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
