"use client"

import { Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { dataPengumuman } from "@/lib/data-pengumuman"

export default function PengumumanRingkasan() {
  const pengumumanTerbaru = [...dataPengumuman].reverse().slice(0, 3)

  return (
    <section id="pengumuman" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Pengumuman
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pengumumanTerbaru.map((item, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow fade-in group"
              style={{ animationDelay: `${idx * 100}ms` }}
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
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.judul}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {item.ringkasan}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-12 fade-in">
          <Link
            href="/informasi/pengumuman"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Lihat Semua Pengumuman
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}