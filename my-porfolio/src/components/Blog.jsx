import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const posts = [
  {
    title: 'The Future of Web Development in 2026',
    date: 'May 10, 2026',
    category: 'Trends',
    excerpt: 'Exploring the new paradigms in frontend frameworks, serverless architectures, and AI integration.',
    image: 'bg-gradient-to-tr from-navy-800 to-cyan-900',
  },
  {
    title: 'Mastering Framer Motion in React',
    date: 'April 22, 2026',
    category: 'Tutorial',
    excerpt: 'A comprehensive guide to creating fluid, physics-based animations in modern React applications.',
    image: 'bg-gradient-to-tr from-navy-800 to-teal-900',
  },
  {
    title: 'Designing for Accessibility First',
    date: 'March 15, 2026',
    category: 'Design',
    excerpt: 'Why inclusive design isn\'t just a nice-to-have, but a core requirement for successful digital products.',
    image: 'bg-gradient-to-tr from-navy-800 to-blue-900',
  }
]

export default function Blog() {
  return (
    <section id="blog" className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-navy-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Insights</span>
          <h2 className="section-title text-5xl md:text-6xl">Latest <span className="text-gradient">Articles</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              className="glass-card group flex flex-col h-[450px] cursor-pointer hover:border-cyan-400/50 transition-colors duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Image Placeholder */}
              <div className={`h-56 w-full ${post.image} relative overflow-hidden shrink-0`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                <motion.div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-grad-card mix-blend-overlay transition-opacity duration-500"
                ></motion.div>
                
                <div className="absolute top-4 left-4 bg-navy-900/80 backdrop-blur-md border border-cyan-400/20 text-cyan-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-slate-400 text-sm mb-3 font-medium tracking-wide">{post.date}</p>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center text-cyan-400 text-sm font-bold uppercase tracking-widest group-hover:translate-x-4 transition-transform duration-300">
                  Read More <FiArrowRight className="ml-3" size={18} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
