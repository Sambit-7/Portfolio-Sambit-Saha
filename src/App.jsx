import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"

import Intro from "./components/Intro"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* NAVBAR ALWAYS PRESENT */}
      <Navbar />

      {/* INTRO SCREEN */}
      <AnimatePresence>
        {loading && <Intro onSkip={() => setLoading(false)} />}
      </AnimatePresence>

      {/* MAIN WEBSITE */}
      {!loading && (
        <>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App