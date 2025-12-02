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
import { SlideClient } from "@/components/slides/slide-client"
import { SlideThank } from "@/components/slides/slide-thank"
import { SlideChat } from "@/components/slides/slide-chat"
import { SlideNavigation } from "@/components/slide-navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { AutoPlayControl, AutoPlayControlRef } from "@/components/auto-play-control"
import { FloatingIcons } from "@/components/floating-icons"
import { IntroAnimation } from "@/components/intro-animation"

import { useTheme } from "next-themes"
import { WaveBackground } from "@/components/ui/wave-background"

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
  13: "teal",  // Client
  14: "blue",  // Thank
  15: "dark",  // Chat
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
  { id: 13, component: SlideClient },
  { id: 14, component: SlideThank },
  { id: 15, component: SlideChat },
]

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isScrolling, setIsScrolling] = useState(false)
  const [direction, setDirection] = useState(0) // -1 pour précédent, 1 pour suivant
  const [showIntro, setShowIntro] = useState(true)
  const [contentReady, setContentReady] = useState(false)
  const touchStart = useRef({ x: 0, y: 0 })
  const isMobile = useIsMobile()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  // Référence pour déclencher le toggle play/pause depuis le clavier
  const autoPlayRef = useRef<AutoPlayControlRef>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Callback quand l'animation d'intro est terminée
  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
    // Petit délai pour lancer l'animation du contenu
    setTimeout(() => setContentReady(true), 100)
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

  // Gestion des contrôles clavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ne pas capturer si on est dans un input ou textarea
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return
      }

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          // Slide précédente
          if (currentSlide > 1) {
            goToSlide(currentSlide - 1)
          }
          event.preventDefault()
          break
        case 'ArrowRight':
        case 'ArrowDown':
          // Slide suivante
          if (currentSlide < slides.length) {
            goToSlide(currentSlide + 1)
          }
          event.preventDefault()
          break
        case ' ': // Espace
          // Toggle Play/Pause
          autoPlayRef.current?.toggle()
          event.preventDefault()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide, goToSlide])

  // Couleurs du gradient actuel pour desktop
  const currentGradient = slideGradients[currentSlide] || "blue"
  const gradientColors = mounted && theme === "light" ? lightGradientColors : darkGradientColors
  const colors = gradientColors[currentGradient]

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isMobile ? 40 : 60) : (isMobile ? -40 : -60),
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? (isMobile ? 40 : 60) : (isMobile ? -40 : -60),
      opacity: 0,
      scale: 0.92,
    }),
  }

  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Animation d'introduction */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Fond animé - toujours rendu mais avec opacité contrôlée */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: contentReady ? 1 : 0,
          scale: contentReady ? 1 : 1.1,
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`,
        }}
        transition={{
          opacity: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          scale: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
          background: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <WaveBackground />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: contentReady ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <FloatingIcons currentSlide={currentSlide} />
        </motion.div>
      </motion.div>

      {/* Controls - Top bar avec animation d'entrée */}
      <motion.div 
        className="fixed top-4 left-4 z-50 flex items-center gap-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : -15 }}
        transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
      >
        <ModeToggle />
      </motion.div>
      <motion.div 
        className="fixed top-4 right-4 z-50 flex items-center gap-2"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : -15 }}
        transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
      >
        <AutoPlayControl 
          ref={autoPlayRef}
          currentSlide={currentSlide} 
          totalSlides={slides.length} 
          onNavigate={goToSlide}
          slideDuration={10000}
        />
        <LanguageToggle />
      </motion.div>
      
      {/* Navigation avec animation d'entrée */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: contentReady ? 1 : 0, y: contentReady ? 0 : 15 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <SlideNavigation currentSlide={currentSlide} totalSlides={slides.length} onNavigate={goToSlide} />
      </motion.div>

      {/* Slide Content avec animation fluide */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: contentReady ? 1 : 0, scale: contentReady ? 1 : 0.92 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0 z-10"
      >
        <AnimatePresence mode="sync" initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 h-screen w-full overflow-hidden"
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
                <SlideComponent isActive={true} onNavigate={goToSlide} />
              )
            })()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </main>
  )
}
