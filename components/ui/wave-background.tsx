"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function WaveBackground() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const isDark = theme === "dark"

    // Colors based on theme
    const waveColor1 = isDark ? "rgba(6, 182, 212, 0.3)" : "rgba(14, 165, 233, 0.25)"
    const waveColor2 = isDark ? "rgba(14, 165, 233, 0.5)" : "rgba(6, 182, 212, 0.4)"
    const waveColor3 = isDark ? "rgba(6, 182, 212, 0.2)" : "rgba(14, 165, 233, 0.15)"

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Animated Wave Background */}
            <svg
                className="absolute w-[200%] h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 1440 800"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={waveColor1} />
                        <stop offset="50%" stopColor={waveColor2} />
                        <stop offset="100%" stopColor={waveColor1} />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={isDark ? "rgba(6, 182, 212, 0.2)" : "rgba(14, 165, 233, 0.15)"} />
                        <stop offset="50%" stopColor={isDark ? "rgba(14, 165, 233, 0.35)" : "rgba(6, 182, 212, 0.3)"} />
                        <stop offset="100%" stopColor={isDark ? "rgba(6, 182, 212, 0.2)" : "rgba(14, 165, 233, 0.15)"} />
                    </linearGradient>
                    <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={isDark ? "rgba(6, 182, 212, 0.1)" : "rgba(14, 165, 233, 0.08)"} />
                        <stop offset="50%" stopColor={isDark ? "rgba(14, 165, 233, 0.2)" : "rgba(6, 182, 212, 0.15)"} />
                        <stop offset="100%" stopColor={isDark ? "rgba(6, 182, 212, 0.1)" : "rgba(14, 165, 233, 0.08)"} />
                    </linearGradient>
                </defs>

                {/* Wave 1 - Main wave */}
                <motion.path
                    d="M-200,400 C0,300 200,500 400,400 C600,300 800,500 1000,400 C1200,300 1400,500 1640,400"
                    fill="none"
                    stroke="url(#waveGradient1)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: 1,
                        opacity: 1,
                        d: [
                            "M-200,400 C0,300 200,500 400,400 C600,300 800,500 1000,400 C1200,300 1400,500 1640,400",
                            "M-200,400 C0,500 200,300 400,400 C600,500 800,300 1000,400 C1200,500 1400,300 1640,400",
                            "M-200,400 C0,300 200,500 400,400 C600,300 800,500 1000,400 C1200,300 1400,500 1640,400"
                        ]
                    }}
                    transition={{
                        pathLength: { duration: 2, ease: "easeInOut" },
                        opacity: { duration: 1 },
                        d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                />

                {/* Wave 2 - Secondary wave */}
                <motion.path
                    d="M-200,420 C0,320 200,520 400,420 C600,320 800,520 1000,420 C1200,320 1400,520 1640,420"
                    fill="none"
                    stroke="url(#waveGradient2)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: 1,
                        opacity: 1,
                        d: [
                            "M-200,420 C0,320 200,520 400,420 C600,320 800,520 1000,420 C1200,320 1400,520 1640,420",
                            "M-200,420 C0,520 200,320 400,420 C600,520 800,320 1000,420 C1200,520 1400,320 1640,420",
                            "M-200,420 C0,320 200,520 400,420 C600,320 800,520 1000,420 C1200,320 1400,520 1640,420"
                        ]
                    }}
                    transition={{
                        pathLength: { duration: 2.5, ease: "easeInOut", delay: 0.3 },
                        opacity: { duration: 1, delay: 0.3 },
                        d: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                    }}
                />

                {/* Wave 3 - Tertiary wave */}
                <motion.path
                    d="M-200,380 C0,280 200,480 400,380 C600,280 800,480 1000,380 C1200,280 1400,480 1640,380"
                    fill="none"
                    stroke="url(#waveGradient3)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: 1,
                        opacity: 1,
                        d: [
                            "M-200,380 C0,280 200,480 400,380 C600,280 800,480 1000,380 C1200,280 1400,480 1640,380",
                            "M-200,380 C0,480 200,280 400,380 C600,480 800,280 1000,380 C1200,480 1400,280 1640,380",
                            "M-200,380 C0,280 200,480 400,380 C600,280 800,480 1000,380 C1200,280 1400,480 1640,380"
                        ]
                    }}
                    transition={{
                        pathLength: { duration: 3, ease: "easeInOut", delay: 0.6 },
                        opacity: { duration: 1, delay: 0.6 },
                        d: { duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }
                    }}
                />

                {/* Filled wave area with gradient */}
                <motion.path
                    d="M-200,400 C0,300 200,500 400,400 C600,300 800,500 1000,400 C1200,300 1400,500 1640,400 L1640,800 L-200,800 Z"
                    fill="url(#waveGradient3)"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        d: [
                            "M-200,400 C0,300 200,500 400,400 C600,300 800,500 1000,400 C1200,300 1400,500 1640,400 L1640,800 L-200,800 Z",
                            "M-200,400 C0,500 200,300 400,400 C600,500 800,300 1000,400 C1200,500 1400,300 1640,400 L1640,800 L-200,800 Z",
                            "M-200,400 C0,300 200,500 400,400 C600,300 800,500 1000,400 C1200,300 1400,500 1640,400 L1640,800 L-200,800 Z"
                        ]
                    }}
                    transition={{
                        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                        d: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
            </svg>
        </div>
    )
}
