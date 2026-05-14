import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-leaf-400/5 blur-[150px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">Let's Craft Something <br/><span className="text-gradient">Extraordinary</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-12"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="font-display text-4xl font-bold text-white mb-6">Contact Details</h3>
              <p className="font-body text-slate-300 text-lg leading-relaxed opacity-70">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: FiMail, label: 'Email', value: 'hello@estherkaliza.com', href: 'mailto:hello@estherkaliza.com', color: 'text-leaf-400', bg: 'bg-leaf-400/10' },
                { icon: FiPhone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890', color: 'text-cream-200', bg: 'bg-cream-200/10' },
                { icon: FiMapPin, label: 'Location', value: 'San Francisco, CA', color: 'text-leaf-400', bg: 'bg-leaf-400/10' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 border border-white/5 group-hover:scale-110 transition-all duration-300 shadow-glow`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-fancy text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="font-body text-white text-lg hover:text-gradient transition-all">{item.value}</a>
                    ) : (
                      <p className="font-body text-white text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-card p-10 flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="font-fancy text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-leaf-400 focus:ring-1 focus:ring-leaf-400 transition-all placeholder:text-slate-600 font-body"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="font-fancy text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cream-200 focus:ring-1 focus:ring-cream-200 transition-all placeholder:text-slate-600 font-body"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <label htmlFor="subject" className="font-fancy text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-leaf-400 focus:ring-1 focus:ring-leaf-400 transition-all placeholder:text-slate-600 font-body"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="message" className="font-fancy text-[10px] font-black tracking-[0.2em] uppercase text-slate-400 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cream-200 focus:ring-1 focus:ring-cream-200 transition-all placeholder:text-slate-600 font-body resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-5 text-lg group">
                Send Message 
                <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-forest-900" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
