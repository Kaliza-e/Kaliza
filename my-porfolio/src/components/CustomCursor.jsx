import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      // Scale up cursor on interactive elements
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('glass-card')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Inner glowing core locator */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-leaf-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      {/* Outer dashed spinning scanner crosshair */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-dashed border-leaf-400/40 rounded-full pointer-events-none z-[9998] mix-blend-screen shadow-glow"
        animate={{
          x: mousePosition.x - 18,
          y: mousePosition.y - 18,
          scale: isHovering ? 1.8 : 1,
          rotate: isHovering ? 90 : 0,
          borderColor: isHovering ? '#88ff00' : 'rgba(136, 255, 0, 0.3)',
          backgroundColor: isHovering ? 'rgba(136, 255, 0, 0.04)' : 'rgba(136, 255, 0, 0)'
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
      />
    </>
  )
}
