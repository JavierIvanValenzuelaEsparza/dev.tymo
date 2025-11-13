"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"
import { useContext } from "react"
import { ThemeContext } from "@/shared/context"
import { Skill } from "@/shared/types"

interface SkillCardProps {
  skill: Skill
  index: number
}

export const SkillCard = ({ skill, index }: SkillCardProps) => {
  const { currentTheme } = useContext(ThemeContext)

  const getGradientColors = (primary: string, secondary: string) => {
    const colorMap: Record<string, string> = {
      emerald: "#10b981",
      blue: "#3b82f6",
      purple: "#9333ea",
      red: "#ef4444",
      orange: "#f97316",
      cyan: "#06b6d4",
      teal: "#14b8a6",
      indigo: "#6366f1",
      violet: "#8b5cf6",
      rose: "#f43f5e",
      amber: "#f59e0b",
    }
    return {
      primary: colorMap[primary] || "#10b981",
      secondary: colorMap[secondary] || "#14b8a6",
    }
  }

  const getIconColor = (skillName: string) => {
    const iconColors: Record<string, string> = {
      "React Js": "#61DAFB",
      "Node Js": "#339933",
      "Angular Js": "#DD0031",
      "Next Js": "#FFFFFF",
      "Laravel": "#FF2D20",
      "Django": "#092E20",
      "GitHub": "#FFFFFF",
      "MongoDB": "#47A248",
      "SQL": "#4479A1",
    }
    return iconColors[skillName] || "#8B5CF6"
  }

  const gradientColors = getGradientColors(currentTheme.primary, currentTheme.secondary)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="group"
    >
      <Card
        className={`bg-gray-900/50 backdrop-blur-lg border ${currentTheme.border} hover:border-${currentTheme.primary}/40 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-${currentTheme.primary}/20 relative`}
      >
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div
              className="p-4 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 group-hover:from-gray-700/50 group-hover:to-gray-800/50 transition-all duration-300"
              style={{
                boxShadow: `0 0 30px ${getIconColor(skill.name)}15`,
              }}
            >
              <skill.icon className="w-12 h-12" style={{ color: getIconColor(skill.name) }} />
            </div>

            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="transparent"
                  className="text-gray-700/50"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke={`url(#gradient-${index})`}
                  strokeWidth="6"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                  whileInView={{
                    strokeDashoffset: 2 * Math.PI * 40 * (1 - skill.percentage / 100),
                  }}
                  transition={{ duration: 2, delay: index * 0.1, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={gradientColors.primary} />
                    <stop offset="100%" stopColor={gradientColors.secondary} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-2xl font-bold ${currentTheme.text}`}>{skill.percentage}%</span>
              </div>
            </div>

            <div className="space-y-2 w-full">
              <h3
                className={`text-xl font-bold text-white group-hover:text-${currentTheme.primary} transition-colors`}
              >
                {skill.name}
              </h3>
              
              {skill.category && (
                <Badge
                  variant="outline"
                  className={`text-xs ${currentTheme.text} border-${currentTheme.primary}/30`}
                >
                  {skill.category}
                </Badge>
              )}

              {skill.description && (
                <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
              )}

              {skill.yearsOfExperience && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 pt-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{skill.yearsOfExperience} years experience</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>

        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        />
      </Card>
    </motion.div>
  )
}
