import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFileAlt,
} from "react-icons/fa"

const socialLinks = [
  {
    icon: <FaGithub size={18} />,
    href: "https://github.com/Sambit-7",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin size={18} />,
    href: "https://www.linkedin.com/in/sambit-saha-6b2601280/",
    label: "LinkedIn",
  },
  {
    icon: <FaEnvelope size={18} />,
    href: "mailto:sambitsaha201@gmail.com",
    label: "Email",
  },
  {
    icon: <FaInstagram size={18} />,
    href: "https://instagram.com/sambit.saha7",
    label: "Instagram",
  },
  {
    icon: <FaFileAlt size={18} />,
    href: "https://sambit-saha-resume.tiiny.site",
    label: "Resume",
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-black px-6 md:px-16 pt-16 pb-8 overflow-hidden border-t border-white/10">
      {/* background */}
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-[#7c7cff]/10 blur-3xl" />
      <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-[#7c7cff]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-3xl font-bold text-[#7c7cff] tracking-wide">
              SS
            </div>

            <p className="mt-6 text-xl md:text-2xl italic text-gray-300 max-w-xl">
              Perfection isn&apos;t the goal. Precision is.
            </p>
          </motion.div>

          {/* right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4 md:justify-end"
          >
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith("mailto:") || item.href === "/resume.pdf" ? "_self" : "_blank"}
                rel="noreferrer"
                aria-label={item.label}
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  text-gray-300
                  hover:text-white
                  hover:border-[#7c7cff]/40
                  hover:bg-[#7c7cff]/10
                  hover:shadow-[0_0_20px_rgba(124,124,255,0.18)]
                  transition
                  backdrop-blur-xl
                "
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Sambit Saha. All rights reserved.
        </div>
      </div>
    </footer>
  )
}