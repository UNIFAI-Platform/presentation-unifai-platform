"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { Database, Cog, Eye, Users, TrendingDown, TrendingUp, Sparkles } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
}

export function SlideConclusion({ isActive }: SlideProps) {
  const { t } = useLocale()

  const conclusionItems = [
    { icon: Database, text: t("slide12.items.item1") },
    { icon: Cog, text: t("slide12.items.item2") },
    { icon: Eye, text: t("slide12.items.item3") },
    { icon: Users, text: t("slide12.items.item4") },
    { icon: TrendingDown, text: t("slide12.items.item5") },
    { icon: TrendingUp, text: t("slide12.items.item6") },
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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">{t("slide12.section")}</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              {t("slide12.title")}
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4 md:mb-10"
            />
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-2 md:gap-4">
              {conclusionItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3 p-3 md:flex-col md:items-center md:gap-3 md:p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 md:text-center"
                >
                  <div className="w-9 h-9 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-7 md:h-7 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer - Fixed bottom on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex-shrink-0 mt-4 md:mt-10 p-4 md:p-6 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 border border-primary/40 text-center"
          >
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              <p className="text-sm md:text-2xl font-bold">{t("slide12.footer")}</p>
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
