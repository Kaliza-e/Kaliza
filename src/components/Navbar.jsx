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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav
        className={`mx-auto flex w-full max-w-7xl items-center justify-between py-4 transition-all duration-300 ${scrolled ? "bg-[#050508]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent py-6"}`}
        style={{ paddingInline: "clamp(1rem, 4vw, 2.5rem)" }}
      >
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-[#818cf8] to-[#22d3ee] flex items-center justify-center text-[#050508] font-bold text-base">
            KE
          </div>
          <span className="font-display text-xl font-semibold tracking-wide text-white">
            Kaliza Esther
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-white/70 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-[#818cf8] transition-colors duration-300">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a href="#contact" className="btn-primary text-sm">
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:border-[#818cf8]/40 hover:bg-[#818cf8]/10 transition-all"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-4 mt-2 rounded-2xl bg-[#050508]/95 backdrop-blur-xl p-6 border border-white/10"
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-white/80 hover:text-[#818cf8] hover:bg-white/5 rounded-xl transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full justify-center mt-4"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
