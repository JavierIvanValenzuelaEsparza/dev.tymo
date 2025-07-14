import { ContactFormData, ContactFormResponse } from '@/shared/types/contact'

const EMAIL_SERVICE_URL = process.env.NEXT_PUBLIC_EMAIL_SERVICE_URL

/**
 * Email service API client
 */
export class ContactService {
  private static readonly baseURL = EMAIL_SERVICE_URL || 'localhost:3000/send/mail'
  private static readonly timeout = 5000

  /**
   * Send contact form email
   */
  static async sendEmail(data: ContactFormData): Promise<ContactFormResponse> {
    if (!this.validateEmailData(data)) {
      throw new Error('Invalid contact form data')
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        let errorMessage = 'Unknown error'
        try {
          const errorData = await response.json()
          if (errorData.message) {
            if (Array.isArray(errorData.message)) {
              errorMessage = errorData.message.join(', ')
            } else {
              errorMessage = errorData.message
            }
          } else if (errorData.error) {
            errorMessage = errorData.error
          }
        } catch {
          errorMessage = await response.text().catch(() => 'Unknown error')
        }
        
        const error = new Error(errorMessage)
        ;(error as any).statusCode = response.status
        ;(error as any).errorData = await response.json().catch(() => null)
        throw error
      }

      const result = await response.json().catch(() => ({}))

      return {
        success: true,
        message: 'Email sent successfully',
        ...result,
      }
    } catch (error) {
      clearTimeout(timeoutId)
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout - please try again')
        }
        throw error
      }
      
      throw new Error('Failed to send email')
    }
  }

  /**
   * Validate email data before sending
   */
  private static validateEmailData(data: ContactFormData): boolean {
    const { name, email, message } = data

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return false
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return false
    }

    // Length validation
    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      return false
    }

    return true
  }
}

/**
 * Utility function for direct email sending
 */
export const sendContactEmail = (data: ContactFormData) => ContactService.sendEmail(data)
