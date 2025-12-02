"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { BarChart3, Bell, LineChart, Bot, Workflow, Users } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
}

export function SlidePlatform({ isActive }: SlideProps) {
  const { t } = useLocale()

  const platformFeatures = [
    { icon: BarChart3, label: t("slide5.features.feature1"), color: "text-blue-400" },
    { icon: Bell, label: t("slide5.features.feature2"), color: "text-yellow-400" },
    { icon: LineChart, label: t("slide5.features.feature3"), color: "text-green-400" },
    { icon: Bot, label: t("slide5.features.feature4"), color: "text-purple-400" },
    { icon: Workflow, label: t("slide5.features.feature5"), color: "text-orange-400" },
    { icon: Users, label: t("slide5.features.feature6"), color: "text-pink-400" },
  ]

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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">{t("slide5.section")}</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              {t("slide5.title")}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm md:text-xl text-muted-foreground mb-4 md:mb-10">
              {t("slide5.subtitle")}
            </motion.p>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-6">
              {platformFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group flex items-center gap-3 p-3 md:p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all"
                >
                  <div
                    className={`w-9 h-9 md:w-12 md:h-12 rounded-xl bg-card/50 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <feature.icon className={`w-4 h-4 md:w-6 md:h-6 ${feature.color}`} />
                  </div>
                  <span className="text-sm md:text-base font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer - Fixed bottom on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex-shrink-0 mt-4 md:mt-10 text-center p-3 md:p-6 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border/30"
          >
            <p className="text-sm md:text-xl font-semibold">
              {t("slide5.footer")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
