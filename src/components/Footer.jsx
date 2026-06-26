import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8">
      <div className="section-container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="font-display text-lg font-bold tracking-widest uppercase text-white">
              KALIZA
            </span>
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/5 text-muted-foreground transition hover:text-cyan-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={19} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
