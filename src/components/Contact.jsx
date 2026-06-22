import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope,FaTwitter } from "react-icons/fa";

import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async () => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = () => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kalizaesther5@gmail.com" },
    { icon: MapPin, label: "Location", value: "Rwanda" },
    { icon: Phone, label: "Phone", value: "+250 788 659 351" },
  ];

  const socials = [
    { icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4"
        >
          {/* Header widget */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-12 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">Contact</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight">
                Let's build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-400 italic">
                  something.
                </span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Have a project in mind or just want to say hi? Drop a message — I usually reply within a day.
            </p>
          </motion.div>

          {/* Form widget */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit" disabled={isSubmitting}
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold tracking-wide flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={16} />}
              </motion.button>
            </form>
          </motion.div>

          {/* Info column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 grid grid-cols-1 gap-4">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.label === "Email" ? `mailto:${info.value}` : info.label === "Phone" ? `tel:${info.value.replace(/\s/g, "")}` : "#"}
                className="group p-5 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl flex items-center gap-4 hover:border-purple-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center">
                  <info.icon className="w-5 h-5 text-purple-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{info.label}</p>
                  <p className="font-semibold text-foreground truncate">{info.value}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            <div className="p-5 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Follow</p>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-purple-300 hover:bg-white/10 transition-colors"
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-[2rem] bg-gradient-to-br from-purple-600/20 to-indigo-700/20 border border-purple-500/20 backdrop-blur-3xl">
              <p className="text-foreground italic leading-relaxed text-sm">
                "The only way to do great work is to love what you do."
              </p>
              <p className="text-xs text-purple-300 mt-2 font-medium">— Steve Jobs</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;