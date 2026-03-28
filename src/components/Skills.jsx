import { motion } from "framer-motion"

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-16"
    >
      {/* ===== SECTION HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="inline-block px-4 py-1 mb-6 text-sm rounded-full bg-white/10 border border-white/10 text-[#7c7cff]">
          Skills
        </span>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Areas   Of
          <br />
          Expertise
        </h2>
      </motion.div>

      {/* ===== CARDS ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ===== LEFT — PASSION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-white/5
            border border-white/10
            rounded-3xl
            p-8 md:p-10
            backdrop-blur-xl
            hover:border-[#7c7cff]/40
            hover:scale-[1.02]
            transition-all duration-300
          "
        >
          {/* ICON */}
          <div className="w-12 h-12 mb-6 rounded-xl bg-[#7c7cff]/20 flex items-center justify-center text-[#7c7cff] text-xl">
            &lt;/&gt;
          </div>

          <h3 className="text-2xl font-semibold mb-6">
            Passion
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Full-Stack Development",
              "AI & ML",
              "Automation",
            ].map((item) => (
              <span
                key={item}
                className="
                  px-4 py-2
                  rounded-full
                  bg-[#7c7cff]
                  text-black
                  text-sm font-medium
                "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ===== RIGHT — TECH STACK ===== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="
            bg-white/5
            border border-white/10
            rounded-3xl
            p-8 md:p-10
            backdrop-blur-xl
            hover:border-[#7c7cff]/40
            hover:scale-[1.02]
            transition-all duration-300
          "
        >
          <h3 className="text-2xl font-semibold mb-6">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Python",
              "Java",
              "C / C++",
              "Node.js",
              "Django",
              "TensorFlow",
              "Bootstrap",
              "Git",
              "GitHub",
              "MySQL",
              "Figma",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  px-4 py-2
                  rounded-lg
                  bg-black/40
                  border border-white/10
                  text-sm
                  flex items-center gap-2
                  hover:border-[#7c7cff]/50
                  transition
                "
              >
                <span className="text-[#7c7cff]">▣</span>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
