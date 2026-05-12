import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's <span className="text-gradient">Work Together</span></h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">Contact Details</h3>
              <p className="text-slate-300 leading-relaxed">
                Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-400/20">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:hello@example.com" className="text-slate-300 hover:text-cyan-400 transition-colors">hello@example.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-400/20">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-slate-300 hover:text-cyan-400 transition-colors">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-400/20">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-slate-300">San Francisco, CA</p>
                </div>
              </div>
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
            <form className="glass-card p-8 md:p-10 border-cyan-400/20 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="bg-navy-900/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="bg-navy-900/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="bg-navy-900/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="bg-navy-900/50 border border-glass-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-500 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full justify-center mt-2">
                Send Message <FiSend className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
