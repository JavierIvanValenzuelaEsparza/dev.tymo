"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Download, MessageCircle, Code } from "lucide-react"
import { SiGit } from "react-icons/si"
import Image from "next/image"
import { useContext } from "react"
import { ThemeContext } from "@/shared/context"
import { socialLinks, gitPlatforms } from "@/shared/constants"
import { useCVDownload } from "@/hooks/use-cv-download"

export const HeroSection = () => {
  const { currentTheme } = useContext(ThemeContext)
  const { downloadLightCV } = useCVDownload()

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
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2"
          >
            <motion.div
              className="inline-block mb-8 rounded-full"
              animate={{
                boxShadow: [
                  `0 0 20px rgba(${rgbaColor}, 0.3)`,
                  `0 0 40px rgba(${rgbaColor}, 0.6)`,
                  `0 0 20px rgba(${rgbaColor}, 0.3)`,
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Badge
                className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border ${currentTheme.border} ${currentTheme.text} px-6 py-2 text-lg`}
              >
                <Code className="w-4 h-4 mr-2" />
                Desarrollador Web
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            >
              Hola, soy{" "}
              <span
                className={`bg-gradient-to-r ${currentTheme.text.replace(
                  "text-",
                  "from-",
                )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
              >
                Javier Ivan
              </span>
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
                className="inline-block ml-2"
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed"
            >
              Especialista en <span className={`${currentTheme.text} font-semibold`}>Sistemas WMS</span> y{" "}
              <span className={`${currentTheme.text} font-semibold`}>Sistemas ERP</span> con experiencia en
              React & Node.js | Angular & .Net
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button
                size="lg"
                className={`bg-gradient-to-r ${currentTheme.button} ${currentTheme.buttonHover} text-lg px-8 py-4 group border ${currentTheme.border} shadow-lg ${currentTheme.shadow}`}
                onClick={downloadLightCV}
              >
                Descargar CV
                <motion.div
                  className="ml-2"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Download className="w-4 h-4" />
                </motion.div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`border-${currentTheme.primary}-400 ${currentTheme.text} hover:bg-${currentTheme.primary}-400 hover:text-white text-lg px-8 py-4 ${currentTheme.bg}`}
                onClick={() => {
                  const contactSection = document.getElementById('contact-section')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex space-x-4"
            >

              <Popover>
                <PopoverTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full flex items-center justify-center border ${currentTheme.border} ${currentTheme.borderHover} transition-colors`}
                  >
                    <SiGit className={`w-5 h-5 ${currentTheme.text}`} />
                  </motion.button>
                </PopoverTrigger>
                <PopoverContent className={`w-48 p-2 ${currentTheme.bg} border ${currentTheme.border}`}>
                  <div className="space-y-2">
                    {gitPlatforms.map((platform, index) => (
                      <motion.a
                        key={platform.label}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-3 p-2 rounded-md ${currentTheme.bg} ${currentTheme.borderHover} transition-colors group`}
                      >
                        <platform.icon className={`w-5 h-5 ${currentTheme.text}`} />
                        <span className={`text-sm ${currentTheme.text} group-hover:${currentTheme.text.replace('text-', 'text-').replace('-400', '-300')}`}>
                          {platform.label}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full flex items-center justify-center border ${currentTheme.border} ${currentTheme.borderHover} transition-colors`}
                >
                  <social.icon className={`w-5 h-5 ${currentTheme.text}`} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className={`absolute inset-0 rounded-full bg-gradient-to-r ${currentTheme.text.replace(
                  "text-",
                  "from-",
                )} to-${currentTheme.secondary}-500 blur-2xl opacity-30`}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`relative w-80 h-80 rounded-full border-4 border-${currentTheme.primary}-400/50 overflow-hidden shadow-2xl ${currentTheme.shadow}`}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/timito.jpg-j4tXvqn3If4apX4re6i5iA1tTgDwkC.jpeg"
                  alt="Javier Ivan Valenzuela Esparza"
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-${currentTheme.primary}-900/20 to-transparent`}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className={`w-6 h-10 border-2 border-${currentTheme.primary}-400 rounded-full flex justify-center`}>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className={`w-1 h-3 bg-${currentTheme.primary}-400 rounded-full mt-2`}
          />
        </div>
      </motion.div>
    </section>
  )
}
