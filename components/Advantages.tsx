import { CheckCircle } from "lucide-react"

const advantages = [
  "Effortless vehicle tracking and management",
  "Improved fleet security and theft prevention",
  "Reduced operational costs and increased efficiency",
  "Enhanced maintenance scheduling and vehicle longevity",
  "Better compliance with regulations and reporting",
  "Improved driver behavior and safety",
]

const translations = {
  en: {
    title: "Why Choose iBeep?",
    subtitle: "Experience the advantages of smart auto monitoring",
  },
  ro: {
    title: "De ce să alegeți iBeep?",
    subtitle: "Experimentați avantajele monitorizării auto inteligente",
  },
  ru: {
    title: "Почему стоит выбрать iBeep?",
    subtitle: "Оцените преимущества умного мониторинга автомобилей",
  },
}

export default function Advantages({ language }: { language: string }) {
  const t = translations[language as keyof typeof translations]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{t.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <span className="text-lg">{advantage}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

