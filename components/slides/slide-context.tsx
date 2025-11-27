"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, fadeInLeft, staggerContainer } from "@/components/ui/slide-wrapper"
import { TrendingUp, Database, Zap, Layers, Clock } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const contextItems = [
  { icon: TrendingUp, text: "Explosion du nombre de produits et sources de données" },
  { icon: Database, text: "Difficulté à garantir une donnée fiable et cohérente" },
  { icon: Zap, text: "Besoin d'une réponse rapide aux fluctuations (stocks, ventes, réassorts)" },
  { icon: Layers, text: "Multiplication des outils → perte de temps, décalage d'information" },
  { icon: Clock, text: "Importance de la réactivité opérationnelle" },
]

export function SlideContext({ isActive }: SlideProps) {
  return (
    <SlideWrapper gradient="teal">
      <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="max-w-6xl mx-auto w-full"
        >
          {/* Slide number */}
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">02 / Le Contexte</span>
          </motion.div>

          {/* Title */}
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Le retail évolue rapidement
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10"
          />

          {/* Context items */}
          <div className="grid gap-4 md:gap-5">
            {contextItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInLeft}
                custom={index}
                className="flex items-start gap-4 p-4 md:p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom callout */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 p-5 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
          >
            <p className="text-lg md:text-xl font-semibold text-center">
              Votre enjeu : être plus rapide, plus précis, plus automatisé.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
