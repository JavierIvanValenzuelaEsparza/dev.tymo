"use client"

import { useState, useContext, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Settings, Palette, X, Check, Sparkles } from "lucide-react"
import { ThemeContext } from "@/shared/context"
import { colorThemes } from "@/shared/constants"
import { ColorTheme, ThemeName } from "@/shared/types/theme"

export const ColorPicker = () => {
  const { setTheme, themeName, currentTheme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Ajustar el estado isMobile para asegurar que se actualice correctamente
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Escuchar el evento resize y actualizar el estado
    window.addEventListener("resize", checkMobile);

    // Llamar a la función inicialmente para establecer el estado
    checkMobile();

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleThemeChange = (key: ThemeName) => {
    setTheme(key)
    setTimeout(() => setIsOpen(false), 300)
  }

  return (
    <div className="relative">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="outline"
          size="sm"
          className={`relative overflow-hidden border-2 transition-all duration-300 ${isOpen
              ? `${currentTheme.border} bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} text-white shadow-lg shadow-${currentTheme.primary}/25`
              : "border-gray-700 bg-gray-900/80 text-gray-400"
            } backdrop-blur-sm p-2 sm:p-2.5`}
          aria-label="Abrir selector de colores"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
          {isOpen && (
            <motion.div
              layoutId="button-glow"
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            />
          )}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={
                isMobile
                  ? { opacity: 0, y: "100%" }
                  : { opacity: 0, scale: 0.9, y: 10 }
              }
              animate={
                isMobile
                  ? { opacity: 1, y: 0 }
                  : { opacity: 1, scale: 1, y: 0 }
              }
              exit={
                isMobile
                  ? { opacity: 0, y: "100%" }
                  : { opacity: 0, scale: 0.9, y: 10 }
              }
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`
                fixed z-50
                bg-gradient-to-b from-gray-900 via-gray-900 to-black
                border border-gray-700/50
                shadow-2xl
                ${isMobile
                  ? "bottom-0 left-0 right-0 rounded-t-3xl max-h-[90vh]"
                  : "top-16 right-4 sm:right-6 rounded-2xl w-[340px] md:w-[380px]"
                }
              `}
              style={{
                boxShadow: `0 0 50px rgba(0, 0, 0, 0.5), 0 0 100px ${currentTheme.primary}20`,
              }}
            >
              {isMobile && (
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-12 h-1.5 bg-gray-600 rounded-full" />
                </div>
              )}

              {/* Contenido del modal */}
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo}`}
                  >
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      Theme Picker
                      <Sparkles className="w-4 h-4 text-yellow-400" />
                    </h3>
                    <p className="text-xs text-gray-400">Choose your color theme</p>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full p-2 transition-colors"
                  aria-label="Cerrar selector de colores"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Opciones de tema */}
              <div
                className="px-4 sm:px-5 py-4 space-y-2 overflow-y-auto custom-scrollbar"
                style={{
                  maxHeight: isMobile ? "calc(90vh - 180px)" : "500px",
                }}
              >
                {Object.entries(colorThemes).map(([key, theme]: [string, ColorTheme], index) => {
                  const isSelected = themeName === key;
                  return (
                    <motion.button
                      key={key}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleThemeChange(key as ThemeName)}
                      className={`
                        group relative w-full p-4 rounded-xl border-2 transition-all duration-300
                        flex items-center gap-4 overflow-hidden
                        ${isSelected
                          ? `border-${theme.primary} bg-gradient-to-r ${theme.gradientFrom}/10 ${theme.gradientTo}/10 shadow-lg shadow-${theme.primary}/20`
                          : "border-gray-700/50 hover:border-gray-600 bg-gray-800/30 hover:bg-gray-800/50"
                        }
                      `}
                    >
                      <div className="relative flex-shrink-0">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradientFrom} ${theme.gradientTo} shadow-lg`}
                          style={{
                            boxShadow: isSelected
                              ? `0 0 20px ${theme.primary}40`
                              : "none",
                          }}
                        />
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                              <Check className={`w-4 h-4 text-${theme.primary}`} />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div className="flex-1 text-left">
                        <div className="font-semibold text-white text-base mb-0.5 flex items-center gap-2">
                          {theme.name}
                          {isSelected && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${theme.gradientFrom} ${theme.gradientTo} text-white`}
                            >
                              Active
                            </motion.span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400">
                          {key.charAt(0).toUpperCase() + key.slice(1)} color scheme
                        </p>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              <div className="px-5 sm:px-6 py-4 border-t border-gray-700/50 bg-gray-900/50">
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Auto-saved instantly</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
