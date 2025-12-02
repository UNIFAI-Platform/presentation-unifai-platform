"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, fadeInLeft, staggerContainer } from "@/components/ui/slide-wrapper"
import { TrendingUp, Database, Zap, Layers, Clock } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
}

export function SlideContext({ isActive }: SlideProps) {
  const { t } = useLocale()
  
  const contextItems = [
    { icon: TrendingUp, text: t('slide2.items.item1') },
    { icon: Database, text: t('slide2.items.item2') },
    { icon: Zap, text: t('slide2.items.item3') },
    { icon: Layers, text: t('slide2.items.item4') },
    { icon: Clock, text: t('slide2.items.item5') },
  ]

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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">{t('slide2.section')}</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-5xl font-bold mb-2 md:mb-4 tracking-tight">
              {t('slide2.title')}
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4 md:mb-10"
            />
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="grid gap-2 md:gap-5">
              {contextItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  custom={index}
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <p className="text-sm md:text-lg text-foreground/90 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer - Fixed bottom on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex-shrink-0 mt-4 md:mt-8 p-3 md:p-5 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30"
          >
            <p className="text-sm md:text-xl font-semibold text-center">
              {t('slide2.challenge')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
