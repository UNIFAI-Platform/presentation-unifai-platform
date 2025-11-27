"use client"

import { motion } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (slide: number) => void
}

export function SlideNavigation({ currentSlide, totalSlides, onNavigate }: SlideNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3"
    >
      <button
        onClick={() => onNavigate(Math.max(1, currentSlide - 1))}
        className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary/20 transition-colors disabled:opacity-30"
        disabled={currentSlide === 1}
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      <div className="flex flex-col gap-2 py-2">
        {Array.from({ length: totalSlides }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => onNavigate(num)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === num ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${num}`}
          />
        ))}
      </div>

      <button
        onClick={() => onNavigate(Math.min(totalSlides, currentSlide + 1))}
        className="p-2 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:bg-primary/20 transition-colors disabled:opacity-30"
        disabled={currentSlide === totalSlides}
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      <div className="mt-2 text-xs text-muted-foreground font-mono">
        {currentSlide}/{totalSlides}
      </div>
    </motion.div>
  )
}
