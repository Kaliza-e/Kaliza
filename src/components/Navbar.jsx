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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled ? "border-b border-white/10 bg-[#05070d]/82 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl" : "py-5"
      }`}
    >
      <nav className="section-container flex items-center justify-between gap-5">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-violet-500 font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
            K
          </span>
          <span className="font-display text-xl font-bold tracking-tight">Kaliza</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.045] p-1 shadow-lg shadow-black/10 backdrop-blur md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link block rounded-md px-3.5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-white/8 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="primary-link hidden md:inline-flex">
          Hire Me
        </a>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-cyan-300/40 hover:text-cyan-200 md:hidden"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="section-container mt-3 rounded-lg border border-white/10 bg-[#05070d]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-semibold text-muted-foreground hover:bg-white/8 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
