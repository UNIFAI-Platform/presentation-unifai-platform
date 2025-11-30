"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { ChevronDown, Hand, Sparkles } from "lucide-react"
import { ThemeLogo } from "@/components/theme-logo"
import { GradientText } from "@/components/gradient-text"

interface SlideProps {
  isActive: boolean
  onNext?: () => void
}

export function SlideCover({ isActive, onNext }: SlideProps) {
  return (
    <SlideWrapper gradient="blue">
      {/* Decorative Sparkle - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20"
      >
        <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-muted-foreground/30" />
      </motion.div>

      <div className="h-full flex flex-col items-center justify-center px-6 md:px-12 relative z-10">
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
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary mb-12">
            Solution dédiée aux entreprises Retail & E-commerce
          </motion.p>

          {/* Presented by */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/30 backdrop-blur-sm border border-border/50"
          >
            <span className="text-sm font-medium text-muted-foreground">Présenté par:</span>
            <span className="text-sm font-bold text-foreground">L'équipe UnifAI</span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center"
          >
            {/* Progress line */}
            <div className="w-8 h-0.5 bg-primary/60 rounded-full mb-4" />
            
            <motion.button
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              onClick={onNext}
              className="flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground/60 hover:text-primary/70 transition-colors">
                Découvrir
              </span>
              <ChevronDown className="w-5 h-5 text-muted-foreground/50 hover:text-primary transition-colors" />
            </motion.button>
          </motion.div>
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
