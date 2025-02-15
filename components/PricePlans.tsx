import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "0",
    features: ["Basic vehicle tracking", "QR code generation", "Mobile app access", "Ad-supported"],
  },
  {
    name: "Premium",
    price: "9.99",
    features: [
      "Advanced vehicle tracking",
      "Unlimited QR codes",
      "Ad-free experience",
      "Priority support",
      "Detailed analytics",
      "Custom alerts",
    ],
  },
]

const translations = {
  en: {
    title: "Simple Pricing",
    subtitle: "Choose the plan that fits your needs",
    monthly: "monthly",
    getStarted: "Get Started",
  },
  ro: {
    title: "Prețuri Simple",
    subtitle: "Alegeți planul care se potrivește nevoilor dumneavoastră",
    monthly: "lunar",
    getStarted: "Începeți",
  },
  ru: {
    title: "Простые Цены",
    subtitle: "Выберите план, который подходит вашим потребностям",
    monthly: "ежемесячно",
    getStarted: "Начать",
  },
}

export default function PricePlans({ language }: { language: string }) {
  const t = translations[language as keyof typeof translations]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{t.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                ${plan.price} <span className="text-lg font-normal text-gray-600">/ {t.monthly}</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <Check className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="default" className="w-full">
                {t.getStarted}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

