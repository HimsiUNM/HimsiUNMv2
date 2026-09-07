"use client"

import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { dataBerita } from "@/lib/data-berita"

export default function BeritaRingkasan() {
  const beritaTerbaru = [...dataBerita].reverse().slice(0, 3)

  return (
    <section id="berita" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Berita Himsi
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {beritaTerbaru.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow fade-in group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                  <Calendar size={14} />
                  {item.tanggal}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.judul}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 fade-in">
          <Link
            href="/informasi/berita"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Lihat Semua Berita
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}