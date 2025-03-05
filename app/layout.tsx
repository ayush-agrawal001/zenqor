import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/nav-bar"

export const metadata: Metadata = {
  title: "Zenqor - Quantum Neural Networks",
  description: "Revolutionizing Industries with Quantum Neural Networks",
}

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark`}>
      <body className={`${MontserratFont.className} bg-[#0D0B10]`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

