import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [hidden, setHidden] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springX = useSpring(mouseX, { stiffness: 500, damping: 35 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 35 })

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 10)
      mouseY.set(e.clientY - 10)
      setHidden(false)
    }

    const hideCursor = () => setHidden(true)
    const showCursor = () => setHidden(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseleave", hideCursor)
    window.addEventListener("mouseenter", showCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseleave", hideCursor)
      window.removeEventListener("mouseenter", showCursor)
    }
  }, [mouseX, mouseY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          opacity: hidden ? 0 : 1,
        }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute w-10 h-10 rounded-full bg-[#7c7cff]/20 blur-md" />
          <div className="w-5 h-5 rounded-full bg-[#5f57ff] border border-[#a8a4ff]/70 shadow-[0_0_20px_rgba(124,124,255,0.55)]" />
        </div>
      </motion.div>
    </>
  )
}