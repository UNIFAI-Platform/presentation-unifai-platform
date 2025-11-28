"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { CheckCircle2, Target } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const missionItems = [
  "Améliorer la qualité et la cohérence de leurs données",
  "Centraliser l'information et les analyses",
  "Automatiser les tâches répétitives",
  "Détecter plus vite les anomalies & opportunités",
  "Prendre de meilleures décisions grâce à l'IA",
]

export function SlideMission({ isActive }: SlideProps) {
  return (
    <SlideWrapper gradient="blue">
      <div className="h-full flex flex-col px-6 md:px-12 lg:px-24 pt-20 pb-6 md:py-0 md:justify-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="max-w-6xl mx-auto w-full h-full md:h-auto flex flex-col"
        >
          {/* Header - Fixed top on mobile */}
          <div className="flex-shrink-0">
            <motion.div variants={fadeInUp} className="mb-2 md:mb-4">
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">03 / Notre Mission</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              UnifAI aide les entreprises retail à :
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4 md:mb-10"
            />
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="grid md:grid-cols-2 gap-3 lg:gap-8">
              {/* Mission items */}
              <div className="space-y-2 md:space-y-4">
                {missionItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border/20"
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-6 md:h-6 text-accent flex-shrink-0" />
                    <span className="text-sm md:text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* Objective card */}
              <motion.div variants={fadeInUp} className="flex items-center mt-3 md:mt-0">
                <div className="w-full p-4 md:p-8 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30">
                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/30 flex items-center justify-center">
                      <Target className="w-5 h-5 md:w-7 md:h-7 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">Objectif ultime</h3>
                  </div>
                  <p className="text-sm md:text-xl text-foreground/90 leading-relaxed">
                    Augmenter vos ventes, réduire vos pertes et accélérer vos opérations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
