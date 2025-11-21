'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/shared/context'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'
import { Testimonial } from '@/shared/types'

interface TestimonialCardProps {
  readonly testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { currentTheme } = useContext(ThemeContext)
  const { fullName, company, projectType, rating, opinion, createdAt } = testimonial

  const initials = fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="group relative h-full">
      <div className={`relative h-full p-8 rounded-3xl bg-gray-900/50 backdrop-blur-xl border ${currentTheme.border} shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:${currentTheme.borderHover} overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />        
        <div className="relative space-y-6">
          <div className="absolute -top-2 -left-2 opacity-10">
            <Quote className={`h-16 w-16 ${currentTheme.text}`} />
          </div>

          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
              key={`star-${testimonial.id}-${i}`}
              className={`h-5 w-5 transition-all duration-300 ${
                i < rating
                ? `fill-${currentTheme.primary}-400 text-${currentTheme.primary}-400`
                : 'fill-muted/20 text-muted/20'
              }`}
              />
            ))}
          </div>

          <p className="text-white text-lg leading-relaxed font-semibold tracking-wide italic min-h-[90px]">
            "{opinion}"
          </p>

          <div className={`flex items-center gap-4 pt-4 border-t ${currentTheme.border}`}>
            <Avatar className={`h-14 w-14 ring-2 ring-${currentTheme.primary}-500/20 ring-offset-2 ring-offset-background transition-all duration-300 group-hover:ring-${currentTheme.primary}-500/40`}>
              <AvatarFallback className={`bg-gradient-to-br ${currentTheme.gradientFrom} ${currentTheme.gradientTo} ${currentTheme.text} font-bold text-3xl`}>
                {initials}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h3 className={`font-semibold ${currentTheme.text} text-lg leading-tight`}>
                {fullName}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {company}
              </p>
              <p className="text-xs text-muted-foreground/60 mt-0.5">
                {projectType} • {formatDate(createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
