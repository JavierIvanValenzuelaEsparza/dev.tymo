"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { ThemeContext } from "@/shared/context"

export function EducationSection() {
  const { currentTheme } = useContext(ThemeContext)

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
            <GraduationCap className="w-4 h-4 mr-2" />
            Educación
          </Badge>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${currentTheme.text.replace(
              "text-",
              "from-",
            )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
          >
            Formación Académica
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className={`bg-gray-900/50 backdrop-blur-lg border ${currentTheme.border} rounded-3xl p-8 md:p-12 ${currentTheme.borderHover} transition-all duration-300 hover:shadow-2xl hover:${currentTheme.shadow}`}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Ingeniería En Desarrollo Y Gestión De Software
              </h3>
              <p className={`${currentTheme.text} text-xl mb-8 font-semibold`}>
                Universidad Tecnológica de Tijuana
              </p>

              <h4 className={`text-2xl font-bold mb-4 ${currentTheme.text}`}>Certificaciones</h4>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 p-4 ${currentTheme.bg} rounded-lg border ${currentTheme.border}`}
                >
                  <Award className={`w-6 h-6 ${currentTheme.text}`} />
                  <span className="text-gray-300 font-medium">Certificación ITEP B1</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 p-4 ${currentTheme.bg} rounded-lg border ${currentTheme.border}`}
                >
                  <Award className={`w-6 h-6 ${currentTheme.text}`} />
                  <span className="text-gray-300 font-medium">EC0935- Gestión de trabajo por proyectos</span>
                </motion.div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-32 h-32 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full flex items-center justify-center border ${currentTheme.border}`}
              >
                <GraduationCap className={`w-16 h-16 ${currentTheme.text}`} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EducationSection
