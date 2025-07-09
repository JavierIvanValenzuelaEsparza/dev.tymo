import { StaticImageData } from 'next/image'

export interface ColorTheme {
  name: string
  primary: string
  secondary: string
  accent: string
  gradientFrom: string
  gradientTo: string
  border: string
  borderHover: string
  bg: string
  text: string
  textGradient: string
  button: string
  buttonHover: string
  shadow: string
  ring: string
  particle: string
}

export type ThemeName = 'emerald' | 'blue' | 'purple' | 'red' | 'orange' | 'cyan'

export interface ThemeContextType {
  currentTheme: ColorTheme
  setTheme: (theme: ThemeName) => void
  themeName: ThemeName
}

export interface Skill {
  name: string
  percentage: number
  icon: React.ElementType
}

export interface Experience {
  company: string
  position: string
  period: string
  description: string
  tags: string[]
  current: boolean
  logo?: StaticImageData
}

export interface SocialLink {
  icon: any
  href: string
  label: string
}
