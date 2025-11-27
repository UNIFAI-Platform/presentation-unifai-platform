"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { FileText, MessageSquare, BookOpen, BarChart2, MessageCircle, Play, Bell } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const collaborativeFeatures = [
  { icon: FileText, text: "Publier des contenus internes (actualités, alertes, documents)" },
  { icon: MessageSquare, text: "Réagir (commentaires, j'aime, partage)" },
  { icon: BookOpen, text: "Créer des stories internes" },
  { icon: BarChart2, text: "Répondre à des sondages" },
  { icon: MessageCircle, text: "Communiquer via messagerie intégrée" },
  { icon: Play, text: "Générer des actions pour les collaborateurs" },
  { icon: Bell, text: "Recevoir des notifications intelligentes" },
]

export function SlideCollaborative({ isActive }: SlideProps) {
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
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">07 / Collaboration</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Une Plateforme Collaborative
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
            Votre équipe peut :
          </motion.p>

          {/* Features list */}
          <div className="grid md:grid-cols-2 gap-3">
            {collaborativeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm md:text-base">{feature.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom callout */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 p-5 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-center"
          >
            <p className="text-lg font-semibold">Une plateforme tout-en-un pour dynamiser la communication interne.</p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
