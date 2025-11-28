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

  return (
    <main className="relative h-screen w-full overflow-hidden bg-background">
      <div className="fixed top-4 left-4 z-50">
        <ModeToggle />
      </div>
      <SlideNavigation currentSlide={currentSlide} totalSlides={slides.length} onNavigate={goToSlide} />

      {/* Version Mobile - Animation avec fade et slide élégant */}
      {isMobile ? (
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ 
              opacity: 0, 
              x: direction > 0 ? 100 : -100,
              scale: 0.95
            }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: 1
            }}
            exit={{ 
              opacity: 0, 
              x: direction > 0 ? -100 : 100,
              scale: 0.95
            }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94] // Easing plus doux
            }}
            className="h-full w-full"
          >
            <section className="h-screen w-full overflow-hidden">
              {(() => {
                const SlideComponent = slides[currentSlide - 1].component
                return <SlideComponent isActive={true} />
              })()}
            </section>
          </motion.div>
        </AnimatePresence>
      ) : (
        /* Version Desktop - Animation verticale classique */
        <motion.div
          className="h-full w-full"
          animate={{ y: `-${(currentSlide - 1) * 100}%` }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {slides.map(({ id, component: SlideComponent }) => (
            <section 
              key={id} 
              id={`slide-${id}`} 
              className="h-screen w-full overflow-hidden"
            >
              {id === 1 ? (
                <SlideComponent isActive={currentSlide === id} onNext={() => goToSlide(2)} />
              ) : (
                <SlideComponent isActive={currentSlide === id} />
              )}
            </section>
          ))}
        </motion.div>
      )}
    </main>
  )
}
