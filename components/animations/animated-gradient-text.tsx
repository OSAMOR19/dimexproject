"use client"

import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
}

const AnimatedGradientText = ({ text, className = "", tag = "span" }: AnimatedGradientTextProps) => {
  const Tag = tag

  return <Tag className={cn("text-gradient", className)}>{text}</Tag>
}

export default AnimatedGradientText
