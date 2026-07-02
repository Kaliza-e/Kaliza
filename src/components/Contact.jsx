import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail, Phone, MessageSquare } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kalizaesther5@gmail.com",
    href: "mailto:kalizaesther5@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+250 788 659 351",
    href: "tel:+250788659351",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kigali, Rwanda",
    href: "#",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="site-section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header center mb-12"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading">Let's Work Together</h2>
          <p className="section-copy">
            Have a project in mind? Let's talk about it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="text-[#818cf8]" size={20} />
              <h3 className="text-xl font-semibold">Send a Message</h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className="form-label block mb-1.5">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="form-field w-full"
                />
              </div>

              <div>
                <label className="form-label block mb-1.5">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="form-field w-full"
                />
              </div>

              <div>
                <label className="form-label block mb-1.5">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="form-field w-full resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send size={16} />
                  </span>
                )}
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                className="glass-card p-6 flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#818cf8]/10 text-[#818cf8] group-hover:bg-[#818cf8]/20 transition-colors">
                  <info.icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#a0a0b0] uppercase tracking-wider font-medium mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium text-white group-hover:text-[#818cf8] transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="glass-card p-6 bg-gradient-to-br from-[#818cf8]/10 to-transparent border-[#818cf8]/20">
              <p className="text-sm text-[#a0a0b0] leading-relaxed">
                Currently open for freelance projects, internships, and junior developer roles. 
                Response time: within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
