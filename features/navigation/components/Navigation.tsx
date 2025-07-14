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


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b ${currentTheme.border}`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={`text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r ${currentTheme.text.replace(
            "text-",
            "from-",
          )} to-${currentTheme.secondary}-500 bg-clip-text text-transparent truncate max-w-[150px] sm:max-w-none`}
        >
          Javier Esparza
        </motion.div>

        <div className="flex items-center gap-3">
          <ColorPicker />
          <Button
            onClick={() => {
              const contactSection = document.getElementById('contact-section')
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
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
