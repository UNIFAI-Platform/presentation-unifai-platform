"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Database, Cog, Eye, Users, TrendingDown, TrendingUp, Sparkles } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const conclusionItems = [
  { icon: Database, text: "Centraliser votre information" },
  { icon: Cog, text: "Automatiser vos processus critiques" },
  { icon: Eye, text: "Anticiper plutôt que réagir" },
  { icon: Users, text: "Mieux collaborer" },
  { icon: TrendingDown, text: "Réduire vos pertes" },
  { icon: TrendingUp, text: "Augmenter vos ventes" },
]

export function SlideConclusion({ isActive }: SlideProps) {
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
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">12 / Conclusion</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            UnifAI Platform vous permet de :
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-10"
          />

          {/* Conclusion items */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {conclusionItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center gap-3 p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="p-6 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-accent" />
              <p className="text-xl md:text-2xl font-bold">Prêts à transformer vos opérations avec l'IA ?</p>
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
