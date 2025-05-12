"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import RevealOnScroll from "@/components/animations/reveal-on-scroll"
import AnimatedGradientText from "@/components/animations/animated-gradient-text"
import company1 from "@/components/images/boschlogo.png"
import company2 from "@/components/images/avllogo.png"
import company3 from "@/components/images/cleverbridge.png"
import company4 from "@/components/images/gogologo.png"
import company5 from "@/components/images/lebara.png"
import company6 from "@/components/images/ringierlogo.png"
import company7 from "@/components/images/redflexlogo.png"
import company8 from "@/components/images/pretty.png"

const clients = [
  { name: "Company 1", logo: company1 },
  { name: "Company 2", logo: company2 },
  { name: "Company 3", logo: company3 },
  { name: "Company 4", logo: company4 },
  { name: "Company 5", logo: company5 },
  { name: "Company 6", logo: company6 },
  { name: "Company 7", logo: company7 },
  { name: "Company 8", logo: company8 },
]

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const duplicateClients = [...clients, ...clients]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    let scrollPos = 0
    const speed = 0.5

    const scroll = () => {
      if (!scrollContainer) return

      scrollPos += speed

      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }

      scrollContainer.scrollLeft = scrollPos
      requestAnimationFrame(scroll)
    }

    const animation = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animation)
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="inline-block bg-navy/10 text-navy px-4 py-2 rounded-full text-sm font-medium mb-4">
              Trusted By
            </div>
            <h2 className="text-3xl font-bold text-navy">
              Companies That <AnimatedGradientText text="Trust Us" /> With Their Data
            </h2>
          </div>
        </RevealOnScroll>

        <div className="relative overflow-hidden">
          {/* Gradient Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-white to-transparent"></div>

          <div ref={scrollRef} className="flex items-center space-x-12 overflow-x-hidden py-8">
            {duplicateClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
