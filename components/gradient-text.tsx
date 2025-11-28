"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Dark mode: white to primary gradient | Light mode: dark blue to primary gradient
  const gradientClass = mounted && theme === "light"
    ? "bg-gradient-to-r from-[#0a1628] via-primary to-[#1a5a9e] bg-clip-text text-transparent"
    : "bg-gradient-to-r from-white via-primary-foreground to-primary bg-clip-text text-transparent"

  return (
    <span className={`${gradientClass} ${className}`}>
      {children}
    </span>
  )
}
