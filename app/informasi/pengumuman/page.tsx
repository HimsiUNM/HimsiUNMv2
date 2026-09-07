"use client"

import { Clock, User, Calendar, MapPin } from "lucide-react"
import { useState, useEffect } from "react"
import { dataPengumuman } from "@/lib/data-pengumuman"

export default function Pengumuman() {
  const [selectedBerita, setSelectedBerita] = useState<any>(null)

  useEffect(() => {
    if (selectedBerita) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedBerita])

  return (
    <section id="pengumuman" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">Pengumuman</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {dataPengumuman.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow fade-in group"
              style={{ animationDelay: `${(idx % 6) * 100}ms` }}
            >
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {item.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {item.tanggal}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.judul}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{item.ringkasan}</p>
                <button
                  onClick={() => setSelectedBerita(item)}
                  className="text-primary font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all"
                >
                  Baca Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedBerita && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200">
            <div className="relative">
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={selectedBerita.image || "/placeholder.svg"}
                  alt={selectedBerita.judul}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedBerita(null)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    {selectedBerita.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {selectedBerita.tanggal}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedBerita.judul}</h3>

                <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    Informasi Pelaksanaan
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Calendar size={14} className="text-gray-500" />
                      <span className="font-medium">Tanggal:</span>
                      <span>{selectedBerita.tanggalPelaksanaan}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock size={14} className="text-gray-500" />
                      <span className="font-medium">Waktu:</span>
                      <span>{selectedBerita.waktu}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-gray-700">
                      <MapPin size={14} className="text-gray-500 mt-0.5" />
                      <div>
                        <span className="font-medium">Lokasi:</span>
                        <span className="ml-1">{selectedBerita.lokasi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none">
                  {selectedBerita.detail.split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedBerita(null)}
                  className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}