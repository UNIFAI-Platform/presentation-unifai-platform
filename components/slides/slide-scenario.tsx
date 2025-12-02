"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { AlertCircle, MessageSquare, ArrowRight, CheckCircle2, Clock } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
}

export function SlideScenario({ isActive }: SlideProps) {
  const { t } = useLocale()
  
  const scenarioSteps = [
    {
      icon: AlertCircle,
      title: t('slide8.steps.step1.title'),
      description: t('slide8.steps.step1.description'),
      color: "text-yellow-400",
    },
    {
      icon: MessageSquare,
      title: t('slide8.steps.step2.title'),
      description: t('slide8.steps.step2.description'),
      color: "text-blue-400",
    },
    {
      icon: ArrowRight,
      title: t('slide8.steps.step3.title'),
      description: t('slide8.steps.step3.description'),
      color: "text-purple-400",
    },
    {
      icon: CheckCircle2,
      title: t('slide8.steps.step4.title'),
      description: t('slide8.steps.step4.description'),
      color: "text-green-400",
    },
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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">{t('slide8.section')}</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
              {t('slide8.title')}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm md:text-base text-muted-foreground mb-4 md:mb-8">
              {t('slide8.subtitle')}
            </motion.p>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="relative">
              <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-green-500 hidden md:block" />

              <div className="space-y-2 md:space-y-4">
                {scenarioSteps.map((step, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex items-start gap-3 md:gap-6">
                    <div
                      className={`relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-card border-2 border-border flex items-center justify-center flex-shrink-0`}
                    >
                      <step.icon className={`w-4 h-4 md:w-5 md:h-5 ${step.color}`} />
                    </div>
                    <div className="flex-1 p-3 md:p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                      <h3 className="text-sm md:text-base font-semibold mb-1">{step.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer - Fixed bottom on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex-shrink-0 mt-4 md:mt-8 flex items-center gap-3 md:gap-4 p-3 md:p-5 rounded-xl bg-gradient-to-r from-green-500/20 to-accent/20 border border-green-500/30"
          >
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-green-400 flex-shrink-0" />
            <p className="text-sm md:text-lg font-semibold">
              {t('slide8.result').replace('{minutes}', '5')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
