import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    title: 'Foodly',
    description: 'A full-stack recipe sharing app with cool recipes for food lovers and explorers.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'bg-gradient-to-br from-forest-800 via-leaf-400 to-olive-500',
  },
  {
    title: 'Musica',
    description: 'A personal music streaming app with a sleek interface and personalized playlists.',
    tags: ['Vue', 'TypeScript', 'Tailwind', 'Music API'],
    image: 'bg-gradient-to-br from-leaf-300 via-olive-400 to-forest-900',
  },
  {
    title: 'CoopMIS',
    description: 'A cooperative management information system for efficient member and financial tracking.',
    tags: ['Next.js', 'Framer Motion', 'REST API'],
    image: 'bg-gradient-to-br from-cream-200 via-leaf-400 to-olive-600',
  },
  {
    title: 'SecureShake',
    description: 'An emergency alert app that sends location-based notifications to trusted contacts with a simple shake or tap to ensure safety and peace of mind.',
    tags: ['React', 'Python', 'FastAPI', 'OpenAI'],
    image: 'bg-gradient-to-br from-leaf-400 via-forest-800 to-cream-300',
  },
  {
    title: 'IsokoSense',
    description: 'A smart water monitoring app that provides real-time data on waterbodies health and environmental conditions.',
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'IoT'],
    image: 'bg-gradient-to-br from-forest-800 via-leaf-400 to-olive-500',
  },
  {
    title: 'RespiraIQ',
    description: 'A smart air quality monitoring app that provides real-time data on pollution levels and health impacts.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'IoT'],
    image: 'bg-gradient-to-br from-leaf-400 via-forest-800 to-cream-300',
  },
  {
    title: 'Colelyon',
    description: 'A personal interior designs app that helps give inspirations to interior designers and house builders.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Figma'],
    image: 'bg-gradient-to-br from-cream-200 via-leaf-400 to-olive-600',
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
      className="glass-card group relative w-full overflow-visible rounded-none"
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
      {/* Target-Lock corner brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>

      {/* Dynamic Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 blur-xl"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${useTransform(mouseX, val => val + 200)}px ${useTransform(mouseY, val => val + 200)}px,
              rgba(136, 255, 0, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div style={{ transform: "translateZ(50px)" }}>
        {/* Project Image Placeholder with technical wireframes */}
        <div className={`h-60 w-full ${project.image} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/10 transition-colors duration-700"></div>
          
          {/* Grainy Mesh Overlay */}
          <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

          {/* Overlay Link Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 backdrop-blur-md bg-black/60">
            <a href="#" className="w-12 h-12 bg-leaf-400 text-black flex items-center justify-center hover:scale-115 transition-transform shadow-glow font-bold">
              <FiExternalLink size={18} />
            </a>
            <a href="#" className="w-12 h-12 bg-white text-black flex items-center justify-center hover:scale-115 transition-transform shadow-card">
              <FiGithub size={18} />
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-8 bg-[#0c0f0c] border-t border-white/5 relative">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-display text-2xl font-black text-white group-hover:text-leaf-400 transition-all duration-300 uppercase">
              {project.title}
            </h3>
          </div>
          
          <p className="font-creative text-slate-300 text-xs md:text-sm leading-relaxed mb-8 line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag, i) => (
              <span 
                key={i} 
                className="px-3 py-1 text-[9px] font-black font-creative uppercase tracking-widest text-leaf-400 bg-leaf-400/5 border border-leaf-400/10 group-hover:border-leaf-400/30 transition-colors"
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
    <section id="projects" className="py-32 relative bg-[#030503]">
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

        <div className="grid lg:grid-cols-2 gap-10 pointer-events-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-20 text-center pointer-events-auto">
          <a href="#" className="bracket-btn">
            View Archives
          </a>
        </div>
      </div>

      {/* Background atmospheric glowing dust */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-leaf-400/[0.02] blur-[150px] -z-10 rounded-full"></div>
    </section>
  )
}
