import { Button } from "@/components/ui/button"

export default function LanguageSwitcher({
  language,
  setLanguage,
}: { language: string; setLanguage: (lang: string) => void }) {
  return (
    <div className="flex space-x-2">
      <Button variant={language === "en" ? "default" : "outline"} onClick={() => setLanguage("en")}>
        EN
      </Button>
      <Button variant={language === "ro" ? "default" : "outline"} onClick={() => setLanguage("ro")}>
        RO
      </Button>
      <Button variant={language === "ru" ? "default" : "outline"} onClick={() => setLanguage("ru")}>
        RU
      </Button>
    </div>
  )
}

