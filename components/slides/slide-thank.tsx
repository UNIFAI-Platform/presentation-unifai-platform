"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Mail, Globe } from "lucide-react"
import { ThemeLogo } from "@/components/theme-logo"
import { GradientText } from "@/components/gradient-text"

interface SlideProps {
  isActive: boolean
}

export function SlideThank({ isActive }: SlideProps) {
  return (
    <SlideWrapper gradient="blue">
      <div className="h-full flex flex-col items-center justify-center px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="text-center max-w-3xl"
        >
          {/* Logo */}
          <motion.div variants={fadeInUp} className="mb-8">
            <ThemeLogo className="h-14 md:h-16 mx-auto" />
          </motion.div>

          {/* Thank you */}
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <GradientText>
              Merci
            </GradientText>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-12">
            Questions ?
          </motion.p>

          {/* Contact info */}
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:unifaiplatform@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>unifaiplatform@gmail.com</span>
            </a>

            <a
              href="https://unifaiplatform.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/20 border border-primary/50 hover:bg-primary/30 transition-colors"
            >
              <Globe className="w-5 h-5 text-primary" />
              <span>unifaiplatform.ai</span>
            </a>
          </motion.div>

          {/* Slide number */}
          <motion.div variants={fadeInUp} className="mt-16">
            <span className="text-xs font-mono text-primary/40 uppercase tracking-wider">13 / 13</span>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
