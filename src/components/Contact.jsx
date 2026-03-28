import { motion } from "framer-motion"
import { useRef, useState } from "react"
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa"

const contactCards = [
  {
    icon: <FaEnvelope size={22} />,
    title: "Email",
    text: "sambitsaha201@gmail.com",
    link: "sambitsaha201@gmail.com",
    cta: "Send Email",
  },
  {
    icon: <FaLinkedin size={22} />,
    title: "LinkedIn",
    text: "Let’s connect professionally",
    link: "https://www.linkedin.com/in/sambit-saha-6b2601280/",
    cta: "Connect",
  },
  {
    icon: <FaGithub size={22} />,
    title: "GitHub",
    text: "Check out my repositories",
    link: "https://github.com/Sambit-7",
    cta: "Follow",
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleFakeSubmit = (e) => {
    e.preventDefault()

    setShowSuccess(true)

    if (formRef.current) {
      formRef.current.reset()
    }

    setTimeout(() => {
      setShowSuccess(false)
    }, 2500)
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-16 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 hero-grid opacity-35" />
      <div className="absolute left-10 top-20 w-72 h-72 rounded-full bg-[#7c7cff]/10 blur-3xl" />
      <div className="absolute right-10 bottom-10 w-80 h-80 rounded-full bg-[#7c7cff]/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-[#7c7cff]/20 bg-white/5 text-[#8d88ff] text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let’s Build Something Amazing Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="grid gap-6">
            {contactCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                target={card.link.startsWith("mailto:") ? "_self" : "_blank"}
                rel="noreferrer"
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(124,124,255,0.06)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7c7cff]/10 via-transparent to-transparent" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#7c7cff]/20 border border-[#7c7cff]/20 flex items-center justify-center text-[#a8a4ff] mb-6 shadow-[0_0_18px_rgba(124,124,255,0.2)]">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-gray-400">{card.text}</p>
                  <span className="inline-block mt-6 text-[#7c7cff] font-medium group-hover:translate-x-1 transition">
                    {card.cta}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(124,124,255,0.06)]"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7c7cff]/10 via-transparent to-transparent" />

            <form
              ref={formRef}
              onSubmit={handleFakeSubmit}
              className="relative space-y-5"
            >
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white outline-none focus:border-[#7c7cff]/40"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white outline-none focus:border-[#7c7cff]/40"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white outline-none focus:border-[#7c7cff]/40"
              />
              <textarea
                rows="6"
                placeholder="Your Message"
                required
                className="w-full rounded-2xl bg-black/20 border border-white/10 px-5 py-4 text-white outline-none resize-none focus:border-[#7c7cff]/40"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-[#6f63ff] hover:bg-[#7c7cff] text-white font-semibold shadow-[0_0_25px_rgba(124,124,255,0.35)] transition"
              >
                <FaPaperPlane size={16} />
                Send Message
              </button>
            </form>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-24 bottom-24 w-6 h-6 rounded-full bg-[#5c57ff] shadow-[0_0_18px_rgba(124,124,255,0.6)]"
            />
          </motion.div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-8 right-8 z-[9999] rounded-2xl border border-[#7c7cff]/30 bg-[#151228]/95 px-6 py-4 text-white shadow-[0_0_25px_rgba(124,124,255,0.25)] backdrop-blur-xl">
          Message sent successfully.
        </div>
      )}
    </section>
  )
}