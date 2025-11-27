"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Wrench, DollarSign, BarChart3 } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

const benefitCategories = [
  {
    icon: Wrench,
    title: "Opérationnels",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    items: ["Réduction du temps de traitement", "Automatisation des tâches répétitives", "Collaboration améliorée"],
  },
  {
    icon: DollarSign,
    title: "Business",
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400",
    items: ["Réduction des ruptures", "Augmentation de la disponibilité produit", "Meilleure performance marketing"],
  },
  {
    icon: BarChart3,
    title: "Stratégique",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    items: ["Décisions plus rapides", "Vision consolidée", "Plateforme évolutive & personnalisable"],
  },
]

export function SlideBenefits({ isActive }: SlideProps) {
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
            <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">10 / Les Bénéfices</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-10 tracking-tight">
            Les Bénéfices Pour Vous
          </motion.h2>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {benefitCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`p-6 rounded-xl bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.borderColor}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full ${category.iconColor.replace("text-", "bg-")} mt-2`} />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
