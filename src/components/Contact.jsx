import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
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
    toast.success("Message sent! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="site-section">
      <div className="section-container" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading">Let's work together.</h2>
          <p className="section-copy">
            I'm currently available for freelance work and open to new opportunities.
            Drop me a message and I'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

          {/* ── Form ── */}
          <motion.form
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card p-7 sm:p-8 flex flex-col gap-6"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Kaliza Esther"
                className="form-field"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="hello@example.com"
                className="form-field"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="form-field"
                style={{ resize: "none" }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary self-start"
              style={{ marginTop: 4 }}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending…
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={15} />
                  Send Message
                </span>
              )}
            </button>
          </motion.form>

          {/* ── Contact info ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="glass-card flex items-center gap-5 p-5 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors"
                  style={{
                    background: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.15)",
                    color: "#22d3ee",
                  }}
                >
                  <info.icon size={18} />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    {info.label}
                  </p>
                  <p
                    className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors"
                  >
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability note */}
            <div
              className="rounded-xl p-5 mt-2"
              style={{
                background: "rgba(34,211,238,0.04)",
                border: "1px solid rgba(34,211,238,0.12)",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#22d3ee" }}
              >
                Availability
              </p>
              <p
                className="text-sm leading-6"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Currently open to freelance projects, internship opportunities,
                and junior developer roles. Response time: within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
