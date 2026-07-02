import { motion, useInView } from "framer-motion";
import { Code, Globe, Layout, Palette, Server, Smartphone } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive, accessible interfaces with modern frameworks and clean code.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Creating robust APIs and server-side logic for scalable applications.",
  },
  {
    icon: Palette,
    title: "UI Design",
    description: "Designing elegant, user-friendly interfaces with attention to detail.",
  },
  {
    icon: Layout,
    title: "UX Design",
    description: "Crafting intuitive user experiences and thoughtful product flows.",
  },
  {
    icon: Smartphone,
    title: "Responsive Layouts",
    description: "Ensuring perfect experience across all devices and screen sizes.",
  },
  {
    icon: Globe,
    title: "Web Delivery",
    description: "End-to-end implementation from concept to deployment.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="site-section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="section-header center"
        >
          <span className="eyebrow">Services</span>
          <h2 className="section-heading">What I Can Do</h2>
          <p className="section-copy">
            A comprehensive set of services to help you build great products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#818cf8]/10 text-[#818cf8] mb-5">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-[#a0a0b0] leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
