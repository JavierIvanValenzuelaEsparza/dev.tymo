export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
  error?: string
}

export interface ContactFormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage?: string
}

export interface UseContactFormReturn {
  state: ContactFormState
  submitForm: (data: ContactFormData) => Promise<void>
  resetForm: () => void
}
