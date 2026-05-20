import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#030503]">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-leaf-400/[0.015] blur-[150px] -z-10 rounded-full"></div>

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
              <h3 className="font-display text-3xl font-black text-white mb-6 uppercase tracking-wider">Contact Details</h3>
              <p className="font-creative text-slate-300 text-sm leading-relaxed opacity-70">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects and creative ideas.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: FiMail, label: 'Email', value: 'hello@estherkaliza.com', href: 'mailto:hello@estherkaliza.com', color: 'text-leaf-400', bg: 'bg-leaf-400/5' },
                { icon: FiPhone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890', color: 'text-leaf-300', bg: 'bg-leaf-400/5' },
                { icon: FiMapPin, label: 'Location', value: 'San Francisco, CA', color: 'text-leaf-400', bg: 'bg-leaf-400/5' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group relative">
                  <div className={`w-12 h-12 ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-leaf-400 transition-all duration-300 shadow-glow rounded-none`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-creative text-[9px] font-black tracking-[0.25em] uppercase text-slate-500 mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="font-creative uppercase tracking-wider text-white text-sm hover:text-leaf-400 transition-all">{item.value}</a>
                    ) : (
                      <p className="font-creative uppercase tracking-wider text-white text-sm">{item.value}</p>
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
            <form className="glass-card p-8 flex flex-col gap-6 rounded-none relative" onSubmit={(e) => e.preventDefault()}>
              {/* Target-Lock corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-leaf-400/30 group-hover:border-leaf-400 z-20 transition-colors"></div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="name" className="font-creative text-[9px] font-black tracking-[0.25em] uppercase text-slate-400 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-black/50 border border-white/10 rounded-none px-5 py-3.5 text-white focus:outline-none focus:border-leaf-400 focus:ring-1 focus:ring-leaf-400 transition-all placeholder:text-slate-700 font-creative text-xs uppercase tracking-wider"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email" className="font-creative text-[9px] font-black tracking-[0.25em] uppercase text-slate-400 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-black/50 border border-white/10 rounded-none px-5 py-3.5 text-white focus:outline-none focus:border-leaf-400 focus:ring-1 focus:ring-leaf-400 transition-all placeholder:text-slate-700 font-creative text-xs uppercase tracking-wider"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2.5">
                <label htmlFor="subject" className="font-creative text-[9px] font-black tracking-[0.25em] uppercase text-slate-400 ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-black/50 border border-white/10 rounded-none px-5 py-3.5 text-white focus:outline-none focus:border-leaf-400 focus:ring-1 focus:ring-leaf-400 transition-all placeholder:text-slate-700 font-creative text-xs uppercase tracking-wider"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="font-creative text-[9px] font-black tracking-[0.25em] uppercase text-slate-400 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="bg-black/50 border border-white/10 rounded-none px-5 py-3.5 text-white focus:outline-none focus:border-leaf-400 focus:ring-1 focus:ring-leaf-400 transition-all placeholder:text-slate-700 font-creative text-xs uppercase tracking-wider resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-4 text-xs font-black uppercase tracking-widest group">
                Send Message 
                <FiSend className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-black" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
