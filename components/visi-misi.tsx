"use client"

import Link from "next/link"
import { Telescope, Compass, ArrowRight } from "lucide-react";

export default function VisiMisiSummary() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Visi & Misi
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* VISI - RINGKAS */}
          <div className="fade-in group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <Telescope size={24} className="text-primary-foreground" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Visi
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  Mewujudkan HIMSI sebagai rumah kolaborasi yang inklusif,
                  edukatif, dan berkelanjutan bagi mahasiswa Sistem Informasi.
                </p>
              </div>
            </div>
          </div>

          {/* MISI - RINGKAS */}
          <div className="fade-in group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <Compass size={24} className="text-primary-foreground" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Misi
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  HIMSI berkomitmen membangun organisasi yang inklusif,
                  edukatif, profesional, dan berkelanjutan melalui pengembangan
                  mahasiswa serta kolaborasi kelembagaan.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <Link
            href="/tentang/visi-misi"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
          >
            Lihat Visi & Misi Lengkap
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}