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
      <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">03 / Notre Mission</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            UnifAI aide les entreprises retail à :
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10"
          />

          <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
            {/* Mission items */}
            <div className="space-y-3 md:space-y-4">
              {missionItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border/20"
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
                  <span className="text-sm md:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Objective card */}
            <motion.div variants={fadeInUp} className="flex items-center">
              <div className="w-full p-8 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/20 border border-primary/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/30 flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Objectif ultime</h3>
                </div>
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                  Augmenter vos ventes, réduire vos pertes et accélérer vos opérations.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
