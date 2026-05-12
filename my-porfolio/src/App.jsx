import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // We have 7 sections (Hero, About, Projects, Skills, Blog, Contact, Footer)
  // Total width = 700vw. We want to slide left by -600vw (so the last section is visible)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.714%"]) // 6/7 = 85.714%

  return (
    <>
      <CustomCursor />
      <Navbar scrollProgress={scrollYProgress} />
      
      {/* 
        This tall container dictates how long the user has to scroll 
        down to complete the horizontal journey.
      */}
      <main ref={targetRef} className="relative h-[700vh] bg-navy-900">
        
        {/* Sticky container stays in view */}
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          
          {/* This translates horizontally based on scroll down */}
          <motion.div style={{ x }} className="flex h-full w-[700vw]">
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Blog />
            <Contact />
            <Footer />
          </motion.div>

        </div>
      </main>
    </>
  )
}

export default App
