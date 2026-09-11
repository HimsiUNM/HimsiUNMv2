"use client"

import type React from "react"

import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const contactPersons = [
    { 
      nama: "Karlos", 
      jabatan: "Humas", 
      no_telp: "082123544968",
      // Format nomor telepon untuk WhatsApp (mengubah 0 di depan menjadi 62)
      whatsapp: "6282123544968" 
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus("idle")
    setErrorMessage("")

    const { error } = await supabase.from("pesan_kontak").insert([formData])

    if (error) {
      console.log("Detail Error Supabase:", error)
      setStatus("error")
      setErrorMessage(error.message)
    } else {
      setStatus("success")
      setFormData({ nama: "", email: "", pesan: "" })
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="kontak" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Hubungi Kami</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-gray-900 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Masukkan email Anda"
                  required
                />
              </div>

              <div>
                <label htmlFor="pesan" className="block text-sm font-medium text-gray-900 mb-2">
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tulis pesan Anda"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-sm text-center">Pesan berhasil terkirim. Terima kasih!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Gagal mengirim pesan{errorMessage ? `: ${errorMessage}` : ". Silakan coba lagi."}
                </p>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="fade-in space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                {/* Alamat (Mengarah ke Google Maps) */}
                <a
                  href="https://maps.app.goo.gl/rmEchPwYYrKuvtVc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Alamat Sekretariat</p>
                    <p className="text-gray-600">Kampus Universitas Nusa Mandiri, Jakarta</p>
                  </div>
                </a>

                {/* Email (Mengarah ke aplikasi mail) */}
                <a
                  href="mailto:nusamandirihimsi@gmail.com"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Email</p>
                    <p className="text-gray-600">nusamandirihimsi@gmail.com</p>
                  </div>
                </a>

                {/* Contact Person per sie (Mengarah ke WhatsApp) */}
                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Contact Person (CP)</p>
                    {contactPersons.map((cp) => (
                      <a
                        key={cp.no_telp}
                        href={`https://wa.me/${cp.whatsapp}?text=Halo%20Kak%20${cp.nama},%20saya%20ingin%20bertanya...`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {cp.nama} ({cp.jabatan}) — {cp.no_telp}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ikuti Kami
              </h3>

              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/himsi.nusamandiri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:shadow-lg transition-shadow"
                >
                  <Instagram size={20} />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@HIMSInusamandiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:shadow-lg transition-shadow"
                >
                  <Youtube size={20} />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@himsinusamandiriunm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok HIMSI Nusamandiri"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:shadow-lg transition-shadow"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.45v13.67a2.84 2.84 0 1 1-2.84-2.84c.3 0 .59.05.86.13V9.45a6.3 6.3 0 1 0 5.43 6.22V8.33a8.2 8.2 0 0 0 4.77 1.52V6.69z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}