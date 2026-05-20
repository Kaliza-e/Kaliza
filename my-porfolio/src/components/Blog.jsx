import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const posts = [
  {
    title: 'The Future of Web Development in 2026',
    date: 'May 10, 2026',
    category: 'Trends',
    excerpt: 'Exploring the new paradigms in frontend frameworks, serverless architectures, and AI integration.',
    image: 'bg-gradient-to-tr from-forest-800 via-leaf-400 to-olive-500',
  },
  {
    title: 'Mastering Framer Motion in React',
    date: 'April 22, 2026',
    category: 'Tutorial',
    excerpt: 'A comprehensive guide to creating fluid, physics-based animations in modern React applications.',
    image: 'bg-gradient-to-tr from-forest-900 via-olive-400 to-leaf-300',
  },
  {
    title: 'Designing for Accessibility First',
    date: 'March 15, 2026',
    category: 'Design',
    excerpt: 'Why inclusive design isn\'t just a nice-to-have, but a core requirement for successful digital products.',
    image: 'bg-gradient-to-tr from-cream-200 via-leaf-400 to-forest-800',
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-32 relative overflow-hidden bg-[#030503]">
      {/* Background Decorative Element */}
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-leaf-400/[0.02] blur-[120px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">LATEST INSIGHTS</span>
          <h2 className="section-title">Fresh <span className="text-gradient">Perspectives</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className="glass-card group flex flex-col h-full cursor-pointer hover:border-leaf-400/20 transition-all duration-500 relative rounded-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Target-Lock corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>

              {/* Image Placeholder */}
              <div className={`h-52 w-full ${post.image} relative overflow-hidden shrink-0`}>
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-700"></div>

                {/* Grainy Mesh */}
                <div className="absolute inset-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

                <div className="absolute top-4 left-4 bg-black/90 border border-white/10 text-leaf-400 font-creative text-[9px] font-black tracking-widest px-4 py-1.5 rounded-none uppercase shadow-glow">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-[#0c0f0c] border-t border-white/5 flex-grow flex flex-col justify-between">
                <div>
                  <p className="font-creative text-[9px] font-black tracking-widest text-slate-500 uppercase mb-3">{post.date}</p>
                  <h3 className="text-xl font-display font-black text-white mb-3 group-hover:text-leaf-400 transition-all duration-300 line-clamp-2 uppercase tracking-wide">
                    {post.title}
                  </h3>
                  <p className="font-creative text-slate-400 text-xs leading-relaxed mb-8 line-clamp-3 opacity-70 group-hover:opacity-100 transition-opacity">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center text-leaf-400 font-creative text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-500">
                  Dive Deeper <FiArrowRight className="ml-3 group-hover:scale-115 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
