import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

/* ===== CARD ANIMATION VARIANT ===== */
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

/* ===== SCROLL-AWARE COUNT-UP HOOK ===== */
function useCountUp(target, start) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let current = 0
    const increment = target / 60

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, start])

  return count
}

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  })

  const years = useCountUp(2, isInView)
  const projects = useCountUp(15, isInView)

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 md:px-16"
    >
      {/* ===== SECTION HEADER ===== */}
      <div className="text-center mb-20">
        <span className="inline-block px-4 py-1 mb-6 text-sm rounded-full bg-white/10 border border-white/10 text-[#7c7cff]">
          About Me
        </span>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Crafting Digital
          <br />
          Experiences
        </h2>
      </div>

      {/* ===== CARDS ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ===== LEFT CARD — JOURNEY ===== */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative
            bg-white/5
            border border-white/10
            rounded-3xl
            p-8 md:p-10
            backdrop-blur-xl
            hover:border-[#7c7cff]/40
            hover:scale-[1.02]
            transition-transform duration-300
          "
        >
          <div className="about-glow" />

          <h3 className="text-2xl font-semibold mb-4">
            My Journey
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I began my journey in technology with curiosity and a strong desire
            to understand how systems work. Over time, this curiosity transformed
            into a passion for building scalable software solutions, intelligent
            systems, and meaningful digital experiences using modern technologies
            and AI.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h4 className="text-3xl font-bold text-[#7c7cff]">
                {years}+
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Years Coding
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-[#7c7cff]">
                {projects}+
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Projects Built
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-[#7c7cff]">
                IIT
              </h4>
              <p className="text-sm text-gray-400 mt-1">
                Institution
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT CARD — EDUCATION ===== */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="
            relative
            bg-white/5
            border border-white/10
            rounded-3xl
            p-8 md:p-10
            backdrop-blur-xl
            hover:border-[#7c7cff]/40
            hover:scale-[1.02]
            transition-transform duration-300
          "
        >
          <div className="about-glow" />

         {/* EDUCATION LOGO — PERFECT CIRCLE */}
<div
  className="
    w-12 h-12
    mb-6
    rounded-full
    flex items-center justify-center
    shadow-[0_0_12px_rgba(59,130,246,0.6)]
    hover:shadow-[0_0_18px_rgba(59,130,246,0.9)]
    transition-all duration-300
  "
>
  <img
    src="/education.png"
    alt="Education"
    className="w-full h-full object-contain rounded-full"
  />
</div>

          <h3 className="text-2xl font-semibold mb-6">
            Education
          </h3>

          {/* MTECH */}
          <div className="mb-6">
            <p className="text-gray-300 font-medium">
              M.Tech in Geomatics
            </p>
            <p className="text-gray-400">
              IIT (ISM) Dhanbad
            </p>
            <p className="text-sm text-gray-500 mt-1">
              2024 – Present
            </p>
          </div>

          {/* BTECH */}
          <div>
            <p className="text-gray-300 font-medium">
              B.Tech in Information Technology
            </p>
            <p className="text-gray-400">
              St. Thomas’ College of Engineering & Technology, Kolkata
            </p>
            <p className="text-sm text-gray-500 mt-1">
              2020 – 2024
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
