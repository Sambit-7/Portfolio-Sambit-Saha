import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Intro({ onSkip }) {
  const text = "Welcome to my Portfolio"

  const [displayed, setDisplayed] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.substring(0, index + 1))
        setIndex(index + 1)
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* ===== STAR BACKGROUND ===== */}
      <div className="absolute inset-0 star-bg" />

      {/* ===== LOGO ===== */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
       animate={{
                rotate: [0, 6, -6, 0],
                scale: [1, 1.12, 1],
                opacity: 1,
            }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative mb-8 flex items-center justify-center"
      >
        {/* Outer glow */}
        <div className="absolute inset-0 scale-150 rounded-full bg-[#7c7cff]/30 blur-3xl" />

        {/* Strong center glow */}
        <div className="absolute w-32 h-32 rounded-full bg-[#7c7cff]/40 blur-2xl" />

        <img
          src="/logo.png"
          alt="logo"
          className="relative w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_0_25px_rgba(124,124,255,0.9)]"
        />
      </motion.div>

      {/* ===== TYPING TEXT ===== */}
      <h1
        className="text-3xl md:text-5xl font-semibold text-white tracking-widest z-10"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {displayed}
        <span className="animate-pulse">|</span>
      </h1>

      {/* ===== SKIP BUTTON ===== */}
      <button
        onClick={onSkip}
        className="
          absolute bottom-10
          px-5 py-2
          rounded-xl
          bg-white/10
          hover:bg-white/20
          text-sm
          text-gray-300
          transition
        "
      >
        Skip →
      </button>
    </motion.div>
  )
}