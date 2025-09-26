import { useCallback, useState } from 'react'

interface CVDownloadHook {
  downloadCV: (type: 'light' | 'dark') => void
  downloadLightCV: () => void
  downloadDarkCV: () => void
  isDownloading: boolean
}

export function useCVDownload(): CVDownloadHook {
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadCV = useCallback(async (type: 'light' | 'dark') => {
    setIsDownloading(true)
    
    try {
      const cvPath = type === 'light' ? '/cv-light.pdf' : '/cv-dark.pdf'
      const fileName = `CV-Javier-Valenzuela-${type === 'light' ? 'Light' : 'Dark'}.pdf`
      
      const link = document.createElement('a')
      link.href = cvPath
      link.download = fileName
      link.target = '_blank'
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      await new Promise(resolve => setTimeout(resolve, 500))
    } finally {
      setIsDownloading(false)
    }
  }, [])

  const downloadLightCV = useCallback(() => {
    downloadCV('light')
  }, [downloadCV])

  const downloadDarkCV = useCallback(() => {
    downloadCV('dark')
  }, [downloadCV])

  return {
    downloadCV,
    downloadLightCV,
    downloadDarkCV,
    isDownloading
  }
}
