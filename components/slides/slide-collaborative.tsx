"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { FileText, MessageSquare, BookOpen, BarChart2, MessageCircle, Play, Bell } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
}

export function SlideCollaborative({ isActive }: SlideProps) {
  const { t } = useLocale()

  const collaborativeFeatures = [
    { icon: FileText, text: t("slide7.features.feature1") },
    { icon: MessageSquare, text: t("slide7.features.feature2") },
    { icon: BookOpen, text: t("slide7.features.feature3") },
    { icon: BarChart2, text: t("slide7.features.feature4") },
    { icon: MessageCircle, text: t("slide7.features.feature5") },
    { icon: Play, text: t("slide7.features.feature6") },
    { icon: Bell, text: t("slide7.features.feature7") },
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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">{t("slide7.section")}</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              {t("slide7.title")}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-8">
              {t("slide7.subtitle")}
            </motion.p>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="grid md:grid-cols-2 gap-2 md:gap-3">
              {collaborativeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-colors"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="text-xs md:text-base">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer - Fixed bottom on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex-shrink-0 mt-4 md:mt-8 p-3 md:p-5 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-center"
          >
            <p className="text-sm md:text-lg font-semibold">{t("slide7.footer")}</p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
