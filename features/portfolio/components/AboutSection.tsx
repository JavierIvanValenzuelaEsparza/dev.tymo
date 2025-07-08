"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Phone, Mail, Download, Sun, Moon } from "lucide-react"
import { ThemeContext } from "@/shared/context"

export function AboutSection() {
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
            <User className="w-4 h-4 mr-2" />
            Sobre mí
          </Badge>
          <h2
            className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${currentTheme.text.replace(
              "text-",
              "from-",
            )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
          >
            Conoce mi Historia
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`bg-gray-900/50 backdrop-blur-lg border ${currentTheme.border} rounded-3xl p-8 md:p-12`}
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${currentTheme.text}`}>Mi Pasión por el Desarrollo</h3>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                Desarrollador web con experiencia en Sistemas WMS y Sistemas ERP. Me especializo en crear
                soluciones eficientes y escalables utilizando tecnologías modernas. Mi enfoque se centra en la
                calidad del código y la optimización de procesos para garantizar el mejor rendimiento.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 p-4 ${currentTheme.bg} rounded-lg border ${currentTheme.border}`}
                >
                  <Phone className={`${currentTheme.text} flex-shrink-0`} />
                  <div>
                    <p className="text-sm text-gray-400">Teléfono</p>
                    <a href="tel:6646141705" className={`hover:${currentTheme.text} transition-colors font-medium`}>
                      664-614-1705
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 p-4 ${currentTheme.bg} rounded-lg border ${currentTheme.border}`}
                >
                  <Mail className={`${currentTheme.text} flex-shrink-0`} />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:javiervalenzuela041219@gmail.com"
                      className={`hover:${currentTheme.text} transition-colors font-medium text-sm`}
                    >
                      javiervalenzuela041219@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${currentTheme.text}`}>Descarga mi CV</h3>
              <Tabs defaultValue="dark" className="w-full">
                <TabsList className={`grid w-full grid-cols-2 mb-6 bg-gray-800/50 border ${currentTheme.border}`}>
                  <TabsTrigger
                    value="light"
                    className={`flex items-center gap-2 text-gray-300 data-[state=active]:${currentTheme.bg} data-[state=active]:${currentTheme.text}`}
                  >
                    <Sun className="h-4 w-4" /> Claro
                  </TabsTrigger>
                  <TabsTrigger
                    value="dark"
                    className={`flex items-center gap-2 text-gray-300 data-[state=active]:${currentTheme.bg} data-[state=active]:${currentTheme.text}`}
                  >
                    <Moon className="h-4 w-4" /> Oscuro
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="light" className="mt-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gray-800/30 border ${currentTheme.border} rounded-lg p-6 flex flex-col items-center`}
                  >
                    <div
                      className={`w-full h-40 bg-gray-700/50 rounded-md mb-4 flex items-center justify-center border ${currentTheme.border}`}
                    >
                      <div className="text-center">
                        <Download className={`w-8 h-8 ${currentTheme.text} mx-auto mb-2`} />
                        <p className="text-sm text-gray-400">Vista previa del CV</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className={`w-full border-${currentTheme.primary}-400 ${currentTheme.text} hover:bg-${currentTheme.primary}-400 hover:text-black ${currentTheme.bg}`}
                      asChild
                    >
                      <a href="/assets/cv-light.pdf" download>
                        <Download className="mr-2 h-4 w-4" /> Descargar CV Claro
                      </a>
                    </Button>
                  </motion.div>
                </TabsContent>
                <TabsContent value="dark" className="mt-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gray-800/30 border ${currentTheme.border} rounded-lg p-6 flex flex-col items-center`}
                  >
                    <div
                      className={`w-full h-40 bg-gray-700/50 rounded-md mb-4 flex items-center justify-center border ${currentTheme.border}`}
                    >
                      <div className="text-center">
                        <Download className={`w-8 h-8 ${currentTheme.text} mx-auto mb-2`} />
                        <p className="text-sm text-gray-400">Vista previa del CV</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className={`w-full border-${currentTheme.primary}-400 ${currentTheme.text} hover:bg-${currentTheme.primary}-400 hover:text-black ${currentTheme.bg}`}
                      asChild
                    >
                      <a href="/assets/cv-dark.pdf" download>
                        <Download className="mr-2 h-4 w-4" /> Descargar CV Oscuro
                      </a>
                    </Button>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
