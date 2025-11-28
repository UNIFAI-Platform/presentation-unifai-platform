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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">10 / Les Bénéfices</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-4 md:mb-10 tracking-tight">
              Les Bénéfices Pour Vous
            </motion.h2>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="grid md:grid-cols-3 gap-3 md:gap-6">
              {benefitCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`p-4 md:p-6 rounded-xl bg-gradient-to-br ${category.color} backdrop-blur-sm border ${category.borderColor}`}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-5">
                    <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <category.icon className={`w-4 h-4 md:w-6 md:h-6 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2 md:space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 md:gap-3">
                        <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${category.iconColor.replace("text-", "bg-")} mt-1.5 md:mt-2`} />
                        <span className="text-sm md:text-base text-foreground/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
