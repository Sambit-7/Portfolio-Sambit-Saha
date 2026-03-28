import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* LEFT — LOGO */}
        <div className="text-xl sm:text-2xl font-bold text-[#7c7cff] tracking-wide">
          SS
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 lg:gap-10 text-gray-300 text-sm font-medium">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* RIGHT DESKTOP BUTTON */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Sambit-7"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm transition"
          >
            Visit Repo ↗
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-black/95 border-t border-white/10">
          <div className="flex flex-col gap-4 pt-4 text-gray-300 text-sm font-medium">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-white transition"
              >
                {item.label}
              </a>
            ))}

            <a
              href="https://github.com/Sambit-7"
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-fit px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm transition"
            >
              Visit Repo ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}