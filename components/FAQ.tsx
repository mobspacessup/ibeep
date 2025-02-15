import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does iBeep's QR code system work?",
    answer:
      "iBeep uses unique QR codes assigned to each vehicle. When scanned with the app, it provides instant access to the vehicle's information, status, and history.",
  },
  {
    question: "Is iBeep compatible with all types of vehicles?",
    answer:
      "Yes, iBeep can be used with any type of vehicle, including cars, trucks, motorcycles, and even boats or construction equipment.",
  },
  {
    question: "How secure is the data stored in iBeep?",
    answer:
      "We take data security seriously. All data is encrypted and stored securely in the cloud, with strict access controls and regular security audits.",
  },
  {
    question: "Can I use iBeep for personal vehicles or is it only for fleets?",
    answer:
      "iBeep is designed for both personal use and fleet management. Whether you have one car or a hundred, iBeep can help you monitor and manage your vehicles.",
  },
  {
    question: "Does iBeep require any special hardware installation?",
    answer:
      "No, iBeep doesn't require any special hardware. You only need to place the QR code sticker on your vehicle and use the mobile app for scanning and management.",
  },
]

const translations = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about iBeep",
  },
  ro: {
    title: "Întrebări Frecvente",
    subtitle: "Găsiți răspunsuri la întrebările comune despre iBeep",
  },
  ru: {
    title: "Часто Задаваемые Вопросы",
    subtitle: "Найдите ответы на распространенные вопросы о iBeep",
  },
}

export default function FAQ({ language }: { language: string }) {
  const t = translations[language as keyof typeof translations]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{t.subtitle}</p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

