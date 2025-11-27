"use client"
import type { ReactNode } from "react"

interface SlideWrapperProps {
  children: ReactNode
  className?: string
  gradient?: "blue" | "teal" | "dark"
}

const gradients = {
  blue: "bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c]",
  teal: "bg-gradient-to-br from-[#0a1628] via-[#0f2840] to-[#0a2a3a]",
  dark: "bg-gradient-to-br from-[#080f1a] via-[#0c1829] to-[#0f1f35]",
}

export function SlideWrapper({ children, className = "", gradient = "blue" }: SlideWrapperProps) {
  return (
    <div className={`relative h-full w-full ${gradients[gradient]} ${className}`}>
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}
