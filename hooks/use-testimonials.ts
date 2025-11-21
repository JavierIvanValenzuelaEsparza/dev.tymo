import { useState, useEffect } from 'react'
import { Testimonial } from '@/shared/types'
import { testimonialsService } from '@/shared/services'
import { toast } from '@/hooks/use-toast'

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchTestimonials = async () => {
    try {
      setIsLoading(true)
      const data = await testimonialsService.getTestimonials()
      setTestimonials(data)
    } catch (error) {
      console.error('Failed to fetch testimonials:', error)
      toast({
        title: 'Error',
        description: 'No se pudieron cargar las opiniones. Intenta nuevamente.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  return {
    testimonials,
    isLoading,
    refreshTestimonials: fetchTestimonials,
  }
}
