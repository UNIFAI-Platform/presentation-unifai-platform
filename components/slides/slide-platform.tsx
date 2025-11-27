"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { BarChart3, Bell, LineChart, Bot, Workflow, Users } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const platformFeatures = [
  { icon: BarChart3, label: "Analyses automatiques", color: "text-blue-400" },
  { icon: Bell, label: "Alertes intelligentes", color: "text-yellow-400" },
  { icon: LineChart, label: "Prédictions", color: "text-green-400" },
  { icon: Bot, label: "Agents IA spécialisés", color: "text-purple-400" },
  { icon: Workflow, label: "Actions & workflows", color: "text-orange-400" },
  { icon: Users, label: "Collaboration interne", color: "text-pink-400" },
]

export function SlidePlatform({ isActive }: SlideProps) {
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
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">05 / La Version Avancée</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            UnifAI Platform
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-10">
            Une plateforme collaborative tout-en-un pour votre performance :
          </motion.p>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group flex items-center gap-4 p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-card/50 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <span className="font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <motion.div
            variants={fadeInUp}
            className="text-center p-6 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border/30"
          >
            <p className="text-lg md:text-xl font-semibold">
              Tout ce dont votre entreprise a besoin pour être <span className="text-primary">data-driven</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
