import { Button } from "@/components/ui/button"
import Image from "next/image"

const translations = {
  en: {
    title: "iBeep",
    subtitle: "Smart Auto Monitoring with QR Codes",
    description: "Track, manage, and secure your vehicles with ease using our innovative QR code system.",
    cta: "Buy Now",
  },
  ro: {
    title: "iBeep",
    subtitle: "Monitorizare Auto Inteligentă cu Coduri QR",
    description:
      "Urmăriți, gestionați și securizați vehiculele cu ușurință folosind sistemul nostru inovator de coduri QR.",
    cta: "Cumpara Acum",
  },
  ru: {
    title: "iBeep",
    subtitle: "Умный Мониторинг Авто с QR-кодами",
    description:
      "Отслеживайте, управляйте и защищайте свои автомобили с легкостью, используя нашу инновационную систему QR-кодов.",
    cta: "Купить",
  },
}

export default function Hero({ language }: { language: string }) {
  const t = translations[language as keyof typeof translations]

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">{t.title}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{t.subtitle}</h2>
        <p className="text-xl mb-8 text-white">{t.description}</p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-background text-foreground font-bold hover:bg-background/90"
          >
            {t.cta}
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/newlogo.svg"
            alt="iBeep App Screenshot"
            width={300}
            height={600}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

