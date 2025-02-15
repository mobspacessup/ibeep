"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const translations = {
  en: {
    title: "Get Started with iBeep",
    subtitle: "Fill out the form below to start monitoring your vehicles",
    name: "Name",
    email: "Email",
    phone: "Phone",
    submit: "Request Demo",
  },
  ro: {
    title: "Începeți cu iBeep",
    subtitle: "Completați formularul de mai jos pentru a începe monitorizarea vehiculelor dvs.",
    name: "Nume",
    email: "Email",
    phone: "Telefon",
    submit: "Solicitați Demo",
  },
  ru: {
    title: "Начните с iBeep",
    subtitle: "Заполните форму ниже, чтобы начать мониторинг ваших транспортных средств",
    name: "Имя",
    email: "Электронная почта",
    phone: "Телефон",
    submit: "Запросить Демо",
  },
}

export default function OrderForm({ language }: { language: string }) {
  const t = translations[language as keyof typeof translations]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send data to backend)
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">{t.subtitle}</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder={t.name}
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder={t.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <Input
              type="tel"
              name="phone"
              placeholder={t.phone}
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full">
            {t.submit}
          </Button>
        </form>
      </div>
    </section>
  )
}

