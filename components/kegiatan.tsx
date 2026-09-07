"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function KegiatanRingkasan() {
  const benefits = [
    {
      image: "/logonasi.png",
      title: "NASI",
      description:
        "Kegiatan rutin HIMSI setiap tiga bulan sekali sebagai ajang silaturahmi dan penguatan relasi antaranggota.",
    },
    {
      image: "/logoseminar.png",
      title: "Seminar",
      description:
        "Meningkatkan wawasan dan kompetensi mahasiswa Sistem Informasi lewat pemaparan materi oleh narasumber berpengalaman.",
    },
    {
      image: "/workshop.png",
      title: "Workshop",
      description:
        "Kegiatan pembelajaran praktis untuk meningkatkan keterampilan teknis dan pemahaman aplikatif mahasiswa.",
    },
    {
      image: "/logomakrab.png",
      title: "Makrab",
      description:
        "Kegiatan tahunan setelah pergantian kepengurusan untuk membangun keakraban dan kekompakan antar-pengurus.",
    },
    {
      image: "/stuban.png",
      title: "Studi Banding",
      description:
        "Memperluas wawasan organisasi melalui pertukaran informasi dengan Himpunan Mahasiswa Sistem Informasi kampus lain.",
    },
  ];

  return (
    <section id="kegiatan" className="py-16 md:py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kegiatan Himsi
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mari berkembang dan berkontribusi bersama dalam ekosistem organisasi
            yang inovatif dan suportif.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="fade-in group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col items-center p-5 text-center"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-14 h-14 mb-3 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={56}
                  height={56}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-3">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 fade-in">
          <Link
            href="/informasi/kegiatan"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Lihat Semua Kegiatan
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}