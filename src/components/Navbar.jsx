import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <nav
        className={`mx-auto flex w-full max-w-[1200px] items-center justify-between py-4 transition-all ${scrolled ? "bg-black/60 backdrop-blur-xl" : "bg-transparent"
          }`}
        style={{ paddingInline: "clamp(1rem, 5vw, 2rem)" }}
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-widest uppercase text-white">
            KALIZA
          </span>
        </a>

        <ul className="hidden md:flex gap-10 text-white/60 text-xs font-bold uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a href="#contact" className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors">
            Hire me
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-6 mt-2 rounded-xl bg-black/70 backdrop-blur-xl p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white/80 hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}