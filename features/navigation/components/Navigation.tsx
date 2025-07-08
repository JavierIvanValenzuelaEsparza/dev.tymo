"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { ThemeContext } from "@/shared/context"
import { ColorPicker } from "@/features/theme"

interface NavigationProps {
  currentSection: string
}

export const Navigation = ({ currentSection }: NavigationProps) => {
  const { currentTheme } = useContext(ThemeContext)

  const navItems = ["Inicio", "Sobre mí", "Habilidades", "Experiencia", "Educación", "Contacto"]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b ${currentTheme.border}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`text-2xl font-bold bg-gradient-to-r ${currentTheme.text.replace(
            "text-",
            "from-",
          )} to-${currentTheme.secondary}-500 bg-clip-text text-transparent`}
        >
          Javier Esparza
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              whileHover={{ scale: 1.1 }}
              className={`hover:${currentTheme.text} transition-colors cursor-pointer relative ${
                currentSection === item.toLowerCase().replace(" ", "-") ? currentTheme.text : ""
              }`}
            >
              {item}
              {currentSection === item.toLowerCase().replace(" ", "-") && (
                <motion.div
                  layoutId="activeSection"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 ${currentTheme.particle}`}
                />
              )}
            </motion.a>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <ColorPicker />
          <Button
            className={`bg-gradient-to-r ${currentTheme.button} ${currentTheme.buttonHover} border ${currentTheme.border}`}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contactar
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}
