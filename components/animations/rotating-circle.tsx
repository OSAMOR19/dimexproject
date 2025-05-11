"use client"

import { cn } from "@/lib/utils"

interface RotatingCircleProps {
  className?: string
  size?: number
  duration?: number
  color?: string
  reverse?: boolean
}

const RotatingCircle = ({
  className = "",
  size = 300,
  duration = 20,
  color = "rgba(45, 33, 125, 0.1)",
  reverse = false,
}: RotatingCircleProps) => {
  return (
    <div
      className={cn("absolute rounded-full border-2 animate-rotate-slow", reverse ? "animate-reverse" : "", className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderColor: color,
        animationDuration: `${duration}s`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    />
  )
}

export default RotatingCircle
