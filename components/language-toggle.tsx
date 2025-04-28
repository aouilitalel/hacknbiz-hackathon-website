"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="rounded-full font-medium"
      onClick={() => setLanguage(language === "en" ? "fr" : "en")}
      aria-label={language === "en" ? "Switch to French" : "Switch to English"}
    >
      {language === "en" ? "FR" : "EN"}
    </Button>
  )
}
