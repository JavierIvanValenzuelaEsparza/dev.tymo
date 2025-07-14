"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThemeContext } from "@/shared/context"
import {
  SiReact,
  SiMoleculer,
  SiNodedotjs,
  SiNextdotjs,
  SiLaravel,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGitlab,
} from "react-icons/si"
import { GiGearStickPattern } from "react-icons/gi";
import { MapPin, Calendar, Users, Code2 } from "lucide-react"
import GGIcon from "@/img/GG-Favicon.webp"
export function CurrentWorkSection() {
  const { currentTheme } = useContext(ThemeContext)

  const techStack = [
    { name: "React", icon: SiReact},
    { name: "Moleculer.js", icon: SiMoleculer },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Microservicios", icon: GiGearStickPattern }
  ]

  const workDetails = [
    { icon: MapPin, label: "Ubicación", value: "G-Global" },
    { icon: Calendar, label: "Inicio", value: "2024" },
    { icon: Users, label: "Equipo", value: "Desarrollo" },
    { icon: Code2, label: "Rol", value: "Desarollador de Software" }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-gray-800/5" />
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-32 h-32 opacity-5"
      >
        <div className={`w-full h-full rounded-full bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`} />
      </motion.div>
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border ${currentTheme.border} relative overflow-hidden shadow-2xl`}
        >
          <motion.div
            animate={{
              background: [
                `linear-gradient(45deg, ${currentTheme.gradientFrom.replace('from-', '')}/10, ${currentTheme.gradientTo.replace('to-', '')}/10)`,
                `linear-gradient(225deg, ${currentTheme.gradientFrom.replace('from-', '')}/15, ${currentTheme.gradientTo.replace('to-', '')}/15)`,
                `linear-gradient(45deg, ${currentTheme.gradientFrom.replace('from-', '')}/10, ${currentTheme.gradientTo.replace('to-', '')}/10)`
              ]
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0"
          />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold text-white"
              >
                Actualmente trabajando en
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 px-4 py-2 text-sm font-medium">
                  <motion.span
                    className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                  Activo
                </Badge>
              </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${currentTheme.text} flex items-center gap-3`}>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-8 h-8"
                    >
                      <img src={GGIcon.src} alt="G-Global Logo" className="w-full h-full object-contain" />
                    </motion.div>
                    G-GLOBAL LOGISTICS INC.
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-justify text-lg">
                    Actualmente trabajo en G Global, donde implemento nuevas funcionalidades y corrijo errores en el
                    sistema WMS. Desarrollo múltiples mejoras y optimizaciones utilizando React y Moleculer.js en una
                    arquitectura de microservicios, contribuyendo al crecimiento y eficiencia de la plataforma logística.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="grid grid-cols-2 gap-4 mb-6"
                >
                  {workDetails.map((detail, index) => {
                    const Icon = detail.icon
                    return (
                      <motion.div
                        key={detail.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className={`flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 border ${currentTheme.border}/50`}
                      >
                        <Icon className={`w-4 h-4 ${currentTheme.text}`} />
                        <div>
                          <p className="text-gray-400 text-xs">{detail.label}</p>
                          <p className="text-white text-sm font-medium">{detail.value}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Code2 className={`w-4 h-4 ${currentTheme.text}`} />
                    Stack Tecnológico
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.1 * index,
                          type: "spring",
                          stiffness: 300
                        }}
                      >
                        <Badge
                          className={`${currentTheme.bg} ${currentTheme.text} border ${currentTheme.border} hover:${currentTheme.borderHover} transition-all duration-300 flex items-center gap-2 px-3 py-1.5 text-sm font-medium`}
                        >
                          <span className="text-sm"><tech.icon /></span>
                          {tech.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                  }}
                  className={`relative w-40 h-40 rounded-2xl flex items-center justify-center border-2 ${currentTheme.border} bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm shadow-xl`}
                >
                  <div className={`absolute inset-0 rounded-2xl border-2 ${currentTheme.border}/30 scale-110 animate-pulse`} />
                  <div className={`absolute inset-0 rounded-2xl border ${currentTheme.border}/20 scale-125`} />
                  
                  <motion.img
                  src={GGIcon.src}
                  alt="G-Global Logistics"
                  className="w-20 h-20 object-contain z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: "relative", left: "-5px" }}
                  />
                  
                  {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 ${currentTheme.particle} rounded-full opacity-60`}
                    animate={{
                    y: [0, -20, 0],
                    x: [0, Math.random() * 10 - 5, 0],
                    opacity: [0.6, 0.2, 0.6]
                    }}
                    transition={{
                    duration: 2 + i * 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.7
                    }}
                    style={{
                    top: `${20 + i * 20}%`,
                    right: `${10 + i * 15}%`
                    }}
                  />
                  ))}
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
