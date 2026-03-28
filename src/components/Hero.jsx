import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { FaJava, FaPython, FaReact, FaNodeJs } from "react-icons/fa"
import { SiSpringboot, SiMongodb } from "react-icons/si"

/* ===== FLOATING SKILL BUBBLES DATA ===== */
const skills = [
  { icon: <FaPython />, top: "18%", left: "4%" },
  { icon: <FaJava />, top: "40%", left: "2%" },
  { icon: <FaReact />, top: "68%", left: "3%" },

  { icon: <SiSpringboot />, top: "20%", right: "4%" },
  { icon: <FaNodeJs />, top: "45%", right: "5%" },
  { icon: <SiMongodb />, top: "70%", right: "4%" },
]

const roles = [
  "Software Developer",
  "AI/ML Enthusiast",
  "App Developer",
  "Entrepreneur",
]

export default function Hero() {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 1200)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? currentRole.substring(0, prev.length - 1)
              : currentRole.substring(0, prev.length + 1)
          )
        },
        isDeleting ? 50 : 100
      )
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden pt-24 md:pt-28 px-4 sm:px-6 md:px-12 lg:px-16"
    >
      {/* ===== GRID BACKGROUND ===== */}
      <div className="hero-grid" />

      {/* ===== GLOW BLOBS ===== */}
      <div className="hero-bg" />
      <div className="hero-bg-noise" />

      {/* ===== FLOATING SKILL BUBBLES ===== */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden sm:block">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.9, scale: 1 }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 4.8 + i * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
            className="absolute"
            style={{
              top: skill.top,
              left: skill.left,
              right: skill.right,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-[#6d4aff]/25 blur-2xl scale-125" />
              <div
                className="
                  relative
                  w-14 h-14 md:w-[72px] md:h-[72px]
                  rounded-2xl
                  bg-[#151228]/85
                  border border-[#7c7cff]/20
                  backdrop-blur-xl
                  flex items-center justify-center
                  shadow-[0_0_30px_rgba(109,74,255,0.18)]
                  overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="absolute inset-2 rounded-xl bg-[#7c7cff]/[0.06] blur-md" />
                <div className="relative text-[26px] md:text-[34px] text-[#7c63ff] drop-shadow-[0_0_10px_rgba(124,99,255,0.55)]">
                  {skill.icon}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== FOREGROUND CONTENT ===== */}
      <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 items-center">
        {/* LEFT — TEXT */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I’m <span className="text-[#7c7cff]">Sambit Saha</span>
          </motion.h1>

          {/* TYPEWRITER ROLE */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-[#a5a2ff] min-h-[36px] sm:min-h-[40px]"
          >
            {text}
            <span className="animate-pulse text-[#7c7cff]">|</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-400 max-w-lg mx-auto md:mx-0"
          >
            Software Developer & M.Tech student passionate about building scalable
            systems and exploring AI & Machine Learning.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://github.com/Sambit-7"
              target="_blank"
              rel="noreferrer"
              className="px-5 sm:px-6 py-3 rounded-xl bg-[#7c7cff] text-black font-medium hover:opacity-90 transition"
            >
              GitHub Profile
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 sm:px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT — ANIMATED AVATAR */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative avatar-float"
            >
              <div className="absolute inset-0 rounded-full blur-3xl bg-[#7c7cff]/40 animate-pulse" />

              <motion.img
                src="/profile.jpg"
                alt="Sambit"
                whileHover={{ scale: 1.05 }}
                className="
                  relative
                  w-52 h-52
                  sm:w-60 sm:h-60
                  md:w-72 md:h-72
                  rounded-full
                  object-cover
                  border-4 border-[#7c7cff]
                  shadow-[0_0_40px_#7c7cff88]
                "
              />
            </motion.div>

            {/* TAG BELOW PHOTO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="
                mt-5 sm:mt-6
                px-4 sm:px-5 py-2.5 sm:py-3
                rounded-full
                bg-[#111118]/85
                border border-white/10
                backdrop-blur-xl
                flex items-center gap-3
                shadow-[0_0_20px_rgba(124,124,255,0.12)]
              "
            >
              <span className="w-3 h-3 rounded-full bg-[#f4a300] shadow-[0_0_10px_rgba(244,163,0,0.6)]" />
              <span className="text-sm sm:text-base text-gray-200 font-medium">
                M.Tech at IIT
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}