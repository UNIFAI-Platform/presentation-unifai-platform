"use client"

import { motion } from "framer-motion"
import { SlideWrapper, fadeInUp, staggerContainer } from "@/components/ui/slide-wrapper"
import { CustomerLogo } from "@/components/icons"
import { 
  Handshake, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Target,
  ChevronRight,
  Sparkles,
  BarChart3,
  Users,
  Rocket,
  CheckCircle2
} from "lucide-react"

interface SlideProps {
  isActive: boolean
  onNavigate?: (slideNumber: number) => void
}

const clientBenefits = [
  {
    icon: TrendingUp,
    title: "Augmentation des ventes",
    description: "Identifiez les opportunités de croissance et optimisez votre performance commerciale",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-400"
  },
  {
    icon: Clock,
    title: "Gain de temps",
    description: "Automatisez les tâches répétitives et concentrez-vous sur l'essentiel",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400"
  },
  {
    icon: ShieldCheck,
    title: "Données fiables",
    description: "Garantissez la qualité et la cohérence de vos données produit",
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400"
  },
  {
    icon: Zap,
    title: "Réactivité accrue",
    description: "Réagissez rapidement aux fluctuations du marché avec des alertes intelligentes",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
    iconColor: "text-orange-400"
  },
]

const deliverables = [
  "Agents IA personnalisés selon vos besoins métier",
  "Intégration avec vos systèmes existants",
  "Tableaux de bord sur mesure",
  "Formation et accompagnement de vos équipes",
  "Support dédié et évolutions continues",
]

export function SlideClient({ isActive, onNavigate }: SlideProps) {
  return (
    <SlideWrapper gradient="dark">
      <div className="h-full flex flex-col px-6 md:px-12 lg:px-24 pt-16 pb-6 md:py-0 md:justify-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isActive ? "animate" : "initial"}
          className="max-w-7xl mx-auto w-full h-full md:h-auto flex flex-col"
        >
          {/* Header with Client Logo Placeholder */}
          <div className="flex-shrink-0">
            <motion.div variants={fadeInUp} className="mb-4 md:mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-primary/60 uppercase tracking-wider">
                    Proposition Personnalisée
                  </span>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2 tracking-tight">
                    Notre collaboration avec
                  </h2>
                </div>
                
                {/* Client Logo */}
                <motion.div
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="w-48 h-20 md:w-64 md:h-24 rounded-2xl bg-white/90 backdrop-blur-sm border border-primary/20 flex items-center justify-center p-6 group hover:border-primary/50 transition-all duration-300 shadow-lg">
                    <CustomerLogo className="w-full h-full object-contain" />
                  </div>
                  {/* Decorative glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50 -z-10" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="w-20 md:w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full mb-4 md:mb-8"
            />
          </div>

          {/* Content - Scrollable on mobile */}
          <div className="flex-1 overflow-y-auto md:overflow-visible min-h-0">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
              
              {/* Left Column - Benefits */}
              <div className="space-y-3 md:space-y-4">
                <motion.h3 
                  variants={fadeInUp}
                  className="text-lg md:text-xl font-semibold flex items-center gap-2 mb-2"
                >
                  <Sparkles className="w-5 h-5 text-accent" />
                  Ce que UnifAI vous apporte
                </motion.h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                  {clientBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${benefit.color} backdrop-blur-sm border ${benefit.borderColor} transition-all duration-300`}
                    >
                      <div className="flex items-start gap-3">
                        <motion.div 
                          className={`w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <benefit.icon className={`w-4 h-4 md:w-5 md:h-5 ${benefit.iconColor}`} />
                        </motion.div>
                        <div>
                          <h4 className="text-sm md:text-base font-semibold mb-1">{benefit.title}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column - Deliverables & CTA */}
              <div className="space-y-3 md:space-y-4">
                <motion.h3 
                  variants={fadeInUp}
                  className="text-lg md:text-xl font-semibold flex items-center gap-2 mb-2"
                >
                  <Rocket className="w-5 h-5 text-primary" />
                  Notre engagement
                </motion.h3>

                <motion.div
                  variants={fadeInUp}
                  className="p-4 md:p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30"
                >
                  <ul className="space-y-2 md:space-y-3">
                    {deliverables.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={fadeInUp}
                        className="flex items-start gap-3"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-foreground/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Stats/Impact Preview */}
                <motion.div
                  variants={fadeInUp}
                  className="grid grid-cols-3 gap-2 md:gap-3"
                >
                  {[
                    { icon: BarChart3, value: "+30%", label: "Efficacité", color: "text-green-400" },
                    { icon: Clock, value: "-50%", label: "Temps", color: "text-blue-400" },
                    { icon: Target, value: "100%", label: "Données", color: "text-purple-400" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center"
                    >
                      <stat.icon className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 ${stat.color}`} />
                      <div className={`text-xl md:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <motion.div
            variants={fadeInUp}
            className="flex-shrink-0 mt-4 md:mt-6"
          >
            <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 border border-primary/30 relative overflow-hidden">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm md:text-lg font-semibold">
                      Prêts à transformer votre entreprise ?
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Commençons cette aventure ensemble
                    </p>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate?.(14)}
                  className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-primary text-primary-foreground font-medium cursor-pointer"
                >
                  <span className="text-sm md:text-base">Démarrer</span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
