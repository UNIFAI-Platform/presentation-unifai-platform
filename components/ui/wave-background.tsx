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

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />

            {/* Animated Waves */}
            <div className="absolute inset-0 flex flex-col justify-end">
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className="absolute bottom-0 left-0 right-0 h-[50vh] opacity-30"
                        initial={{ x: "0%" }}
                        animate={{ x: ["0%", "-50%", "0%"] }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                        style={{
                            zIndex: i,
                            bottom: `${(i - 1) * 10}%`,
                        }}
                    >
                        <svg
                            viewBox="0 0 1440 320"
                            className="w-[200%] h-full absolute bottom-0"
                            preserveAspectRatio="none"
                        >
                            <path
                                fill={isDark ? `rgba(56, 189, 248, ${0.1 - i * 0.02})` : `rgba(14, 165, 233, ${0.1 - i * 0.02})`}
                                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </svg>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
