"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"
import { SlideCover } from "@/components/slides/slide-cover"
import { SlideContext } from "@/components/slides/slide-context"
import { SlideMission } from "@/components/slides/slide-mission"
import { SlideIntelligence } from "@/components/slides/slide-intelligence"
import { SlidePlatform } from "@/components/slides/slide-platform"
import { SlideAgents } from "@/components/slides/slide-agents"
import { SlideCollaborative } from "@/components/slides/slide-collaborative"
import { SlideScenario } from "@/components/slides/slide-scenario"
import { SlideAutomation } from "@/components/slides/slide-automation"
import { SlideBenefits } from "@/components/slides/slide-benefits"
import { SlideWhyUnifAI } from "@/components/slides/slide-why-unifai"
import { SlideConclusion } from "@/components/slides/slide-conclusion"
import { SlideThank } from "@/components/slides/slide-thank"
import { SlideNavigation } from "@/components/slide-navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { useTheme } from "next-themes"

// Mapping des gradients par slide
const slideGradients: Record<number, "blue" | "teal" | "dark"> = {
  1: "blue",   // Cover
  2: "teal",   // Context
  3: "blue",   // Mission
  4: "dark",   // Intelligence
  5: "blue",   // Platform
  6: "teal",   // Agents
  7: "blue",   // Collaborative
  8: "dark",   // Scenario
  9: "blue",   // Automation
  10: "teal",  // Benefits
  11: "blue",  // WhyUnifAI
  12: "dark",  // Conclusion
  13: "blue",  // Thank
}

// Couleurs hex pour animation smooth du fond
const darkGradientColors = {
  blue: { from: "#0a1628", via: "#0f2847", to: "#1a3a5c" },
  teal: { from: "#0a1628", via: "#0f2840", to: "#0a2a3a" },
  dark: { from: "#080f1a", via: "#0c1829", to: "#0f1f35" },
}

const lightGradientColors = {
  blue: { from: "#f0f7ff", via: "#e0efff", to: "#d0e7ff" },
  teal: { from: "#f0f7ff", via: "#e5f5f5", to: "#d5f0f0" },
  dark: { from: "#f5f7fa", via: "#eef2f7", to: "#e8eef5" },
}

const slides = [
  { id: 1, component: SlideCover },
  { id: 2, component: SlideContext },
  { id: 3, component: SlideMission },
  { id: 4, component: SlideIntelligence },
  { id: 5, component: SlidePlatform },
  { id: 6, component: SlideAgents },
  { id: 7, component: SlideCollaborative },
  { id: 8, component: SlideScenario },
  { id: 9, component: SlideAutomation },
  { id: 10, component: SlideBenefits },
  { id: 11, component: SlideWhyUnifAI },
  { id: 12, component: SlideConclusion },
  { id: 13, component: SlideThank },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isScrolling, setIsScrolling] = useState(false)
  const [direction, setDirection] = useState(0) // -1 pour précédent, 1 pour suivant
  const touchStart = useRef({ x: 0, y: 0 })
  const isMobile = useIsMobile()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const goToSlide = useCallback((slideNumber: number) => {
    const targetSlide = Math.min(Math.max(slideNumber, 1), slides.length)
    setDirection(targetSlide > currentSlide ? 1 : -1)
    setCurrentSlide(targetSlide)
  }, [currentSlide])

  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (isScrolling) return

      if (e.deltaY > 0 && currentSlide < slides.length) {
        setIsScrolling(true)
        goToSlide(currentSlide + 1)
        setTimeout(() => setIsScrolling(false), 1000)
      } else if (e.deltaY < 0 && currentSlide > 1) {
        setIsScrolling(true)
        goToSlide(currentSlide - 1)
        setTimeout(() => setIsScrolling(false), 1000)
      }
    },
    [currentSlide, isScrolling, goToSlide],
  )

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    }
  }, [])

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (isScrolling) return

      const touchEndX = e.changedTouches[0].clientX
      const touchEndY = e.changedTouches[0].clientY
      
      // Sur mobile: swipe horizontal, sur desktop: swipe vertical
      const diff = isMobile 
        ? touchStart.current.x - touchEndX  // Horizontal pour mobile
        : touchStart.current.y - touchEndY  // Vertical pour desktop

      if (Math.abs(diff) > 50) {
        // Minimum swipe distance
        if (diff > 0 && currentSlide < slides.length) {
          setIsScrolling(true)
          goToSlide(currentSlide + 1)
          setTimeout(() => setIsScrolling(false), 1000)
        } else if (diff < 0 && currentSlide > 1) {
          setIsScrolling(true)
          goToSlide(currentSlide - 1)
          setTimeout(() => setIsScrolling(false), 1000)
        }
      }
    },
    [currentSlide, isScrolling, goToSlide, isMobile],
  )

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchend", handleTouchEnd, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [handleWheel, handleTouchStart, handleTouchEnd])

  // Couleurs du gradient actuel pour desktop
  const currentGradient = slideGradients[currentSlide] || "blue"
  const gradientColors = mounted && theme === "light" ? lightGradientColors : darkGradientColors
  const colors = gradientColors[currentGradient]

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Fond animé avec transition smooth (Desktop ET Mobile) */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`,
        }}
        transition={{ 
          duration: 0.8, 
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      />

      <div className="fixed top-4 left-4 z-50">
        <ModeToggle />
      </div>
      <SlideNavigation currentSlide={currentSlide} totalSlides={slides.length} onNavigate={goToSlide} />

      {/* Animation Combinée (style Canva) - Mobile ET Desktop */}
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 h-screen w-full overflow-hidden z-10"
          initial={{ 
            opacity: 0, 
            scale: 0.92,
            x: direction >= 0 ? (isMobile ? 40 : 60) : (isMobile ? -40 : -60),
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: 0,
          }}
          exit={{ 
            opacity: 0, 
            scale: 0.92,
            x: direction >= 0 ? (isMobile ? -40 : -60) : (isMobile ? 40 : 60),
          }}
          transition={{
            duration: isMobile ? 0.4 : 0.6,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          {(() => {
            const SlideComponent = slides[currentSlide - 1].component
            return currentSlide === 1 ? (
              <SlideComponent isActive={true} onNext={() => goToSlide(2)} />
            ) : (
              <SlideComponent isActive={true} />
            )
          })()}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
