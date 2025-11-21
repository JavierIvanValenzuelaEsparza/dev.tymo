import { Testimonial, TestimonialFormData } from '../types/testimonial'

const API_BASE_URL = 'https://client-insights-ms.onrender.com'

export const testimonialsService = {
  async getTestimonials(): Promise<Testimonial[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonials`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error(`Error fetching testimonials: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Failed to fetch testimonials:', error)
      throw error
    }
  },

  async createTestimonial(data: TestimonialFormData): Promise<Testimonial> {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonials`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`Error creating testimonial: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Failed to create testimonial:', error)
      throw error
    }
  },
}
