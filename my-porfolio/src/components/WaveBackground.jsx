import { motion } from "framer-motion"

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mesh-gradient">
      <div className="noise"></div>
      
      {/* Dynamic Gaming Atmosphere Orbs */}
      <motion.div 
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-leaf-400/8 rounded-full blur-[140px]"
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] bg-leaf-500/5 rounded-full blur-[160px]"
        animate={{
          x: [0, -50, 0],
          y: [0, -70, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[35%] left-[25%] w-[30%] h-[30%] bg-leaf-400/5 rounded-full blur-[110px]"
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
