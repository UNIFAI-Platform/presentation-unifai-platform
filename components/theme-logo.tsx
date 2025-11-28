"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface ThemeLogoProps {
  className?: string
  alt?: string
}

export function ThemeLogo({ className = "h-16 md:h-20 mx-auto", alt = "UnifAI Logo" }: ThemeLogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Default to white logo during SSR (dark mode is default)
  const logoSrc = mounted 
    ? (theme === "dark" ? `/images/logo-white.png` : `/images/logo_black.png`)
    : `/images/logo-white.png`

  return (
    <img 
      src={logoSrc} 
      alt={alt} 
      className={className}
    />
  )
}
