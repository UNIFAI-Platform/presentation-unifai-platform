"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { TrendingUp, Truck, Megaphone, Newspaper } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const agents = [
  {
    name: "Agent Sales",
    icon: TrendingUp,
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
    features: ["Analyse des ventes", "Alertes baisse performance", "Recommandations actions"],
  },
  {
    name: "Agent Supply Chain",
    icon: Truck,
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
    features: ["Analyse stock / rupture", "Recommandations réassort & transfert", "Prévisions"],
  },
  {
    name: "Agent Marketing",
    icon: Megaphone,
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
    features: ["Analyse fidélité", "Ciblage intelligent", "Recommandations de campagnes"],
  },
  {
    name: "Agent News",
    icon: Newspaper,
    color: "from-orange-500/20 to-orange-600/20",
    borderColor: "border-orange-500/30",
    features: ["Actualités pertinentes", "Veille sectorielle", "Synthèse de marché"],
  },
]

export function SlideAgents({ isActive }: SlideProps) {
  return (
    <SlideWrapper gradient="teal">
      <div className="h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="max-w-6xl mx-auto w-full"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">06 / Les Agents IA</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            Les Agents IA UnifAI
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-base text-muted-foreground mb-8">
            Chaque agent vous apporte une expertise dédiée
          </motion.p>

          {/* Agents grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {agents.map((agent, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`p-4 md:p-5 rounded-xl bg-gradient-to-br ${agent.color} backdrop-blur-sm border ${agent.borderColor}`}
              >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <agent.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold">{agent.name}</h3>
                </div>
                <ul className="space-y-1.5 md:space-y-2">
                  {agent.features
                    .filter((f) => f)
                    .map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-xs md:text-sm text-foreground/80">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/50" />
                        {feature}
                      </li>
                    ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 text-center p-4 rounded-xl bg-card/30 border border-border/30"
          >
            <p className="text-base md:text-lg font-medium">
              Vos équipes collaborent avec des assistants experts, disponibles{" "}
              <span className="text-primary">24/7</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
