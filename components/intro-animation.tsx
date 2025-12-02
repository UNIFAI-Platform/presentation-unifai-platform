"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface IntroAnimationProps {
  onComplete: () => void
}

export function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<"logo" | "expand" | "complete">("logo")

  useEffect(() => {
    // Phase 1: Logo visible pendant 1.5s
    const timer1 = setTimeout(() => {
      setPhase("expand")
    }, 1500)

    // Phase 2: Déclencher le chargement du contenu vers la FIN du zoom
    const timer2 = setTimeout(() => {
      onComplete()
    }, 2200)

    // Phase 3: Terminer l'animation d'intro après le zoom complet
    const timer3 = setTimeout(() => {
      setPhase("complete")
    }, 2600)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== "complete" && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Fond avec gradient animé */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c]"
            animate={phase === "expand" ? {
              scale: [1, 2],
              opacity: [1, 0],
            } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Cercles concentriques animés */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-cyan-400/20"
                initial={{ width: 100, height: 100, opacity: 0 }}
                animate={{
                  width: [100, 400 + i * 150],
                  height: [100, 400 + i * 150],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Logo central avec animation */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            style={{ willChange: 'transform, opacity' }}
            initial={{ scale: 0, opacity: 0, rotateY: -180 }}
            animate={phase === "logo" ? {
              scale: 1,
              opacity: 1,
              rotateY: 0,
            } : phase === "expand" ? {
              scale: [1, 1.3, 25],
              opacity: [1, 1, 0],
            } : {}}
            transition={phase === "logo" ? {
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
            } : {
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Glow effect derrière le logo */}
            <motion.div
              className="absolute inset-0 blur-3xl"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 300, height: 300, transform: "translate(-50%, -50%)", left: "50%", top: "50%" }}
            />

            {/* Logo - Utilisation du PNG optimisé pour meilleure performance */}
            <motion.div
              className="relative"
              animate={{ 
                filter: ["drop-shadow(0 0 20px rgba(6,182,212,0.5))", "drop-shadow(0 0 40px rgba(6,182,212,0.8))", "drop-shadow(0 0 20px rgba(6,182,212,0.5))"]
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Logo_white-1.png"
                alt="UnifAI"
                width={180}
                height={180}
                className="relative z-10"
                style={{ willChange: 'transform' }}
              />
            </motion.div>

            {/* Texte animé */}
            <motion.div
              className="mt-6 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.h1
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                UnifAI Platform
              </motion.h1>
            </motion.div>

            {/* Ligne de chargement */}
            <motion.div
              className="mt-8 h-1 bg-white/10 rounded-full overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 200, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Texte de chargement */}
            <motion.p
              className="mt-4 text-sm text-cyan-400/60 font-medium tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading Experience
            </motion.p>
          </motion.div>

          {/* Lignes décoratives */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              x1="0%"
              y1="30%"
              x2="100%"
              y2="30%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />
            <motion.line
              x1="0%"
              y1="70%"
              x2="100%"
              y2="70%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(6,182,212,0.5)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
