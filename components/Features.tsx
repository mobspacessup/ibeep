import { Smartphone, QrCode, Bell, Shield, BarChart, Users } from "lucide-react"

const features = [
  {
    icon: <QrCode className="h-10 w-10 text-blue-500" />,
    title: "QR Code Scanning",
    description: "Easily scan and manage vehicles with unique QR codes",
  },
  {
    icon: <Bell className="h-10 w-10 text-blue-500" />,
    title: "Real-time Alerts",
    description: "Receive instant notifications about your vehicle's status",
  },
  {
    icon: <BarChart className="h-10 w-10 text-blue-500" />,
    title: "Detailed Analytics",
    description: "Access comprehensive reports and insights about your fleet",
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-500" />,
    title: "Enhanced Security",
    description: "Protect your vehicles with advanced security features",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-blue-500" />,
    title: "Mobile Access",
    description: "Monitor your vehicles anytime, anywhere from your smartphone",
  },
  {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    title: "Multi-user Support",
    description: "Collaborate with team members for efficient fleet management",
  },
]

const translations = {
  en: {
    title: "Key Features",
    subtitle: "Discover what makes iBeep the ultimate auto monitoring solution",
  },
  ro: {
    title: "Caracteristici Cheie",
    subtitle: "Descoperiți ce face din iBeep soluția ultimă de monitorizare auto",
  },
  ru: {
    title: "Ключевые Функции",
    subtitle: "Узнайте, что делает iBeep лучшим решением для мониторинга автомобилей",
  },
}

export default function Features({ language }: { language: string }) {
  const t = translations[language as keyof typeof translations]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-xl text-center text-gray-600 mb-12">{t.subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

