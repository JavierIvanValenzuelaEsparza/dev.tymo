"use client"

import { useState, useEffect, Suspense, lazy } from "react"
import { useScroll, useTransform } from "framer-motion"
import { ThemeProvider } from "@/shared/context"
import { AnimatedBackground, LazyLoadWrapper } from "@/shared/components"
import { Navigation } from "@/features/navigation"
import { HeroSection } from "@/features/portfolio"
import { usePreloadComponents } from "@/hooks/use-preload-components"

const AboutSection = lazy(() => import("@/features/portfolio").then(module => ({ default: module.AboutSection })))
const SkillsSection = lazy(() => import("@/features/portfolio").then(module => ({ default: module.SkillsSection })))
const CurrentWorkSection = lazy(() => import("@/features/portfolio").then(module => ({ default: module.CurrentWorkSection })))
const ExperienceSection = lazy(() => import("@/features/portfolio").then(module => ({ default: module.ExperienceSection })))
const EducationSection = lazy(() => import("@/features/portfolio").then(module => ({ default: module.EducationSection })))
const ContactSection = lazy(() => import("@/features/portfolio").then(module => ({ default: module.ContactSection })))
const Footer = lazy(() => import("@/features/portfolio").then(module => ({ default: module.Footer })))

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSection, setCurrentSection] = useState("inicio")
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  // Preload components for better UX
  usePreloadComponents()

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY })
  //   }
  // }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <AnimatedBackground mousePosition={mousePosition} />
        <Navigation currentSection={currentSection} />        
        <HeroSection />        
        <LazyLoadWrapper>
          <AboutSection />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <SkillsSection />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <CurrentWorkSection />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <ExperienceSection />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <EducationSection />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <ContactSection />
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <Footer />
        </LazyLoadWrapper>
      </div>
    </ThemeProvider>
  )
}