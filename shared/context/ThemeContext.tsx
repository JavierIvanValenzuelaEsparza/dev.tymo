"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ThemeContextType, ThemeName, ColorTheme } from '../types'
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

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as ThemeName
    if (savedTheme && colorThemes[savedTheme]) {
      setThemeName(savedTheme)
    }
  }, [])

  // Save theme to localStorage
  const setTheme = (theme: ThemeName) => {
    setThemeName(theme)
    localStorage.setItem("portfolio-theme", theme)
  }

  const currentTheme = colorThemes[themeName]

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themeName }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
