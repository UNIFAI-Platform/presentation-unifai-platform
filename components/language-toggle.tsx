"use client"

import { useLocale } from "@/components/locale-provider"

export function LanguageToggle() {
  const { locale, setLocale } = useLocale()

  const toggleLocale = () => {
    setLocale(locale === 'fr' ? 'en' : 'fr')
  }

  return (
    <button
      onClick={toggleLocale}
      className="relative z-50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full p-2 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-card/50 backdrop-blur-sm border border-border text-primary hover:bg-primary/20 h-10 w-10"
      aria-label={locale === 'fr' ? 'Switch to English' : 'Passer en Français'}
      title={locale === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      <span className="text-xs font-bold">{locale.toUpperCase()}</span>
      <span className="sr-only">
        {locale === 'fr' ? 'Switch to English' : 'Passer en Français'}
      </span>
    </button>
  )
}
