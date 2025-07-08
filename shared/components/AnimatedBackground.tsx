"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { ThemeContext } from "@/shared/context"

interface AnimatedBackgroundProps {
  mousePosition: { x: number; y: number }
}

export const AnimatedBackground = ({ mousePosition }: AnimatedBackgroundProps) => {
  const { currentTheme } = useContext(ThemeContext)

  const getRgbaColor = (primary: string) => {
    const colorMap: Record<string, string> = {
      emerald: "16, 185, 129",
      blue: "59, 130, 246",
      purple: "147, 51, 234",
      red: "239, 68, 68",
      orange: "249, 115, 22",
      cyan: "6, 182, 212",
    }
    return colorMap[primary] || "16, 185, 129"
  }

  const rgbaColor = getRgbaColor(currentTheme.primary)

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full blur-3xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className={`absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r ${currentTheme.gradientTo} ${currentTheme.gradientFrom} rounded-full blur-3xl`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Mouse Follower */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${rgbaColor}, 0.08), transparent 60%)`,
        }}
      />

      {/* Floating Particles */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${currentTheme.particle} rounded-full opacity-30`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.8, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
        style={{
          backgroundImage: `linear-gradient(rgba(${rgbaColor}, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(${rgbaColor}, 0.03) 1px, transparent 1px)`,
        }}
      />
    </div>
  )
}
