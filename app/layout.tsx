import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HIMSI - Himpunan Mahasiswa Sistem Informasi",
  description:
    "HIMSI Universitas Nusa Mandiri - Wadah mahasiswa Sistem Informasi untuk berkarya, belajar, dan berkontribusi",
  icons: {
    icon: "/logohimsi2.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}