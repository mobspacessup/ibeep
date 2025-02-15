import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    role: "Fleet Manager",
    company: "Logistics Co.",
    image: "/placeholder.svg",
    quote:
      "iBeep has revolutionized how we manage our fleet. The QR code system is ingenious and saves us hours every week.",
  },
  {
    name: "Jane Smith",
    role: "Small Business Owner",
    company: "Smith's Deliveries",
    image: "/placeholder.svg",
    quote:
      "As a small business owner, iBeep has been a game-changer. It's affordable, easy to use, and has improved our efficiency tremendously.",
  },
  {
    name: "Alex Johnson",
    role: "Car Enthusiast",
    company: "",
    image: "/placeholder.svg",
    quote:
      "I use iBeep for my personal vehicles. It's great for keeping track of maintenance and it gives me peace of mind with its security features.",
  },
]

const translations = {
  en: {
    title: "What Our Users Say",
    subtitle: "Discover how iBeep is transforming vehicle management",
  },
  ro: {
    title: "Ce Spun Utilizatorii Noștri",
    subtitle: "Descoperiți cum iBeep transformă gestionarea vehiculelor",
  },
  ru: {
    title: "Что Говорят Наши Пользователи",
    subtitle: "Узнайте, как iBeep трансформирует управление транспортными средствами",
  },
}

export default function Testimonials({ language }: { language: string }) {
  const t = translations[language as keyof typeof translations]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{t.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  {testimonial.company && <p className="text-sm text-gray-600">{testimonial.company}</p>}
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

