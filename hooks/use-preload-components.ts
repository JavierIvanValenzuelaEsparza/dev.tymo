import { useEffect } from "react"

// Preload components that are likely to be needed soon
export function usePreloadComponents() {
  useEffect(() => {
    // Preload About and Skills sections after a delay since they're usually the next viewed
    const preloadTimer = setTimeout(() => {
      Promise.all([
        import("@/features/portfolio").then(module => module.AboutSection),
        import("@/features/portfolio").then(module => module.SkillsSection),
      ]).catch(console.error)
    }, 2000) // Wait 2 seconds after initial load

    return () => clearTimeout(preloadTimer)
  }, [])
}
