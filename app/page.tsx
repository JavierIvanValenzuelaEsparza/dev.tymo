"use client"

import { Suspense, lazy } from "react"
import { ThemeProvider } from "@/shared/context"
import { LazyLoadWrapper } from "@/shared/components"
import { Navigation } from "@/features/navigation"
import { HeroSection } from "@/features/portfolio"
import { usePreloadComponents } from "@/hooks/use-preload-components"

const AboutSection = lazy(() => import("@/features/portfolio/components/AboutSection").then(module => ({ default: module.AboutSection })))
const SkillsSection = lazy(() => import("@/features/portfolio/components/SkillsSection").then(module => ({ default: module.SkillsSection })))
const CurrentWorkSection = lazy(() => import("@/features/portfolio/components/CurrentWorkSection").then(module => ({ default: module.CurrentWorkSection })))
const ExperienceSection = lazy(() => import("@/features/portfolio/components/ExperienceSection").then(module => ({ default: module.ExperienceSection })))
const EducationSection = lazy(() => import("@/features/portfolio/components/EducationSection").then(module => ({ default: module.EducationSection })))
const WorkStation = lazy(() => import("@/features/portfolio/components/WorkStation").then(module => ({ default: module.WorkStation })))
const ContactSection = lazy(() => import("@/features/portfolio/components/ContactSection").then(module => ({ default: module.ContactSection })))
const Footer = lazy(() => import("@/features/portfolio/components/Footer").then(module => ({ default: module.Footer })))

const AnimatedBackground = lazy(() => import("@/shared/components/AnimatedBackground").then(module => ({ default: module.AnimatedBackground })))

export default function Portfolio() {
  const currentSection = "inicio"
  usePreloadComponents()

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <AnimatedBackground mousePosition={{ x: 0, y: 0 }} />
        </Suspense>
        <Navigation currentSection={currentSection} />        
        <HeroSection />        
        <LazyLoadWrapper>
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20" />}>
            <AboutSection />
          </Suspense>
        </LazyLoadWrapper>

        <LazyLoadWrapper>
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20" />}>
            <WorkStation />
          </Suspense>
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20" />}>
            <SkillsSection />
          </Suspense>
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20" />}>
            <CurrentWorkSection />
          </Suspense>
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20" />}>
            <ExperienceSection />
          </Suspense>
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20" />}>
            <EducationSection />
          </Suspense>
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20" />}>
            <ContactSection />
          </Suspense>
        </LazyLoadWrapper>
        
        <LazyLoadWrapper>
          <Suspense fallback={<div className="h-20 animate-pulse bg-gray-800/20" />}>
            <Footer />
          </Suspense>
        </LazyLoadWrapper>
      </div>
    </ThemeProvider>
  )
}