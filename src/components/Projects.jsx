import { motion, useMotionValue, useTransform } from "framer-motion"

/* ===== PROJECT DATA ===== */
const projects = [
  {
    title: "AI Healthcare – Brain Tumor Detection & Localization",
    description:
      
      "The system achieves high accuracy in classifying tumor types and provides precise localization, aiding early diagnosis and treatment planning.",
    tags: ["Tensorflow", "Python", "Machine Learning", "ResNet", "CNN"],
    images: [
      "/projects/healthcare/1.jpg",
      "/projects/healthcare/2.jpg",
      "/projects/healthcare/3.jpg",
    ],
    code: "https://github.com/Sambit-7/AI-Healthcare-Brain-Tumor-Detection-Localization",
    docs: "https://github.com/Sambit-7/AI-Healthcare-Brain-Tumor-Detection-Localization#readme",
  },
  {
    title: "Online Food Delivery Platform",
    description:
      "A full-stack food delivery application with authentication, cart, orders, and admin management, built for scalability.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    images: [
      "/projects/food/1.JPG",
      "/projects/food/2.JPG",
      "/projects/food/3.JPG",
    ],
    code: "https://github.com/Sambit-7/Online-Food-Delivery-Platform",
    docs: "https://github.com/Sambit-7/Online-Food-Delivery-Platform#readme",
  },
  {
    title: "2D Role-Playing Game (Unity)",
    description:
      "A 2D RPG developed in Unity and C#, featuring character movement, combat mechanics, NPC interactions, and game logic.",
    tags: ["Unity", "C#", "Game Development"],
    images: [
      "/projects/game/1.png",
      "/projects/game/2.png",
      "/projects/game/3.png",
    ],
    code: "https://github.com/Sambit-7/RPG-game-Synopsis",
    docs: "https://github.com/Sambit-7/RPG-game-Synopsis#readme",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-16">
      {/* ===== SECTION HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-bold">
          Featured Projects
        </h2>
      </motion.div>

      {/* ===== PROJECT GRID ===== */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* ===== FOOTER CTA ===== */}
      <div className="text-center mt-20">
        <p className="text-gray-400 mb-4">
          Interested in seeing more?
        </p>

        <a
          href="https://github.com/Sambit-7"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
        >
          View All on GitHub
        </a>
      </div>
    </section>
  )
}

/* ===== PROJECT CARD (FLOW-FRAME + FIXED IMAGE STACK) ===== */
function ProjectCard({ project }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-60, 60], [12, -12])
  const rotateY = useTransform(x, [-60, 60], [-12, 12])

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      className="
        relative
        bg-white/5
        border border-white/10
        rounded-3xl
        p-6
        backdrop-blur-xl
        perspective-[1200px]
        hover:shadow-[0_40px_120px_rgba(124,124,255,0.35)]
        transition-shadow
      "
    >
      {/* ===== IMAGE STACK (ALL 3 VISIBLE) ===== */}
      <div className="relative h-48 mb-6">
        {project.images.map((img, i) => (
          <motion.img
            key={img}
            src={img}
            alt=""
            className="
              absolute
              w-[85%] h-[85%]
              object-cover
              rounded-xl
              border border-white/10
            "
            style={{
              left: `${i * 10}px`,
              top: `${i * 10}px`,
              zIndex: 30 - i * 10,
            }}
            whileHover={{
              x: i * 6,
              y: i * 6,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs rounded-full bg-[#7c7cff]/20 text-[#7c7cff]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ===== ACTION BUTTONS ===== */}
      <div className="flex gap-3">
        <a
          href={project.code}
          target="_blank"
          rel="noreferrer"
          className="
            flex-1
            px-4 py-2
            rounded-xl
            bg-white/10
            hover:bg-white/20
            text-sm
            text-center
            transition
          "
        >
          Code
        </a>

        <a
          href={project.docs}
          target="_blank"
          rel="noreferrer"
          className="
            flex-1
            px-4 py-2
            rounded-xl
            bg-[#7c7cff]
            text-black
            text-sm
            text-center
            hover:opacity-90
            transition
          "
        >
          Docs
        </a>
      </div>
    </motion.div>
  )
}
