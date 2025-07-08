"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { ThemeContext } from "@/shared/context"

export function Footer() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <footer className={`py-12 border-t ${currentTheme.border} bg-gray-900/50`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3
              className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.text.replace(
                "text-",
                "from-",
              )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent mb-2`}
            >
              Javier Ivan Valenzuela Esparza
            </h3>
            <p className="text-gray-400">Desarrollador Web Especializado</p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/JavierIvanValenzuelaEsparza", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/javier-esparza-a66a78281/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:javiervalenzuela041219@gmail.com", label: "Email" },
            ].map((social) => (
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
          </div>
        </div>
        <div className={`mt-8 pt-8 border-t ${currentTheme.border} text-center`}>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Javier Ivan Valenzuela Esparza. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
