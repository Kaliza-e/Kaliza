import { motion, useTransform } from 'framer-motion'

export default function Navbar({ scrollProgress }) {
  // width goes from 0% to 100% based on scroll progress
  const progressWidth = useTransform(scrollProgress, [0, 1], ["0%", "100%"])

  return (
    <motion.nav
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md pointer-events-none"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
    >
      <div className="glass-card rounded-full p-2 flex items-center justify-between backdrop-blur-xl border-cyan-400/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        
        {/* Progress Text */}
        <div className="px-4 py-2 font-display font-bold text-white text-sm whitespace-nowrap">
          Scroll to explore
        </div>

        {/* Progress Bar Track */}
        <div className="flex-grow h-2 mx-4 bg-navy-900 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-grad-cyan rounded-full shadow-[0_0_10px_#00d4ff]"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Floating Indicator */}
        <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center border border-cyan-400/50 shadow-glow pointer-events-auto cursor-pointer hover:bg-cyan-400/30 transition-colors">
          <span className="text-cyan-400">❖</span>
        </div>
      </div>
    </motion.nav>
  )
}
