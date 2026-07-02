import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-[#818cf8] to-[#22d3ee] flex items-center justify-center text-[#050508] font-bold text-base">
              KE
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-white">Kaliza Esther</p>
              <p className="text-xs text-[#a0a0b0]">Full Stack Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#818cf8] hover:border-[#818cf8]/40 hover:bg-[#818cf8]/10 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#818cf8] hover:border-[#818cf8]/40 hover:bg-[#818cf8]/10 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:kalizaesther5@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-[#818cf8] hover:border-[#818cf8]/40 hover:bg-[#818cf8]/10 transition-all"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6b6b78]">
          <p>© {new Date().getFullYear()} Kaliza Esther. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
