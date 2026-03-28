import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Rocket } from "lucide-react"

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "Bluestock Fintech, India",
    period: "Apr 2025 – Jun 2025",
    icon: <Briefcase size={20} />,
    points: [
      "Built backend APIs and business logic for a fintech platform using Node.js and MongoDB.",
      "Implemented authentication, user workflows, and input validation mechanisms.",
      "Collaborated with frontend teams to integrate REST APIs and deliver features end-to-end.",
      "Improved API reliability and performance through code optimization and testing.",
    ],
  },
  {
    title: "Teaching Assistant (Programming & Systems)",
    company: "Indian Institute of Technology (ISM), Dhanbad",
    period: "Aug 2024 – Dec 2025",
    icon: <GraduationCap size={20} />,
    points: [
      "Assisted in teaching programming fundamentals, data structures, and system concepts to undergraduate students.",
      "Conducted lab sessions, clarified problem-solving approaches, and supported evaluations.",
    ],
  },
  {
    title: "Entrepreneur — AURA App",
    company: "Founder Journey",
    period: "Ongoing",
    icon: <Rocket size={20} />,
    points: [
      'Building AURA, a modern social and dating app focused on authentic connections with a unique "blind date" feature.',
      "Frontend built with React Native (Expo), expo-blur, and react-native-reanimated.",
      "Backend powered by Node.js and Supabase with PostGIS for geolocation matching.",
      "Implemented real-time chat using Socket.io and managed code with GitHub.",
      "Handling end-to-end product, engineering, user journey, business strategy, and roadmap planning while completing M.Tech.",
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 md:px-16 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute left-0 top-20 w-72 h-72 bg-[#7c7cff]/10 blur-3xl rounded-full" />
      <div className="absolute right-0 bottom-10 w-80 h-80 bg-[#7c7cff]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-[#7c7cff]/20 bg-white/5 text-[#8d88ff] text-sm mb-4">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Work, teaching, and entrepreneurship experiences that shaped my technical and product journey.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[#7c7cff]/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                className={`relative md:w-[48%] ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_35px_rgba(124,124,255,0.08)]">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7c7cff]/10 via-transparent to-transparent pointer-events-none" />

                  <div className="relative flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#7c7cff]/20 border border-[#7c7cff]/20 flex items-center justify-center text-[#8d88ff] shadow-[0_0_20px_rgba(124,124,255,0.2)] shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm text-[#a9a5ff]">
                          {item.period}
                        </span>
                      </div>

                      <p className="mt-1 text-[#7c7cff] font-medium">
                        {item.company}
                      </p>

                      <ul className="mt-4 space-y-3 text-gray-300">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="mt-2 w-2 h-2 rounded-full bg-[#7c7cff] shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline connector for left cards */}
                {index % 2 === 0 && (
                  <>
                    <div className="hidden md:block absolute top-8 left-full w-8 h-[2px] bg-[#7c7cff]/30" />
                    <div className="hidden md:block absolute top-6 -right-[52px] w-5 h-5 rounded-full bg-[#7c7cff] shadow-[0_0_20px_rgba(124,124,255,0.7)]" />
                  </>
                )}

                {/* Timeline connector for right cards */}
                {index % 2 === 1 && (
                  <>
                    <div className="hidden md:block absolute top-8 right-full w-8 h-[2px] bg-[#7c7cff]/30" />
                    <div className="hidden md:block absolute top-6 -left-[52px] w-5 h-5 rounded-full bg-[#7c7cff] shadow-[0_0_20px_rgba(124,124,255,0.7)]" />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}