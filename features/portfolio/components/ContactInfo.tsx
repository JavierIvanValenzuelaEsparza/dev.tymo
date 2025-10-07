import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { ThemeContext } from '@/shared/context'

interface ContactInfo {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  value: string
  href: string
}

interface ContactInfoProps {
  className?: string
}

const contactData: ContactInfo[] = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "663-408-9996",
    href: "tel:6634089996",
  },
  {
    icon: Mail,
    label: "Email",
    value: "javiervalenzuela041219@gmail.com",
    href: "mailto:javiervalenzuela041219@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Tijuana, Baja California, México",
    href: "#",
  },
]

export function ContactInfo({ className = '' }: ContactInfoProps) {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <div className={className}>
      <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${currentTheme.text}`}>
        Información de Contacto
      </h3>
      
      <div className="space-y-4 sm:space-y-6">
        {contactData.map((contact) => (
          <motion.div
            key={contact.label}
            whileHover={{ scale: 1.02, x: 5 }}
            className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 ${currentTheme.bg} rounded-lg border ${currentTheme.border} transition-all duration-200`}
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${currentTheme.gradientFrom} ${currentTheme.gradientTo} rounded-full flex items-center justify-center border ${currentTheme.border} flex-shrink-0`}
            >
              <contact.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${currentTheme.text}`} />
            </div>
            
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-400">
                {contact.label}
              </p>
              <a
                href={contact.href}
                className={`font-medium hover:${currentTheme.text} transition-colors text-white text-sm sm:text-base break-all`}
                {...(contact.href.startsWith('mailto:') || contact.href.startsWith('tel:') 
                  ? { target: '_self' } 
                  : {})}
              >
                {contact.value}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
