"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "fr"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Simple translations object
const translations = {
  en: {
    "nav.home": "Home",
    "nav.agenda": "Agenda",
    "nav.sponsors": "Sponsors",
    "nav.contact": "Contact",
    "nav.register": "Register Now",
    "hero.title": "Hack'n'Biz",
    "hero.subtitle":
      "Where innovation meets business. Join the premier hackathon experience organized by Fortum Junior Entreprise.",
    "hero.register": "Register Now",
    "hero.schedule": "View Schedule",
    // Add more translations as needed
  },
  fr: {
    "nav.home": "Accueil",
    "nav.agenda": "Programme",
    "nav.sponsors": "Sponsors",
    "nav.contact": "Contact",
    "nav.register": "S'inscrire",
    "hero.title": "Hack'n'Biz",
    "hero.subtitle":
      "Là où l'innovation rencontre les affaires. Rejoignez l'expérience hackathon organisée par Fortum Junior Entreprise.",
    "hero.register": "S'inscrire",
    "hero.schedule": "Voir le Programme",
    // Add more translations as needed
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to English, but check localStorage on mount
  const [language, setLanguage] = useState<Language>("en")

  // Load saved language preference from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
