import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Software Engineer",
    message: "Esther is a dedicated developer with great attention to detail and a passion for learning.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    message: "She has an excellent eye for design and creates clean, user-friendly interfaces.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Project Mentor",
    message: "Strong problem-solving skills and a genuine interest in building useful technology.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="site-section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header center"
        >
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-heading">What People Say</h2>
          <p className="section-copy">
            Kind words from people I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-7"
            >
              <Quote className="text-[#818cf8] h-7 w-7 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#818cf8] fill-[#818cf8]" />
                ))}
              </div>
              <p className="text-[#a0a0b0] leading-relaxed mb-5 text-sm">
                "{testimonial.message}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#818cf8] to-[#22d3ee] text-[#050508] font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-[#a0a0b0]">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
