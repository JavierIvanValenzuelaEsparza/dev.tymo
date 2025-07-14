import { useState, useCallback } from 'react'
import { toast } from 'sonner'
import { ContactService } from '@/shared/services/contact'
import type { 
  ContactFormData, 
  ContactFormState, 
  UseContactFormReturn 
} from '@/shared/types/contact'

export function useContactForm(): UseContactFormReturn {
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

      toast.success("Mensaje enviado", {
        description: "✅ Mensaje enviado correctamente",
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

      toast.error("Error", {
        description: `❌ ${errorMessage}`,
        duration: 4000,
      })

      console.error('Contact form error:', error)
    }
  }, [])

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
