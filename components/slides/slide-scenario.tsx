"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { AlertCircle, MessageSquare, ArrowRight, CheckCircle2, Clock } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const scenarioSteps = [
  {
    icon: AlertCircle,
    title: "Agent Sales publie une alerte",
    description: '"Baisse des ventes d\'articles X dans plusieurs magasins."',
    color: "text-yellow-400",
  },
  {
    icon: MessageSquare,
    title: "Agent Supply Chain commente",
    description: '"Stock faible détecté en magasin + dépôt."',
    color: "text-blue-400",
  },
  {
    icon: ArrowRight,
    title: "Le responsable crée une action",
    description: '"Transférer les produits disponibles entre magasins."',
    color: "text-purple-400",
  },
  {
    icon: CheckCircle2,
    title: "L'employé exécute et valide",
    description: "Action complétée avec succès.",
    color: "text-green-400",
  },
]

export function SlideScenario({ isActive }: SlideProps) {
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
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">08 / Scénario Client</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            Scénario Client (Retail)
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base text-muted-foreground mb-8">
            Situation → Interaction → Action → Résultat
          </motion.p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-green-500 hidden md:block" />

            <div className="space-y-4">
              {scenarioSteps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex items-start gap-4 md:gap-6">
                  <div
                    className={`relative z-10 w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center flex-shrink-0`}
                  >
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Result */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-green-500/20 to-accent/20 border border-green-500/30"
          >
            <Clock className="w-8 h-8 text-green-400 flex-shrink-0" />
            <p className="text-lg font-semibold">
              Action en moins de <span className="text-green-400">5 minutes</span> grâce à l'IA collaborative.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
