"use client"

import { motion } from "framer-motion"
import { useContext, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import { ThemeContext } from "@/shared/context"
import emailjs from "@emailjs/browser"
import { useToast } from "@/components/ui/use-toast"

export function ContactSection() {
  const { currentTheme } = useContext(ThemeContext)
  const { toast } = useToast()
  const form = useRef<HTMLFormElement>(null)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const sendMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!form.current) {
      setError(true)
      setLoading(false)
      return
    }

    emailjs
      .sendForm(
        "service_g8uodxc",
        "template_8y9l25r",
        form.current,
        "-jIA3b-zuG9ll_tMH"
      )
      .then(
        () => {
          setEnviado(true)
          setError(false)
          setLoading(false)
          toast({
            title: "Mensaje enviado",
            description: "✅ Mensaje enviado correctamente",
            variant: "default",
            duration: 4000,
          })
        },
        (err) => {
          console.error(err)
          setError(true)
          setEnviado(false)
          setLoading(false)
          toast({
            title: "Error",
            description: "❌ Ocurrió un error al enviar el mensaje",
            variant: "destructive",
            duration: 4000,
          })
        }
      )
  }

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
                  ].map((contact) => (
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
                <form ref={form} onSubmit={sendMail} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white`}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white`}
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white resize-none`}
                      placeholder="Tu mensaje..."
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className={`w-full bg-gradient-to-r ${currentTheme.button} ${currentTheme.buttonHover} text-base sm:text-lg py-2.5 sm:py-3 border ${currentTheme.border}`}
                    disabled={loading}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {loading ? "Enviando..." : "Enviar mensaje"}
                  </Button>

                  {enviado && <p className="text-green-400 text-sm pt-2">✅ Mensaje enviado correctamente</p>}
                  {error && <p className="text-red-500 text-sm pt-2">❌ Ocurrió un error al enviar el mensaje</p>}
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
