"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Sparkles, Eraser, Grid3X3, Tags, AlertTriangle, ArrowRight } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const features = [
  { icon: Eraser, label: "Nettoyage automatique" },
  { icon: Grid3X3, label: "Normalisation" },
  { icon: Tags, label: "Catégorisation intelligente" },
  { icon: Sparkles, label: "Enrichissement des attributs" },
  { icon: AlertTriangle, label: "Détection d'erreurs" },
]

export function SlideIntelligence({ isActive }: SlideProps) {
  return (
    <SlideWrapper gradient="dark">
      <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">
              04 / Intelligence Produit
            </span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            UnifAI : La Base de Votre
            <br />
            <span className="text-primary">Intelligence Produit</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-2xl">
            UnifAI est une plateforme IA spécialisée dans la gestion des données produit
          </motion.p>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-center font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Result callout */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30"
          >
            <ArrowRight className="w-6 h-6 text-accent flex-shrink-0" />
            <p className="text-lg md:text-xl font-medium">
              <span className="text-accent">Résultat :</span> un catalogue plus propre, cohérent, prêt pour le
              multicanal.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
