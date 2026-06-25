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
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-4 transition-all ${
          scrolled ? "bg-black/60 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-300 to-violet-500 flex items-center justify-center font-bold text-black">
            K
          </span>
          <span className="text-white font-semibold">Kaliza</span>
        </a>

        <ul className="hidden md:flex gap-8 text-white/70 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-white transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
        >
          Hire Me
        </a>

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