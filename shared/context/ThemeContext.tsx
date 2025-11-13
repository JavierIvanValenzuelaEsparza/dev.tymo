"use client"

import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from 'react'
import { ThemeContextType, ThemeName } from '../types'
import { colorThemes } from '../constants'

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: colorThemes.blue,
  setTheme: () => {},
  themeName: "blue",
})

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<ThemeName>("blue")

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeName
    if (savedTheme && colorThemes[savedTheme]) {
      setThemeName(savedTheme)
    }
  }, [])

  const setTheme = useCallback((theme: ThemeName) => {
    setThemeName(theme)
    localStorage.setItem("portfolio-theme", theme)
  }, [])

  const currentTheme = colorThemes[themeName]

  const value = useMemo(() => ({ currentTheme, setTheme, themeName }), [currentTheme, setTheme, themeName])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
