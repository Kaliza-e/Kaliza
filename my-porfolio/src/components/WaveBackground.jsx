import { motion } from "framer-motion"

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mesh-gradient">
      <div className="noise"></div>
      
      {/* Decorative Blur Orbs */}
      <motion.div 
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-cyan-400/20 rounded-full blur-[120px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-fuchsia-500/10 rounded-full blur-[150px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
