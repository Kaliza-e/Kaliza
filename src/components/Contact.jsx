import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "kalizaesther5@gmail.com", href: "mailto:kalizaesther5@gmail.com" },
  { icon: Phone, label: "Phone", value: "+250 788 659 351", href: "tel:+250788659351" },
  { icon: MapPin, label: "Location", value: "Rwanda", href: "#" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    toast.success("Message sent successfully. I will get back to you soon.");
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
          className="section-header"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading">Let us build something useful.</h2>
          <p className="section-copy">
            Have a project, collaboration, or question in mind? Send a message
            and I will reply as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            onSubmit={handleSubmit}
            className="surface-card space-y-5 p-6 sm:p-7"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-foreground outline-none transition focus:border-purple-400/60 focus:ring-2 focus:ring-purple-500/20"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" disabled={isSubmitting} className="primary-link w-full disabled:opacity-60">
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <Send size={17} />}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="space-y-4"
          >
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="surface-card flex items-center gap-4 p-5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
                  <info.icon size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {info.label}
                  </span>
                  <span className="block truncate font-semibold">{info.value}</span>
                </span>
                <ArrowRight size={17} className="text-muted-foreground" />
              </a>
            ))}

            <div className="surface-card p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Follow
              </p>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground hover:text-purple-300"
                  >
                    <social.icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
