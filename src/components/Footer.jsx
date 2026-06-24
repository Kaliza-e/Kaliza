import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-violet-500 font-bold text-slate-950">
              K
            </span>
            <span className="font-display font-bold">KALIZA Esther</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-300/35 hover:text-cyan-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={19} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
