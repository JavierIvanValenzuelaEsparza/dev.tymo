"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"
import { useContext, useState } from "react"
import { ThemeContext } from "@/shared/context"
import { skillsWithIcons } from "@/shared/constants"
import { SkillCard } from "./SkillCard"

export const SkillsSection = () => {
  const { currentTheme } = useContext(ThemeContext)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = [
    { name: "All", count: skillsWithIcons.length },
    { name: "Frontend", count: skillsWithIcons.filter((s) => s.category === "Frontend").length },
    { name: "Backend", count: skillsWithIcons.filter((s) => s.category === "Backend").length },
    { name: "Database", count: skillsWithIcons.filter((s) => s.category === "Database").length },
    { name: "Tools", count: skillsWithIcons.filter((s) => s.category === "Tools").length },
  ]

  const filteredSkills =
    selectedCategory === "All"
      ? skillsWithIcons
      : skillsWithIcons.filter((skill) => skill.category === selectedCategory)

  const averageProficiency = Math.round(
    filteredSkills.reduce((acc, skill) => acc + skill.percentage, 0) / filteredSkills.length,
  )

  const maxYearsExperience = Math.max(
    ...filteredSkills.map((s) => s.yearsOfExperience || 0)
  )

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border ${currentTheme.border} ${currentTheme.text} mb-6 shadow-lg shadow-${currentTheme.primary}/20`}
          >
            <Zap className="w-4 h-4 mr-2" />
            Habilidades
          </Badge>
          <h2
            className={`text-5xl md:text-7xl font-bold pb-1 mb-6 bg-gradient-to-r ${currentTheme.text.replace(
              "text-",
              "from-",
            )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
          >
            Tecnologías que he Trabajado
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Explicación general completa de mi experiencia técnica en tecnologías frontend, backend, bases de datos y herramientas de desarrollo.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 sm:grid-cols-3 mb-12"
        >
          <div className={`rounded-2xl border ${currentTheme.border} bg-gray-900/50 backdrop-blur-lg p-6 text-center group hover:border-${currentTheme.primary}/40 transition-all duration-300`}>
            <div className={`text-4xl font-bold bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text mb-2`}>
              {filteredSkills.length}
            </div>
            <div className="text-sm text-gray-100">Tecnologías</div>
          </div>
          <div className={`rounded-2xl border ${currentTheme.border} bg-gray-900/50 backdrop-blur-lg p-6 text-center group hover:border-${currentTheme.primary}/40 transition-all duration-300`}>
            <div className={`text-4xl font-bold bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text mb-2`}>
              {averageProficiency}%
            </div>
            <div className="text-sm text-gray-100">Dominio promedio</div>
          </div>
          <div className={`rounded-2xl border ${currentTheme.border} bg-gray-900/50 backdrop-blur-lg p-6 text-center group hover:border-${currentTheme.primary}/40 transition-all duration-300`}>
            <div className={`text-4xl font-bold bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} bg-clip-text mb-2`}>
              {maxYearsExperience}
            </div>
            <div className="text-sm text-gray-100">Años de experiencia en Desarrollo</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "outline"}
              className={`cursor-pointer gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                selectedCategory === category.name
                  ? `bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border-transparent text-white shadow-lg shadow-${currentTheme.primary}/25`
                  : `border-${currentTheme.border} ${currentTheme.text} hover:border-${currentTheme.primary}/40 hover:bg-${currentTheme.primary}/5`
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  selectedCategory === category.name
                    ? "bg-white/20 text-white"
                    : "bg-gray-800 text-gray-300"
                }`}
              >
                {category.count}
              </span>
            </Badge>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
