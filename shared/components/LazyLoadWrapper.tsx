import { Suspense, ReactNode } from "react"
import { useLazyLoad } from "@/hooks/use-lazy-load"
import { SectionSkeleton } from "./SectionSkeleton"
import { ErrorBoundary } from "./ErrorBoundary"

interface LazyLoadWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
  rootMargin?: string
}

export function LazyLoadWrapper({ 
  children, 
  fallback = <SectionSkeleton />,
  threshold = 0.1,
  rootMargin = "200px"
}: LazyLoadWrapperProps) {
  const { elementRef, isVisible } = useLazyLoad({ threshold, rootMargin })

  return (
    <div ref={elementRef}>
      {isVisible ? (
        <ErrorBoundary>
          <Suspense fallback={fallback}>
            {children}
          </Suspense>
        </ErrorBoundary>
      ) : (
        fallback
      )}
    </div>
  )
}
