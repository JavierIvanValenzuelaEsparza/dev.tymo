"use client"

import { motion } from "framer-motion"
import { useContext, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { ThemeContext } from "@/shared/context"

export function ContactSection() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 relative">
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
              "from-",
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
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${currentTheme.text}`}>Información de Contacto</h3>
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: "Teléfono",
                      value: "664-614-1705",
                      href: "tel:6646141705",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "javiervalenzuela041219@gmail.com",
                      href: "mailto:javiervalenzuela041219@gmail.com",
                    },
                    {
                      icon: MapPin,
                      label: "Ubicación",
                      value: "Tijuana, México",
                      href: "#",
                    },
                  ].map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 ${currentTheme.bg} rounded-lg border ${currentTheme.border}`}
                    >
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full flex items-center justify-center border ${currentTheme.border} flex-shrink-0`}
                      >
                        <contact.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${currentTheme.text}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs sm:text-sm text-gray-400">{contact.label}</p>
                        <a
                          href={contact.href}
                          className={`font-medium hover:${currentTheme.text} transition-colors text-white text-sm sm:text-base break-all`}
                        >
                          {contact.value}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${currentTheme.text}`}>Envíame un mensaje</h3>
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white focus:outline-none focus:ring-2 ${currentTheme.ring} focus:border-${currentTheme.primary}-500 transition-colors text-sm sm:text-base`}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white focus:outline-none focus:ring-2 ${currentTheme.ring} focus:border-${currentTheme.primary}-500 transition-colors text-sm sm:text-base`}
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white focus:outline-none focus:ring-2 ${currentTheme.ring} focus:border-${currentTheme.primary}-500 transition-colors resize-none text-sm sm:text-base`}
                      placeholder="Tu mensaje..."
                    ></textarea>
                  </div>
                  <Button
                    className={`w-full bg-gradient-to-r ${currentTheme.button} ${currentTheme.buttonHover} text-base sm:text-lg py-2.5 sm:py-3 border ${currentTheme.border}`}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
