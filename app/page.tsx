"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
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
  const touchStart = useRef(0)

  const goToSlide = useCallback((slideNumber: number) => {
    const targetSlide = Math.min(Math.max(slideNumber, 1), slides.length)
    setCurrentSlide(targetSlide)
  }, [])

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
    touchStart.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (isScrolling) return

      const touchEnd = e.changedTouches[0].clientY
      const diff = touchStart.current - touchEnd

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
    [currentSlide, isScrolling, goToSlide],
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
      <SlideNavigation currentSlide={currentSlide} totalSlides={slides.length} onNavigate={goToSlide} />

      <motion.div
        className="h-full w-full"
        animate={{ y: `-${(currentSlide - 1) * 100}%` }}
        transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }} // Custom easing for smooth feel
      >
        {slides.map(({ id, component: SlideComponent }) => (
          <section key={id} id={`slide-${id}`} className="h-screen w-full overflow-hidden">
            <SlideComponent isActive={currentSlide === id} />
          </section>
        ))}
      </motion.div>
    </main>
  )
}
