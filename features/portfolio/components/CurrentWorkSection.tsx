"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { Badge } from "@/components/ui/badge"
import { Code } from "lucide-react"
import { ThemeContext } from "@/shared/context"

export function CurrentWorkSection() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 border ${currentTheme.border} relative overflow-hidden`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`}
          />
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Actualmente trabajando en</h2>
              <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2">
                <motion.span
                  className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                Activo
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-2xl font-bold mb-4 ${currentTheme.text}`}>G-GLOBAL LOGISTICS INC.</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                  Actualmente trabajo en G Global, donde implemento nuevas funcionalidades y corrijo errores en el
                  sistema WMS. Desarrollo múltiples mejoras y optimizaciones utilizando React y Moleculer.js en una
                  arquitectura de microservicios.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Moleculer.js", "MongoDB", "Microservicios"].map((tech) => (
                    <Badge
                      key={tech}
                      className={`${currentTheme.bg} ${currentTheme.text} border ${currentTheme.border}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-32 h-32 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full flex items-center justify-center border ${currentTheme.border}`}
                >
                  <Code className={`w-16 h-16 ${currentTheme.text}`} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CurrentWorkSection
