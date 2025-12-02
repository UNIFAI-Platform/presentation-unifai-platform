"use client"

import { useState, useEffect, useCallback, useRef, forwardRef, useImperativeHandle } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Maximize, Monitor } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

interface AutoPlayControlProps {
  currentSlide: number
  totalSlides: number
  onNavigate: (slide: number) => void
  slideDuration?: number // en millisecondes
  isPlaying?: boolean
  onTogglePlay?: () => void
}

export interface AutoPlayControlRef {
  toggle: () => void
}

export const AutoPlayControl = forwardRef<AutoPlayControlRef, AutoPlayControlProps>(function AutoPlayControl({ 
  currentSlide, 
  totalSlides, 
  onNavigate,
  slideDuration = 10000, // 10 secondes par défaut
  isPlaying: externalIsPlaying,
  onTogglePlay: externalTogglePlay
}, ref) {
  const { locale } = useLocale()
  const [internalIsPlaying, setInternalIsPlaying] = useState(false)
  
  // Utiliser l'état externe si fourni, sinon l'état interne
  const isPlaying = externalIsPlaying !== undefined ? externalIsPlaying : internalIsPlaying
  const setIsPlaying = (value: boolean) => {
    setInternalIsPlaying(value)
  }
  const [showModal, setShowModal] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  // Mode choisi pendant cette session (en mémoire seulement, pas persisté)
  const [sessionMode, setSessionMode] = useState<"fullscreen" | "windowed" | null>(null)
  // Pour garder la progression visible même en pause
  const [hasStartedOnce, setHasStartedOnce] = useState(false)
  // Clé unique pour forcer le re-render de la barre de progression
  const [animationKey, setAnimationKey] = useState(0)
  // Progression sauvegardée quand on met en pause (en pourcentage 0-100)
  const [savedProgress, setSavedProgress] = useState(0)
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  // Slide précédent pour détecter les changements
  const prevSlideRef = useRef<number>(currentSlide)

  const translations = {
    fr: {
      startPresentation: "Démarrer la présentation",
      fullscreen: "Plein écran",
      windowed: "Mode fenêtré",
      cancel: "Annuler"
    },
    en: {
      startPresentation: "Start presentation",
      fullscreen: "Fullscreen",
      windowed: "Windowed mode",
      cancel: "Cancel"
    }
  }

  const t = translations[locale as keyof typeof translations] || translations.fr

  // Gestion du plein écran
  const enterFullscreen = useCallback(async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen()
        setIsFullscreen(true)
      }
    } catch (error) {
      console.error("Fullscreen error:", error)
    }
  }, [])

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (error) {
      console.error("Exit fullscreen error:", error)
    }
  }, [])

  // Écouter les changements de fullscreen (ex: touche Escape)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  // Détecter les changements de slide et reset la progression
  useEffect(() => {
    if (currentSlide !== prevSlideRef.current) {
      prevSlideRef.current = currentSlide
      // Reset complet de la progression pour le nouveau slide
      setSavedProgress(0)
      setAnimationKey(prev => prev + 1)
      startTimeRef.current = Date.now()
    }
  }, [currentSlide])

  // Démarrer la lecture (première fois, depuis la modal)
  const startPlayback = useCallback((withFullscreen: boolean) => {
    setShowModal(false)
    setHasStartedOnce(true)
    
    // Sauvegarder le choix en mémoire pour cette session seulement
    setSessionMode(withFullscreen ? "fullscreen" : "windowed")
    
    if (withFullscreen) {
      enterFullscreen()
    }
    
    // Reset complet pour un nouveau démarrage
    setSavedProgress(0)
    setAnimationKey(prev => prev + 1)
    startTimeRef.current = Date.now()
    
    // Petit délai pour s'assurer que le DOM est prêt
    setTimeout(() => {
      setIsPlaying(true)
    }, 50)
  }, [enterFullscreen])

  // Reprendre la lecture (sans modal, depuis une pause)
  const resumePlayback = useCallback(() => {
    setHasStartedOnce(true)
    setAnimationKey(prev => prev + 1)
    startTimeRef.current = Date.now()
    
    setTimeout(() => {
      setIsPlaying(true)
    }, 50)
  }, [])

  // Mettre en pause (garder la progression)
  const pausePlayback = useCallback(() => {
    // Calculer la progression actuelle basée sur le temps écoulé
    const elapsed = Date.now() - startTimeRef.current
    const additionalProgress = (elapsed / slideDuration) * 100
    const newProgress = Math.min(savedProgress + additionalProgress, 100)
    
    setSavedProgress(newProgress)
    setIsPlaying(false)
    
    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
      intervalRef.current = null
    }
  }, [savedProgress, slideDuration])

  // Toggle Play/Pause
  const togglePlayback = useCallback(() => {
    if (isPlaying) {
      pausePlayback()
    } else {
      // Si on est au dernier slide et qu'on appuie sur play, recommencer
      if (currentSlide >= totalSlides) {
        onNavigate(1)
        setSavedProgress(0)
      }
      
      // Si un mode a été choisi pendant cette session, reprendre directement
      if (sessionMode) {
        resumePlayback()
      } else {
        // Première fois de cette session: afficher la modal
        setShowModal(true)
      }
    }
    // Notifier le parent si callback fourni
    externalTogglePlay?.()
  }, [isPlaying, pausePlayback, currentSlide, totalSlides, onNavigate, sessionMode, resumePlayback, externalTogglePlay])

  // Exposer la fonction toggle au parent via ref
  useImperativeHandle(ref, () => ({
    toggle: togglePlayback
  }), [togglePlayback])

  // Gestion du timer pour passer au slide suivant
  useEffect(() => {
    if (!isPlaying) return

    const timeRemaining = slideDuration * (1 - savedProgress / 100)

    // Timer pour passer au slide suivant
    intervalRef.current = setTimeout(() => {
      if (currentSlide < totalSlides) {
        onNavigate(currentSlide + 1)
      } else {
        // Fin de la présentation
        setIsPlaying(false)
        setHasStartedOnce(false)
        setSavedProgress(0)
        if (isFullscreen) {
          exitFullscreen()
        }
      }
    }, timeRemaining)

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [isPlaying, currentSlide, totalSlides, onNavigate, slideDuration, savedProgress, isFullscreen, exitFullscreen])

  // Calculer la durée de l'animation CSS (temps restant en secondes)
  const getAnimationDuration = () => {
    return (slideDuration * (1 - savedProgress / 100)) / 1000
  }

  return (
    <>
      {/* Barre de progression unique en haut - visible quand en lecture OU en pause avec progression */}
      <AnimatePresence>
        {(isPlaying || (hasStartedOnce && savedProgress > 0)) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
          >
            {/* Barre de progression unique avec animation CSS native */}
            <div className="w-full h-1.5 bg-white/10 overflow-hidden">
              {isPlaying ? (
                // Barre animée quand en lecture
                <div
                  key={`playing-${animationKey}`}
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-r-full animate-progress"
                  style={{
                    '--start-width': `${savedProgress}%`,
                    '--duration': `${getAnimationDuration()}s`,
                  } as React.CSSProperties}
                />
              ) : (
                // Barre statique quand en pause
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-r-full"
                  style={{ width: `${savedProgress}%` }}
                />
              )}
            </div>
            
            {/* Indicateur de slide actuel - centré et non bloquant */}
            <div className="flex justify-center mt-2">
              <span className="text-xs text-white/60 font-medium bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {currentSlide} / {totalSlides}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton Play/Pause */}
      <button
        onClick={togglePlayback}
        className={`relative z-50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full p-2 text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-card/50 backdrop-blur-sm border border-border hover:scale-105 h-10 w-10 ${
          isPlaying 
            ? "text-orange-500 border-orange-500/50 hover:bg-orange-500/20" 
            : "text-green-500 border-green-500/50 hover:bg-green-500/20"
        }`}
        aria-label={isPlaying ? "Pause" : "Play"}
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" fill="currentColor" />
        ) : (
          <Play className="h-4 w-4" fill="currentColor" />
        )}
      </button>

      {/* Modal de confirmation */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            {/* Backdrop flou */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            
            {/* Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative z-10 bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-2xl max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Titre */}
              <h3 className="text-lg font-semibold text-foreground text-center mb-6">
                {t.startPresentation}
              </h3>

              {/* Boutons */}
              <div className="flex flex-col gap-3">
                {/* Plein écran */}
                <button
                  onClick={() => startPlayback(true)}
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-500/25"
                >
                  <Maximize className="h-5 w-5" />
                  {t.fullscreen}
                </button>

                {/* Mode fenêtré */}
                <button
                  onClick={() => startPlayback(false)}
                  className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-xl bg-card border border-border text-foreground font-medium hover:bg-muted transition-all duration-300 hover:scale-[1.02]"
                >
                  <Monitor className="h-5 w-5" />
                  {t.windowed}
                </button>

                {/* Annuler */}
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.cancel}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})
