import { useState, useCallback } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { ContactService } from '@/shared/services/contact'
import type { 
  ContactFormData, 
  ContactFormState, 
  UseContactFormReturn 
} from '@/shared/types/contact'

/**
 * Custom hook for handling contact form logic
 */
export function useContactForm(): UseContactFormReturn {
  const { toast } = useToast()
  
  const [state, setState] = useState<ContactFormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  })

  const submitForm = useCallback(async (data: ContactFormData) => {
    setState(prev => ({
      ...prev,
      isSubmitting: true,
      isError: false,
      isSuccess: false,
      errorMessage: undefined,
    }))

    try {
      await ContactService.sendEmail(data)
      
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        isError: false,
      }))

      toast({
        title: "Mensaje enviado",
        description: "✅ Mensaje enviado correctamente",
        variant: "default",
        duration: 4000,
      })
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Ocurrió un error inesperado'

      setState(prev => ({
        ...prev,
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage,
      }))

      toast({
        title: "Error",
        description: `❌ ${errorMessage}`,
        variant: "destructive",
        duration: 4000,
      })

      console.error('Contact form error:', error)
    }
  }, [toast])

  const resetForm = useCallback(() => {
    setState({
      isSubmitting: false,
      isSuccess: false,
      isError: false,
      errorMessage: undefined,
    })
  }, [])

  return {
    state,
    submitForm,
    resetForm,
  }
}
