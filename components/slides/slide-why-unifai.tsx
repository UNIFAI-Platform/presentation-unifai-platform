"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Cpu, Building2, Plug, Rocket, Layers, HeadphonesIcon } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const reasons = [
  { icon: Cpu, text: "Technologie IA avancée" },
  { icon: Building2, text: "Déjà utilisée par des entreprises retail" },
  { icon: Plug, text: "Très simple à intégrer" },
  { icon: Rocket, text: "Rapidité de déploiement" },
  { icon: Layers, text: "Plateforme évolutive (multi-agents)" },
  { icon: HeadphonesIcon, text: "Support continu" },
]

export function SlideWhyUnifAI({ isActive }: SlideProps) {
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
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">11 / Pourquoi Nous</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">
            Pourquoi <span className="text-primary">UnifAI</span> ?
          </motion.h2>

          {/* Reasons grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium">{reason.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 border border-primary/30 text-center"
          >
            <p className="text-xl md:text-2xl font-bold">
              UnifAI n'est pas seulement un outil :{" "}
              <span className="text-primary">c'est un accélérateur de performance.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
