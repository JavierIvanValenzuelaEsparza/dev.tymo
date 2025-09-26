"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"
import { useContext } from "react"
import { ThemeContext } from "@/shared/context"
import { experiences } from "@/shared/constants"
import Image from "next/image"

export const ExperienceSection = () => {
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
            <Briefcase className="w-4 h-4 mr-2" />
            Experiencia
          </Badge>
          <h2
            className={`text-5xl md:text-6xl font-bold pb-1 mb-6 bg-gradient-to-r ${currentTheme.text.replace(
              "text-",
              "from-",
            )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
          >
            Mi Trayectoria Profesional
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card
                className={`bg-gray-900/50 backdrop-blur-lg border ${currentTheme.border} ${currentTheme.borderHover} transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:${currentTheme.shadow}`}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-4 mb-4">
                        <h3
                          className={`text-2xl font-bold text-white group-hover:${currentTheme.text} transition-colors`}
                        >
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                            <motion.span
                              className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block"
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            />
                            Actual
                          </Badge>
                        )}
                      </div>
                      <div className={`flex items-center gap-4 mb-4 ${currentTheme.text}`}>
                        <span className="font-semibold">{exp.position}</span>
                        <span className="text-gray-400">•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed text-justify">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className={`${currentTheme.bg} ${currentTheme.text} border ${currentTheme.border}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/3 flex justify-center items-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-24 h-24 bg-white  rounded-full flex items-center justify-center border ${currentTheme.border} overflow-hidden`}
                      >
                        {exp.logo ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={118}
                            height={118}
                            className="object-contain"
                          />
                        ) : (
                          <Briefcase className={`w-12 h-12 ${currentTheme.text}`} />
                        )}
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
