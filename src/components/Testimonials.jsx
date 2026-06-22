import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Software Engineer",
    message:
      "Esther is an exceptionally dedicated developer who consistently delivers high-quality work. She learns quickly and approaches every challenge with enthusiasm.",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    message:
      "Working with Esther was a pleasure. She has an eye for design and transforms ideas into beautiful, functional applications.",
  },
  {
    name: "Michael Brown",
    role: "Project Mentor",
    message:
      "Esther demonstrates strong problem-solving skills and an impressive passion for technology and innovation. I look forward to seeing her future achievements.",
  },
];
export default function Testimonials() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-10"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-2xl">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-purple-300">
                Testimonials
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              What people{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-indigo-400">
                say.
              </span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feedback from mentors, collaborators, and professionals I've
              worked with.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.article
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-2xl hover:border-purple-500/30 transition-all"
              >
                <Quote className="w-10 h-10 text-purple-300 mb-6" />

                <p className="text-muted-foreground leading-relaxed mb-8 italic">
                  "{testimonial.message}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}