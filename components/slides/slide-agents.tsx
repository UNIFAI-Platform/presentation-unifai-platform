"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { TrendingUp, Truck, Megaphone, Newspaper } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
}

export function SlideAgents({ isActive }: SlideProps) {
  const { t } = useLocale()

  const agents = [
    {
      name: t("slide6.agents.sales.name"),
      icon: TrendingUp,
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30",
      features: [
        t("slide6.agents.sales.feature1"),
        t("slide6.agents.sales.feature2"),
        t("slide6.agents.sales.feature3"),
      ],
    },
    {
      name: t("slide6.agents.supply.name"),
      icon: Truck,
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30",
      features: [
        t("slide6.agents.supply.feature1"),
        t("slide6.agents.supply.feature2"),
        t("slide6.agents.supply.feature3"),
      ],
    },
    {
      name: t("slide6.agents.marketing.name"),
      icon: Megaphone,
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-500/30",
      features: [
        t("slide6.agents.marketing.feature1"),
        t("slide6.agents.marketing.feature2"),
        t("slide6.agents.marketing.feature3"),
      ],
    },
    {
      name: t("slide6.agents.news.name"),
      icon: Newspaper,
      color: "from-orange-500/20 to-orange-600/20",
      borderColor: "border-orange-500/30",
      features: [
        t("slide6.agents.news.feature1"),
        t("slide6.agents.news.feature2"),
        t("slide6.agents.news.feature3"),
      ],
    },
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
              <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">{t("slide6.section")}</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">
              {t("slide6.title")}
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm md:text-base text-muted-foreground mb-4 md:mb-8">
              {t("slide6.subtitle")}
            </motion.p>
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
              {agents.map((agent, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`p-3 md:p-5 rounded-xl bg-gradient-to-br ${agent.color} backdrop-blur-sm border ${agent.borderColor}`}
                >
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center">
                      <agent.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                    </div>
                    <h3 className="text-sm md:text-lg font-bold">{agent.name}</h3>
                  </div>
                  <ul className="space-y-1 md:space-y-2">
                    {agent.features
                      .filter((f) => f)
                      .map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-xs md:text-sm text-foreground/80">
                          <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white/50" />
                          {feature}
                        </li>
                      ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer - Fixed bottom on mobile */}
          <motion.div
            variants={fadeInUp}
            className="flex-shrink-0 mt-4 md:mt-6 text-center p-3 md:p-4 rounded-xl bg-card/30 border border-border/30"
          >
            <p className="text-sm md:text-lg font-medium">
              {t("slide6.footer")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
