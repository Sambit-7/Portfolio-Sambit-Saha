import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

export default function ParticlesBackground() {
  const init = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    >
     <Particles
  init={init}
  options={{
    fpsLimit: 60,
    particles: {
      number: { value: 150 },
      color: { value: "#ffffff" },
      opacity: { value: 0.9 },
      size: { value: { min: 1.5, max: 3 } },
      move: { enable: true, speed: 0.4 },
      links: { enable: true, distance: 100, color: "#7c7cff" },
    },
    detectRetina: true,
  }}
/>
    </div>
  )
}
