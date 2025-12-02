"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Locale = 'fr' | 'en'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  messages: Record<string, any>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

// Import messages statically
import frMessages from '@/messages/fr.json'
import enMessages from '@/messages/en.json'

const allMessages: Record<Locale, Record<string, any>> = {
  fr: frMessages,
  en: enMessages
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get locale from localStorage on mount
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale && (savedLocale === 'fr' || savedLocale === 'en')) {
      setLocaleState(savedLocale)
    }
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
    // Also set cookie for SSR
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`
  }

  const messages = allMessages[locale]

  // Helper function to get nested translation
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = messages
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }
    return typeof value === 'string' ? value : key
  }

  // Helper function for default locale (used before mount)
  const tDefault = (key: string): string => {
    const keys = key.split('.')
    let value: any = frMessages
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key
      }
    }
    return typeof value === 'string' ? value : key
  }

  // Avoid hydration mismatch - but still show translated content with default locale
  if (!mounted) {
    return (
      <LocaleContext.Provider value={{ locale: 'fr', setLocale, t: tDefault, messages: frMessages }}>
        {children}
      </LocaleContext.Provider>
    )
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, messages }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
