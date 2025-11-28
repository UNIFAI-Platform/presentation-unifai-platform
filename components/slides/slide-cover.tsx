"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { ChevronDown, Hand } from "lucide-react"
import { ThemeLogo } from "@/components/theme-logo"
import { GradientText } from "@/components/gradient-text"

interface SlideProps {
  isActive: boolean
  onNext?: () => void
}

export function SlideCover({ isActive, onNext }: SlideProps) {
  return (
    <SlideWrapper gradient="blue">
      <div className="h-full flex flex-col items-center justify-center px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="text-center max-w-4xl"
        >
          {/* Logo */}
          <motion.div variants={fadeInUp} className="mb-8">
            <ThemeLogo className="h-16 md:h-20 mx-auto" />
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <GradientText>
              UnifAI Platform
            </GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 leading-relaxed"
          >
            Accélérez votre performance grâce à l'IA collaborative
          </motion.p>

          {/* Description */}
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary/80 mb-12">
            Solution dédiée aux entreprises Retail & E-commerce
          </motion.p>

          {/* Presented by */}
                    <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/30 backdrop-blur-sm border border-border/50"
          >
            <span className="text-sm font-medium text-muted-foreground">Présenté par</span>
            <span className="text-sm font-bold text-foreground">L'équipe UnifAI</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <motion.button
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Number.POSITIVE_INFINITY }}
            onClick={onNext}
            className="flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform"
          >
            <span className="text-xs uppercase tracking-widest text-muted-foreground/50 hover:text-primary/70 transition-colors">Découvrir</span>
            <ChevronDown className="w-6 h-6 text-primary/50 hover:text-primary transition-colors" />
          </motion.button>
        </div>

        {/* Swipe Indicator - Mobile only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex md:hidden flex-col items-center gap-3"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground/50">Swiper</span>
          <div className="relative flex items-center justify-center">
            {/* Ligne de guidage */}
            <div className="absolute w-20 h-0.5 bg-muted-foreground/20 rounded-full" />
            
            {/* Main animée */}
            <motion.div
              animate={{ 
                x: [-30, 30, -30],
              }}
              transition={{ 
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Hand className="w-6 h-6 text-primary/70 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
