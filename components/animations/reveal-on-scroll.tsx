"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right"
  delay?: number
  threshold?: number
  once?: boolean
}

const RevealOnScroll = ({
  children,
  className = "",
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  once = true,
}: RevealOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-700 ease-out",
        isVisible ? `opacity-100 animate-${animation}` : "opacity-0",
        className,
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "both",
        animationPlayState: isVisible ? "running" : "paused",
      }}
    >
      {children}
    </div>
  )
}

export default RevealOnScroll
