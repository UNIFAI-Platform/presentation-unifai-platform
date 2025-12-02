"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Sparkles, Eraser, Grid3X3, Tags, AlertTriangle, ArrowRight } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
}

export function SlideIntelligence({ isActive }: SlideProps) {
  const { t } = useLocale()

  const features = [
    { icon: Eraser, label: t("slide4.features.feature1") },
    { icon: Grid3X3, label: t("slide4.features.feature2") },
    { icon: Tags, label: t("slide4.features.feature3") },
    { icon: Sparkles, label: t("slide4.features.feature4") },
    { icon: AlertTriangle, label: t("slide4.features.feature5") },
  ]

  return (
    <SlideWrapper gradient="dark">
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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">
                {t("slide4.section")}
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              {t("slide4.title1")}
              <br />
              <span className="text-primary">{t("slide4.title2")}</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-10 max-w-2xl">
              {t("slide4.subtitle")}
            </motion.p>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="flex flex-col md:grid md:grid-cols-5 gap-2 md:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-3 md:flex-col md:items-center md:gap-3 md:p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-sm md:text-sm md:text-center font-medium">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer - Fixed bottom on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex-shrink-0 mt-4 md:mt-10 flex items-center gap-3 md:gap-4 p-3 md:p-6 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/30"
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
            <p className="text-sm md:text-xl font-medium">
              {t("slide4.result")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
