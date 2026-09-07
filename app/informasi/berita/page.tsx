"use client"

import { Calendar } from "lucide-react"
import Link from "next/link"
import { dataBerita } from "@/lib/data-berita"

export default function Berita() {
  return (
    <section id="berita" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Berita Himsi
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataBerita.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow fade-in group"
              style={{ animationDelay: `${(idx % 6) * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.judul}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-2">
                  <Calendar size={16} />
                  {item.tanggal}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.judul}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.deskripsi}
                </p>
                <Link
                  href={`/berita/${item.slug}`}
                  className="text-primary font-semibold text-sm hover:gap-2 flex items-center gap-1 transition-all"
                >
                  Pelajari Lebih Lanjut →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}