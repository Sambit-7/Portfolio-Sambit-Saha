const skills = [
  { name: "Python", icon: "🐍", top: "20%", left: "8%" },
  { name: "Java", icon: "☕", top: "35%", left: "15%" },
  { name: "React", icon: "⚛️", top: "55%", left: "10%" },
  { name: "Node", icon: "🟢", top: "70%", left: "18%" },

  { name: "ML", icon: "🤖", top: "25%", right: "12%" },
  { name: "AI", icon: "🧠", top: "45%", right: "8%" },
  { name: "SQL", icon: "🗄️", top: "65%", right: "14%" },
]

export default function SkillBubbles() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="absolute bubble"
          style={{
            top: skill.top,
            left: skill.left,
            right: skill.right,
            animationDelay: `${index * 0.8}s`,
          }}
        >
          <div
            className="
              w-14 h-14 md:w-16 md:h-16
              rounded-xl
              bg-black/60
              border border-white/10
              flex items-center justify-center
              text-2xl
              shadow-[0_0_20px_#7c7cff44]
              backdrop-blur-md
            "
          >
            {skill.icon}
          </div>
        </div>
      ))}
    </div>
  )
}
