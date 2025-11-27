"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { ChevronDown } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

export function SlideCover({ isActive }: SlideProps) {
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
            <img src="/images/logo-white.png" alt="UnifAI Logo" className="h-16 md:h-20 mx-auto" />
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-primary-foreground to-primary bg-clip-text text-transparent">
              UnifAI Platform
            </span>
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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground/50">Découvrir</span>
          <ChevronDown className="w-6 h-6 text-primary/50" />
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
