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
      <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">09 / Automatisation</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Automatisation & Intelligence
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
            Création automatique de :
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Features */}
            <div className="space-y-4">
              {automationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-base md:text-lg">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Info card */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col justify-center p-6 rounded-xl bg-gradient-to-br from-card/50 to-card/30 border border-border/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold">Workflows intelligents</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Workflows gérés via n8n + modèles IA entraînés sur vos données.
              </p>
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="font-semibold text-center">
                  Vous gagnez en <span className="text-primary">rapidité</span>,{" "}
                  <span className="text-accent">précision</span> et <span className="text-green-400">efficacité</span>.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
