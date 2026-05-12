import { motion } from "framer-motion"

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <motion.svg
        className="absolute w-full h-[120%] -left-[10%] -top-[10%] opacity-60 mix-blend-screen"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.6 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.path
          fill="none"
          stroke="url(#gradient-1)"
          strokeWidth="4"
          d="M0,500 Q250,300 500,500 T1000,500"
          animate={{
            d: [
              "M0,500 Q250,300 500,500 T1000,500",
              "M0,500 Q250,700 500,500 T1000,500",
              "M0,500 Q250,300 500,500 T1000,500"
            ]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.path
          fill="none"
          stroke="url(#gradient-2)"
          strokeWidth="3"
          d="M0,600 Q250,400 500,600 T1000,600"
          animate={{
            d: [
              "M0,600 Q250,400 500,600 T1000,600",
              "M0,600 Q250,800 500,600 T1000,600",
              "M0,600 Q250,400 500,600 T1000,600"
            ]
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />

        <defs>
          <linearGradient id="gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </motion.svg>
      
      {/* Shiny background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[150px] mix-blend-screen" style={{ animation: 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
    </div>
  )
}
