"use client"

import { useParams } from "next/navigation"
import { Calendar, MapPin, Clock, Users, ArrowLeft, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import { dataBerita } from "@/lib/data-berita"

export default function DetailBerita() {
  const params = useParams()
  const slug = params.slug as string

  const berita = dataBerita.find((item) => item.slug === slug)

  if (!berita) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8 max-w-md">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-6">Maaf, berita yang Anda cari tidak dapat ditemukan.</p>
          <Link
            href="/informasi/berita"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Kembali ke Berita
          </Link>
        </div>
      </div>
    )
  }

  const shareBerita = () => {
    if (navigator.share) {
      navigator.share({
        title: berita.judul,
        text: berita.deskripsi,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link berita telah disalin!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#berita"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors bg-white/50 backdrop-blur rounded-lg px-4 py-2 border border-gray-200"
            >
              <ArrowLeft size={20} />
              Kembali ke Berita
            </Link>

            <button
              onClick={shareBerita}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors bg-white/50 backdrop-blur rounded-lg px-4 py-2 border border-gray-200"
            >
              <Share2 size={18} />
              Bagikan
            </button>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-xl">
          <img
            src={berita.image || "/placeholder.svg"}
            alt={berita.judul}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
              {berita.kategori}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              {berita.judul}
            </h1>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Tanggal</p>
                <p className="font-semibold text-gray-900">{berita.tanggal}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Waktu</p>
                <p className="font-semibold text-gray-900">{berita.waktu}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Lokasi</p>
                <p className="font-semibold text-gray-900">{berita.lokasi}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Peserta</p>
                <p className="font-semibold text-gray-900">{berita.peserta}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <p className="text-lg text-gray-700 mb-8 leading-relaxed border-l-4 border-blue-600 pl-4 bg-blue-50 py-3 rounded-r">
            {berita.deskripsi}
          </p>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: berita.kontenLengkap }}
          />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/informasi/berita"
            className="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
          >
            <ArrowLeft size={20} />
            Lihat Berita Lainnya
          </Link>
          <button
            onClick={shareBerita}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
          >
            <Share2 size={20} />
            Bagikan Berita Ini
          </button>
        </div>
      </article>
    </div>
  )
}