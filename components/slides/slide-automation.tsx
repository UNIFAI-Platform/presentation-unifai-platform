"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Bell, BarChart3, BookOpen, LineChart, Send, Zap } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
}

export function SlideAutomation({ isActive }: SlideProps) {
  const { t } = useLocale()

  const automationFeatures = [
    { icon: Bell, text: t("slide9.features.feature1") },
    { icon: BarChart3, text: t("slide9.features.feature2") },
    { icon: BookOpen, text: t("slide9.features.feature3") },
    { icon: LineChart, text: t("slide9.features.feature4") },
    { icon: Send, text: t("slide9.features.feature5") },
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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">{t("slide9.section")}</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              {t("slide9.title")}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-8">
              {t("slide9.subtitle")}
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
                  <h3 className="text-lg md:text-xl font-bold">{t("slide9.workflows.title")}</h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                  {t("slide9.workflows.description")}
                </p>
                <div className="p-3 md:p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm md:text-base font-semibold text-center">
                    {t("slide9.workflows.benefit")}
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
