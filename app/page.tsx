"use client"

import { useState } from "react"
import Hero from "@/components/Hero"
import Testimonials from "@/components/Testimonials"
import PricePlans from "@/components/PricePlans"
import FAQ from "@/components/FAQ"
import Features from "@/components/Features"
import Advantages from "@/components/Advantages"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import OrderForm from "@/components/OrderForm"

export default function LandingPage() {
  const [language, setLanguage] = useState("en")

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">iBeep</h1>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </header>

      <main>
        <Hero language={language} />
        <Features language={language} />
        <Advantages language={language} />
        <Testimonials language={language} />
        <PricePlans language={language} />
        <FAQ language={language} />
        <OrderForm language={language} />
      </main>

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} iBeep. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

