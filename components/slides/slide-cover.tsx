"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { ChevronDown, Hand, Sparkles } from "lucide-react"
import { ThemeLogo } from "@/components/theme-logo"
import { GradientText } from "@/components/gradient-text"
import { useLocale } from "@/components/locale-provider"

interface SlideProps {
  isActive: boolean
  onNext?: () => void
}

export function SlideCover({ isActive, onNext }: SlideProps) {
  const { t } = useLocale()
  
  return (
    <SlideWrapper gradient="blue">
      {/* Decorative Sparkle - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20"
      >
        <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-muted-foreground/30" />
      </motion.div>

      <div className="h-full flex flex-col items-center justify-center px-6 md:px-12 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="text-center max-w-4xl"
        >
          {/* Logo */}
          <motion.div variants={fadeInUp} className="mb-8">
            <ThemeLogo className="h-16 md:h-20 mx-auto" />
          </motion.div>

          {/* Title */}
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <GradientText>
              UnifAI Platform
            </GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 leading-relaxed"
          >
            {t('slide1.title1')} {t('slide1.title2')} {t('slide1.title3')}
          </motion.p>

          {/* Description */}
          <motion.p variants={fadeInUp} className="text-base md:text-lg text-primary mb-8">
            {t('slide1.tagline')}
          </motion.p>

          {/* Presented by */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-card/30 backdrop-blur-sm border border-border/50 mb-8"
          >
            <span className="text-sm font-medium text-muted-foreground">{t('slide1.presentedBy')}</span>
            <span className="text-sm font-bold text-foreground">{t('slide1.team')}</span>
          </motion.div>

          {/* Trade Shows / Fairs */}
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="text-center mb-4">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
                {t('slide1.seenAt')}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {/* 2023 */}
              <div className="group flex flex-col items-center p-3 rounded-xl bg-card/20 hover:bg-card/40 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                <span className="text-sm md:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">2023</span>
                <div className="flex flex-wrap justify-center gap-3 items-center">
                  <a href="https://vivatechnology.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                    <img src="/images/Vivatech.png" alt="Vivatech" className="h-6 md:h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0" />
                  </a>
                  <a href="https://www.techforretail.com/fr/partner/0808e59a-5469-f011-8dc9-6045bd89b60c/unifai" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                    <img src="/images/Tech-for-Retail.png" alt="Tech for Retail" className="h-6 md:h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0" />
                  </a>
                </div>
              </div>

              {/* 2024 */}
              <div className="group flex flex-col items-center p-3 rounded-xl bg-card/20 hover:bg-card/40 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                <span className="text-sm md:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">2024</span>
                <div className="flex flex-wrap justify-center gap-3 items-center">
                  <a href="https://www.techforretail.com/fr/partner/0808e59a-5469-f011-8dc9-6045bd89b60c/unifai" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                    <img src="/images/Tech-for-Retail.png" alt="Tech for Retail" className="h-6 md:h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0" />
                  </a>
                </div>
              </div>

              {/* 2025 */}
              <div className="group flex flex-col items-center p-3 rounded-xl bg-card/20 hover:bg-card/40 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                <span className="text-sm md:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">2025</span>
                <div className="flex flex-wrap justify-center gap-3 items-center">
                  <a href="https://vivatechnology.com/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                    <img src="/images/Vivatech.png" alt="Vivatech" className="h-6 md:h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0" />
                  </a>
                  <a href="https://www.techforretail.com/fr/partner/0808e59a-5469-f011-8dc9-6045bd89b60c/unifai" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                    <img src="/images/Tech-for-Retail.png" alt="Tech for Retail" className="h-6 md:h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0" />
                  </a>
                  <a href="https://www.sirha-lyon.com/fr" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                    <img src="/images/Sirh-lyon.png" alt="Sirha Lyon" className="h-6 md:h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center"
          >
            {/* Progress line */}
            <div className="w-8 h-0.5 bg-primary/60 rounded-full mb-4" />
            
            <motion.button
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              onClick={onNext}
              className="flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform"
            >
              <span className="text-xs uppercase tracking-widest text-muted-foreground/60 hover:text-primary/70 transition-colors">
                {t('common.discover')}
              </span>
              <ChevronDown className="w-5 h-5 text-muted-foreground/50 hover:text-primary transition-colors" />
            </motion.button>
          </motion.div>
        </div>

        {/* Swipe Indicator - Mobile only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex md:hidden flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50">{t('slide1.swipeHint')}</span>
          <div className="relative flex items-center justify-center">
            {/* Ligne de guidage */}
            <div className="absolute w-16 h-0.5 bg-muted-foreground/20 rounded-full" />

            {/* Main animée */}
            <motion.div
              animate={{
                x: [-25, 25, -25],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
              className="relative z-10"
            >
              <Hand className="w-5 h-5 text-primary/70 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
