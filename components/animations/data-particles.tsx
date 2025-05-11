"use client"

import { useEffect, useRef } from "react"

interface DataParticlesProps {
  count?: number
  className?: string
}

const DataParticles = ({ count = 20, className = "" }: DataParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const containerWidth = container.offsetWidth
    const containerHeight = container.offsetHeight

    // Clear existing particles
    container.innerHTML = ""

    // Create particles
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div")
      particle.className = "data-particle"

      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      // Random animation duration
      const duration = 3 + Math.random() * 7
      particle.style.animationDuration = `${duration}s`

      container.appendChild(particle)
    }

    // Create data flow lines
    for (let i = 0; i < count / 4; i++) {
      const line = document.createElement("div")
      line.className = "data-line"

      // Random position and size
      const top = Math.random() * 100
      line.style.top = `${top}%`
      line.style.left = "0"
      line.style.width = `${30 + Math.random() * 70}%`

      container.appendChild(line)
    }
  }, [count])

  return <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}></div>
}

export default DataParticles
