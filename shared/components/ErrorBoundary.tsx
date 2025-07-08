"use client"

import React, { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, AlertCircle } from "lucide-react"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="text-center space-y-4 max-w-md">
            <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
            <h3 className="text-lg font-semibold text-white">Error al cargar la sección</h3>
            <p className="text-gray-400 text-sm">
              Hubo un problema cargando esta sección. Por favor, inténtalo de nuevo.
            </p>
            <Button
              onClick={() => this.setState({ hasError: false })}
              className="gap-2"
              variant="outline"
            >
              <RefreshCw className="w-4 h-4" />
              Reintentar
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
