"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"
import { useContext } from "react"
import { ThemeContext } from "@/shared/context"
import { skillsWithIcons } from "@/shared/constants"

export const SkillsSection = () => {
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
      secondary: colorMap[secondary] || "#14b8a6"
    }
  }

  const getIconColor = (skillName: string) => {
    const iconColors: Record<string, string> = {
      "React Js": "#61DAFB",
      "Node Js": "#339933",
      "Angular Js": "#DD0031",
      "Next Js": "#000000",
      "Laravel": "#FF2D20",
      "Django": "#092E20",
      "GitHub": "#181717",
      "MongoDB": "#47A248",
      "SQL": "#4479A1",
    }
    return iconColors[skillName] || "#8B5CF6"
  }

  const gradientColors = getGradientColors(currentTheme.primary, currentTheme.secondary)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border ${currentTheme.border} ${currentTheme.text} mb-6`}
          >
            <Zap className="w-4 h-4 mr-2" />
            Habilidades
          </Badge>
          <h2
            className={`text-5xl md:text-5xl font-bold pb-1 mb-8 bg-gradient-to-r ${currentTheme.text.replace(
              "text-",
              "from-",
            )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
          >
            Tecnologías que Domino
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsWithIcons.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <Card
                className={`bg-gray-900/50 backdrop-blur-lg border ${currentTheme.border} ${currentTheme.borderHover} transition-all duration-300 p-6 text-center group-hover:shadow-2xl group-hover:${currentTheme.shadow}`}
              >
                <CardContent className="p-0">
                  <div className="text-4xl mb-4">
                    <skill.icon 
                      className="w-12 h-12 mx-auto" 
                      style={{ color: getIconColor(skill.name) }}
                    />
                  </div>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="6"
                        fill="transparent"
                        className="text-gray-700"
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
                        transition={{ duration: 2, delay: index * 0.1 }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={gradientColors.primary} />
                          <stop offset="100%" stopColor={gradientColors.secondary} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-xl font-bold ${currentTheme.text}`}>{skill.percentage}%</span>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-white group-hover:${currentTheme.text} transition-colors`}>
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
