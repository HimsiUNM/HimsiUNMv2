"use client"

import type React from "react"

import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react"
import { useState } from "react"

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ nama: "", email: "", pesan: "" })
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
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="fade-in space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Alamat Sekretariat</p>
                    <p className="text-gray-600">Kampus Universitas Nusa Mandiri, Jakarta</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">himsi@nusamandiri.ac.id</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Telepon</p>
                    <p className="text-gray-600">+62 21 XXXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ikuti Kami</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:shadow-lg transition-shadow"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:shadow-lg transition-shadow"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:shadow-lg transition-shadow"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
