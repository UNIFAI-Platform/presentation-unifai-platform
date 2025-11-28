"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Bell, BarChart3, BookOpen, LineChart, Send, Zap } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const automationFeatures = [
  { icon: Bell, text: "Alertes (rupture, ventes, anomalies)" },
  { icon: BarChart3, text: "Analyses" },
  { icon: BookOpen, text: "Stories & commentaires IA" },
  { icon: LineChart, text: "Prédictions (vente, stock, fidélité)" },
  { icon: Send, text: "Envois WhatsApp / Email / Telegram" },
]

export function SlideAutomation({ isActive }: SlideProps) {
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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">09 / Automatisation</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              Automatisation & Intelligence
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-8">
              Création automatique de :
            </motion.p>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              {/* Features */}
              <div className="space-y-2 md:space-y-4">
                {automationFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30"
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <span className="text-sm md:text-lg">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Info card */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col justify-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/30"
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">Workflows intelligents</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  Workflows gérés via n8n + modèles IA entraînés sur vos données.
                </p>
                <div className="p-3 md:p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm md:text-base font-semibold text-center">
                    Vous gagnez en <span className="text-primary">rapidité</span>,{" "}
                    <span className="text-accent">précision</span> et <span className="text-green-400">efficacité</span>.
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
