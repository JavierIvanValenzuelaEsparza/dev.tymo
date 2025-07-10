"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"
import { ThemeContext } from "@/shared/context"
import { ContactForm } from "./ContactForm"
import { ContactInfo } from "./ContactInfo"

export function ContactSection() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <Badge
            className={`bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border ${currentTheme.border} ${currentTheme.text} mb-4 sm:mb-6`}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contacto
          </Badge>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r ${currentTheme.text.replace(
              "text-",
              "from-"
            )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
          >
            ¡Hablemos!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Estoy interesado en oportunidades de trabajo como desarrollador web. Si tienes alguna pregunta o quieres
            hablar sobre un proyecto, no dudes en contactarme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`bg-gray-900/50 backdrop-blur-lg border ${currentTheme.border} rounded-3xl p-8 md:p-12 ${currentTheme.borderHover} transition-all duration-300 hover:shadow-2xl hover:${currentTheme.shadow}`}
        >
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <ContactInfo />
              <ContactForm className="mt-8 lg:mt-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
