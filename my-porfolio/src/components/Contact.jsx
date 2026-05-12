import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-navy-800/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title text-5xl md:text-6xl">Let's <span className="text-gradient">Work Together</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 max-w-6xl mx-auto items-center">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-4xl font-display font-bold text-white mb-6">Contact Details</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-400/20 group-hover:bg-cyan-400 group-hover:text-navy-900 transition-colors duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-slate-300 text-lg group-hover:text-cyan-400 transition-colors">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-400/20 group-hover:bg-cyan-400 group-hover:text-navy-900 transition-colors duration-300">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-slate-300 text-lg group-hover:text-cyan-400 transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-400/20">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">Location</h4>
                  <p className="text-slate-300 text-lg">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-card p-10 md:p-12 border-cyan-400/20 flex flex-col gap-8 shadow-2xl relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <div className="grid md:grid-cols-2 gap-8 relative z-10">
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="text-sm font-bold text-slate-300 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-navy-900/60 border border-glass-border rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="text-sm font-bold text-slate-300 uppercase tracking-wider">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-navy-900/60 border border-glass-border rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-3 relative z-10">
                <label htmlFor="subject" className="text-sm font-bold text-slate-300 uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-navy-900/60 border border-glass-border rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-3 relative z-10">
                <label htmlFor="message" className="text-sm font-bold text-slate-300 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="bg-navy-900/60 border border-glass-border rounded-xl px-5 py-4 text-white text-lg focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full justify-center text-lg py-5 mt-4 relative z-10 pointer-events-auto">
                Send Message <FiSend className="ml-3" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
