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
        className="border-gray-600 text-gray-400 hover:bg-gray-800 bg-gray-900/50"
      >
        <Settings className="w-4 h-4" />
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
              className="absolute right-0 top-12 bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-2xl z-50 w-80"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Personalizar Colores
                </h3>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {Object.entries(colorThemes).map(([key, theme]: [string, ColorTheme]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setTheme(key as ThemeName)
                      setIsOpen(false)
                    }}
                    className={`w-full p-3 rounded-lg border transition-all flex items-center gap-3 ${themeName === key
                        ? `${theme.border} ${theme.bg} ${theme.text}`
                        : "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800/50"
                      }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${theme.button.replace(
                        "from-",
                        "from-",
                      )} ${theme.button.replace("to-", "to-")}`}
                    />
                    <span className="font-medium">{theme.name}</span>
                    {themeName === key && <div className="ml-auto w-2 h-2 bg-current rounded-full" />}
                  </motion.button>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-400 text-center">
                  Los cambios se aplican inmediatamente y se guardan automáticamente
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
