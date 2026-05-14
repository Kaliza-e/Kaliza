import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const posts = [
  {
    title: 'The Future of Web Development in 2026',
    date: 'May 10, 2026',
    category: 'Trends',
    excerpt: 'Exploring the new paradigms in frontend frameworks, serverless architectures, and AI integration.',
    image: 'bg-gradient-to-tr from-indigo-900 via-navy-900 to-fuchsia-900',
  },
  {
    title: 'Mastering Framer Motion in React',
    date: 'April 22, 2026',
    category: 'Tutorial',
    excerpt: 'A comprehensive guide to creating fluid, physics-based animations in modern React applications.',
    image: 'bg-gradient-to-tr from-navy-900 via-cyan-900 to-indigo-900',
  },
  {
    title: 'Designing for Accessibility First',
    date: 'March 15, 2026',
    category: 'Design',
    excerpt: 'Why inclusive design isn\'t just a nice-to-have, but a core requirement for successful digital products.',
    image: 'bg-gradient-to-tr from-fuchsia-900 via-navy-900 to-cyan-900',
  }
]

export default function Blog() {
  return (
    <section id="blog" className="py-32 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-400/5 blur-[120px] -z-10 rounded-full"></div>

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
              className="glass-card group flex flex-col h-full cursor-pointer hover:border-fuchsia-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Image Placeholder */}
              <div className={`h-56 w-full ${post.image} relative overflow-hidden shrink-0`}>
                <div className="absolute inset-0 bg-navy-900/60 group-hover:bg-navy-900/20 transition-all duration-700"></div>
                
                {/* Decorative Mesh */}
                <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

                <div className="absolute top-6 left-6 bg-navy-900/80 backdrop-blur-md border border-white/10 text-fuchsia-500 font-fancy text-[10px] font-black tracking-widest px-5 py-2 rounded-xl uppercase shadow-fuchsia">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="font-fancy text-[10px] font-black tracking-widest text-slate-500 uppercase mb-4">{post.date}</p>
                  <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-gradient transition-all duration-500 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-slate-400 text-sm leading-relaxed mb-10 line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center text-cyan-400 font-fancy text-[11px] font-black uppercase tracking-widest group-hover:translate-x-3 transition-transform duration-500">
                  Dive Deeper <FiArrowRight className="ml-3 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
