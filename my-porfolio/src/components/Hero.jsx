import { motion } from 'framer-motion'
import WaveBackground from './WaveBackground'
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import avatar1 from '../assets/avatar.png'
 // High-quality character portrait
export default function Hero() {
  return (
    <section id="home" className="snap-start relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[#0b0310]">
      <WaveBackground />

      {/* Soft rose mesh glow behind visual assets */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0310]/80 via-transparent to-[#0b0310] pointer-events-none z-10"></div>

      {/* Massive Faint Backdrop Text - Outlined */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <h2 className="text-[9vw] font-display font-black uppercase text-outline tracking-[0.2em] opacity-30 translate-y-8">
          KALIZA
        </h2>
      </div>

      {/* Left Sidebar Channel (Vertical Menu & Page Indicator) */}
      <div className="absolute left-6 md:left-12 bottom-12 top-28 w-10 hidden lg:flex flex-col justify-between items-center z-30 pointer-events-auto">
        {/* Minimalist Hamburger representation as vertical lines */}
        <div className="flex flex-col gap-1.5 cursor-pointer group p-2">
          <span className="w-6 h-0.5 bg-white group-hover:bg-rose-400 group-hover:translate-x-1 transition-all"></span>
          <span className="w-5 h-0.5 bg-white group-hover:bg-rose-400 transition-all"></span>
          <span className="w-6 h-0.5 bg-white group-hover:bg-rose-400 group-hover:-translate-x-1 transition-all"></span>
        </div>

        {/* Page counter oriented vertically */}
        <div className="font-creative text-xs font-black tracking-[0.4em] text-white/40 uppercase rotate-90 origin-center my-8 whitespace-nowrap">
          <span className="text-rose-400">01</span> / 07
        </div>
      </div>

      {/* Right Sidebar Channel (Vertical Social Handles) */}
      <div className="absolute right-6 md:right-12 bottom-12 top-28 w-10 hidden lg:flex flex-col justify-center items-center z-30 pointer-events-auto">
        <div className="flex flex-col gap-8 items-center">
          {[
            { icon: <FaFacebookF size={14} />, link: "https://facebook.com" },
            { icon: <FaWhatsapp size={14} />, link: "https://wa.me" },
            { icon: <FaInstagram size={14} />, link: "https://instagram.com" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-rose-400 transition-all duration-300 transform hover:scale-125 p-2"
            >
              {item.icon}
            </a>
          ))}
          {/* Vertical dividing wire */}
          <div className="w-[1px] h-20 bg-white/10 mt-2"></div>
        </div>
      </div>

      {/* Core Main Grid container */}
      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-20 grid lg:grid-cols-12 gap-12 lg:gap-6 items-center w-full min-h-[calc(100vh-160px)]">

        {/* Left Side Content - taking 7/12 grid spaces */}
        <motion.div
          className="lg:col-span-7 text-left flex flex-col items-start pt-6 lg:pt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Accent Line-decorated Tagline */}
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-[1px] bg-rose-400"></span>
            <span className="font-creative text-[10px] md:text-xs font-black tracking-[0.5em] text-white uppercase">
              KALIZA PROD™
            </span>
          </div>

          {/* Main Huge Title */}
         
          {/* Secondary Glow Tagline below Title */}
          <div className="mb-12 font-creative text-left">
            <h2 className="text-rose-400 text-lg md:text-xl font-bold tracking-[0.2em] uppercase leading-none mb-1 text-glow">
              " There is a Developer "
            </h2>
            <p className="text-white text-xs md:text-sm font-black tracking-[0.3em] uppercase opacity-60">
              inside all of us, waiting to be unleashed. Let's code the future together.
            </p>
          </div>

          {/* Cyberpunk framed interactive Action Button */}
          <div className="flex flex-wrap gap-6 items-center">
            <a href="#projects" className="bracket-btn pointer-events-auto">
              DISCOVER
            </a>
          </div>
        </motion.div>

        {/* Right Side Visual Elements - taking 5/12 grid spaces */}
        <motion.div
          className="lg:col-span-5 relative flex justify-center lg:justify-end h-full w-full select-none"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5] flex items-center justify-center">

            {/* Massive Spray-paint Graffiti Backdrop text "JINX" */}
            <div className="absolute -top-6 lg:-top-12 left-0 lg:-left-12 font-display text-[9rem] md:text-[11rem] lg:text-[12rem] font-black text-graffiti select-none pointer-events-none opacity-80 z-0 tracking-tighter -rotate-12 transform">
              JINX
            </div>

            {/* Glowing neon rings/sparks in background */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-rose-400/25 rounded-full blur-[80px] z-0 animate-pulse pointer-events-none"></div>

            {/* High-quality character portrait inside styled brackets */}
            <div className="relative w-full h-[85%] z-10 overflow-hidden border border-white/10 shadow-neon">
              {/* Corner accent bracket markers */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-rose-400 z-20"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-rose-400 z-20"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-rose-400 z-20"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-rose-400 z-20"></div>

              <img
                src={avatar1}
                alt="Cyberpunk Developer Jinx Aesthetic"
                className="w-full h-full object-cover brightness-[0.85] hover:brightness-[1.0] transition-all duration-700 hover:scale-105"
              />
              {/* Dark mist overlay at the bottom of the portrait */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b0310] via-[#0b0310]/40 to-transparent z-20"></div>
            </div>

            {/* Copyright indicator framing the portrait */}
            <div className="absolute bottom-0 right-0 font-creative text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.2em] z-20 pr-1">
              © 2026 KALIZA PRODUCTIONS INC.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Mouse Scroll Pulse Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
        <a href="#about" className="flex flex-col items-center gap-2 cursor-pointer group">
          <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center p-1 hover:border-rose-400 transition-all duration-300">
            <motion.div
              className="w-1 h-2 bg-rose-400 rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </a>
      </div>
    </section>
  )
}

