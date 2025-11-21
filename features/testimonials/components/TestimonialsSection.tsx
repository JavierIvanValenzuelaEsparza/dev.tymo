"use client"

import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '@/shared/context'
import { useTestimonials } from '@/hooks/use-testimonials'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { Sparkles, ArrowRight, Star } from 'lucide-react'
import { Testimonial } from '@/shared/types'

interface PositionedTestimonial extends Testimonial {
  delay: number
  position: { x: number; y: number }
  duration: number
}

export function TestimonialsSection() {
  const { testimonials, isLoading } = useTestimonials()
  const { currentTheme } = useContext(ThemeContext)
  const [positionedTestimonials, setPositionedTestimonials] = useState<PositionedTestimonial[]>([])

  useEffect(() => {
    if (testimonials.length > 0) {
      const positioned = testimonials.map((testimonial) => ({
        ...testimonial,
        delay: Math.random() * 5,
        duration: 15 + Math.random() * 10,
        position: {
          x: Math.random() * 60 + 20,
          y: Math.random() * 50 + 25,
        },
      }))
      setPositionedTestimonials(positioned)
    }
  }, [testimonials])
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }
  return (
    <section className="py-20 relative">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-6">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} border ${currentTheme.border} text-sm font-medium backdrop-blur-xl`}
          >
            <Sparkles className="h-4 w-4" />
            Testimonios
          </div>

          <h2 className={`text-5xl md:text-7xl font-bold tracking-tight leading-tight ${currentTheme.text}`}>
            Opiniones Acerca
            <br />
            <span
              className={`text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-bold bg-gradient-to-r ${currentTheme.text.replace(
                "text-",
                "from-",
              )} to-${currentTheme.secondary}-400 bg-clip-text text-transparent`}
            >
              De Mi Servicio
            </span>
          </h2>

          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Experiencias reales de personas que han confiado en mi trabajo
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center h-[600px]">
            <div className="space-y-4 text-center">
              <Skeleton className="h-12 w-12 rounded-full mx-auto" />
              <Skeleton className="h-4 w-32 mx-auto" />
            </div>
          </div>
        )}

        {!isLoading && positionedTestimonials.length > 0 && (
          <div className="relative h-[500px] mb-6 flex flex-col items-center justify-between">
            <div className="relative w-full flex-1 overflow-hidden">
              {positionedTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="absolute animate-float pointer-events-auto z-10"
                  style={{
                    left: `${testimonial.position.x}%`,
                    top: `${testimonial.position.y}%`,
                    animationDelay: `${testimonial.delay}s`,
                    animationDuration: `${testimonial.duration}s`,
                  }}
                >
                  <div className="group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full blur-2xl scale-150 opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                    <div
                      className={`relative bg-gray-900/50 backdrop-blur-xl border ${currentTheme.border} rounded-3xl p-6 max-w-sm hover:bg-gray-900/70 hover:scale-105 hover:${currentTheme.borderHover} transition-all duration-500 cursor-pointer shadow-lg`}
                    >
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <Star
                            key={`star-${testimonial.id}-${i + 1}`}
                            className={`w-4 h-4 fill-${currentTheme.primary}-400 text-${currentTheme.primary}-400`}
                          />
                        ))}
                      </div>

                      <p className="text-white text-sm leading-relaxed tracking-wide italic min-h-[90px] mb-4">
                        "{testimonial.opinion}"
                      </p>

                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} flex items-center justify-center ${currentTheme.text} font-semibold text-sm border ${currentTheme.border}`}
                        >
                          {getInitials(testimonial.fullName)}
                        </div>
                        <div>
                          <p className={`${currentTheme.text} font-medium text-sm`}>{testimonial.fullName}</p>
                          <p className="text-muted-foreground text-xs">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative z-20 flex justify-center w-full pt-4 translate-y-5">
              <Button
                size="lg"
                className={`group gap-2 rounded-full px-8 py-4 text-lg font-medium shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-r ${currentTheme.button} ${currentTheme.buttonHover} border ${currentTheme.border} ${currentTheme.shadow}`}
                onClick={() => window.open("https://client-insights.vercel.app", "_blank")}
              >
                Comparte tu experiencia
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
