import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Software Engineer",
    message:
      "Esther is a dedicated developer who learns quickly and approaches technical challenges with care.",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    message:
      "She has a strong eye for clean layouts and can turn rough ideas into practical interfaces.",
  },
  {
    name: "Michael Brown",
    role: "Project Mentor",
    message:
      "Esther shows strong problem-solving skills and a clear passion for building useful technology.",
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
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-heading">Feedback from collaborators.</h2>
          <p className="section-copy">
            A few words from people connected to my learning and project work.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.06 }}
              className="p-4 sm:p-6"
            >
              <Quote className="mb-5 h-8 w-8 text-cyan-300" />
              <p className="text-sm leading-7 text-muted-foreground">
                "{testimonial.message}"
              </p>
              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-violet-500 font-bold text-slate-950">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
