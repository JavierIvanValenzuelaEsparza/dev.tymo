"use client"

import { useState, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Settings, Palette, X } from "lucide-react"
import { ThemeContext } from "@/shared/context"
import { colorThemes } from "@/shared/constants"
import { ColorTheme, ThemeName } from "@/shared/types/theme"

export const ColorPicker = () => {
  const { setTheme, themeName } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="sm"
        className="border-gray-600 text-gray-400 hover:bg-gray-800 bg-gray-900/50 p-1.5 sm:p-2"
        aria-label="Abrir selector de colores"
      >
        <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              className="absolute right-0 sm:right-0 top-12 bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 shadow-2xl z-50 w-[280px] sm:w-80 max-w-[calc(100vw-2rem)] 
                         sm:max-w-none transform sm:transform-none -translate-x-1/2 sm:translate-x-0 left-1/2 sm:left-auto"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Personalizar Colores</span>
                  <span className="sm:hidden">Colores</span>
                </h3>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-1"
                  aria-label="Cerrar selector de colores"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>

              <div className="space-y-2 sm:space-y-3 max-h-[60vh] sm:max-h-none overflow-y-auto">
                {Object.entries(colorThemes).map(([key, theme]: [string, ColorTheme]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setTheme(key as ThemeName)
                      setIsOpen(false)
                    }}
                    className={`w-full p-2 sm:p-3 rounded-lg border transition-all flex items-center gap-2 sm:gap-3 ${themeName === key
                        ? `${theme.border} ${theme.bg} ${theme.text}`
                        : "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800/50"
                      }`}
                  >
                    <div
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r ${theme.button.replace(
                        "from-",
                        "from-",
                      )} ${theme.button.replace("to-", "to-")}`}
                    />
                    <span className="font-medium text-sm sm:text-base truncate flex-1 text-left">{theme.name}</span>
                    {themeName === key && <div className="ml-auto w-1.5 h-1.5 sm:w-2 sm:h-2 bg-current rounded-full flex-shrink-0" />}
                  </motion.button>
                ))}
              </div>

              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  <span className="hidden sm:inline">Los cambios se aplican inmediatamente y se guardan automáticamente</span>
                  <span className="sm:hidden">Cambios automáticos</span>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
