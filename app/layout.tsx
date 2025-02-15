import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"

const inter = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400','500','600','700','900'] })

export const metadata = {
  title: "iBeep - Smart Auto Monitoring with QR Codes",
  description: "Track, manage, and secure your vehicles with ease using our innovative QR code system.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=<body className="font-sans">
  {children}
</body>

    </html>
  )
}



import './globals.css'