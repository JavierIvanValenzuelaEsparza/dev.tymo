import React, { useRef, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { ThemeContext } from '@/shared/context'
import { useContactForm } from '@/hooks/use-contact-form'
import type { ContactFormData } from '@/shared/types'

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const { currentTheme } = useContext(ThemeContext)
  const { state, submitForm, resetForm } = useContactForm()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    }

    await submitForm(data)
    
    if (!state.isError) {
      formRef.current.reset()
      resetForm()
    }
  }

  return (
    <div className={className}>
      <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${currentTheme.text}`}>
        Envíame un mensaje
      </h3>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxLength={100}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-${currentTheme.primary}-500 transition-all`}
            placeholder="Tu nombre"
            disabled={state.isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={255}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-${currentTheme.primary}-500 transition-all`}
            placeholder="tu@email.com"
            disabled={state.isSubmitting}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            maxLength={1000}
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${currentTheme.border} bg-gray-800/50 text-white resize-none focus:outline-none focus:ring-2 focus:ring-${currentTheme.primary}-500 transition-all`}
            placeholder="Tu mensaje..."
            disabled={state.isSubmitting}
          />
        </div>

        <Button
          type="submit"
          className={`w-full bg-gradient-to-r ${currentTheme.button} ${currentTheme.buttonHover} text-base sm:text-lg py-2.5 sm:py-3 border ${currentTheme.border} disabled:opacity-50 disabled:cursor-not-allowed transition-all`}
          disabled={state.isSubmitting}
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          {state.isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>

        {state.isSuccess && (
          <p className="text-green-400 text-sm pt-2">
            ✅ Mensaje enviado correctamente
          </p>
        )}
        
        {state.isError && (
          <p className="text-red-500 text-sm pt-2">
            ❌ {state.errorMessage || 'Ocurrió un error al enviar el mensaje'}
          </p>
        )}
      </form>
    </div>
  )
}
