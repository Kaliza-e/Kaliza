import { motion, useInView } from "framer-motion";
import { Code, Globe, Layout, Palette, Server, Smartphone } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Responsive React interfaces with clean component structure and accessible UI patterns.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "APIs, server-side logic, and database connections for practical web products.",
  },
  {
    icon: Palette,
    title: "UI Design",
    description:
      "Polished pages with strong spacing, hierarchy, typography, and visual consistency.",
  },
  {
    icon: Layout,
    title: "UX Design",
    description:
      "Simple user flows, wireframes, and screens that make products easier to understand.",
  },
  {
    icon: Smartphone,
    title: "Responsive Layouts",
    description:
      "Mobile-ready pages that stay readable and well-spaced across screen sizes.",
  },
  {
    icon: Globe,
    title: "Web Delivery",
    description:
      "Project setup, integration, testing, and deployment-minded implementation.",
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
          <p className="eyebrow">Services</p>
          <h2 className="section-heading">Ways I can help.</h2>
          <p className="section-copy">
            From interface design to backend implementation, I focus on building
            pages and apps that feel clear, stable, and useful.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="surface-card p-6"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-300/12 text-cyan-300">
                <service.icon size={22} />
              </div>
              <h3 className="font-display text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
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
