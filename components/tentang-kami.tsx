import { ArrowRight } from "lucide-react";

export default function TentangKami() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Tentang Kami
        </h2>

        <div className="max-w-4xl mx-auto text-center fade-in">
          <p className="text-gray-600 leading-relaxed text-lg mb-6">
            HIMSI (Himpunan Mahasiswa Sistem Informasi) Universitas Nusa Mandiri
            merupakan organisasi mahasiswa yang menjadi wadah bagi mahasiswa
            Sistem Informasi untuk berkembang, berkolaborasi, dan berkontribusi
            dalam lingkungan akademik maupun organisasi.
          </p>

          <p className="text-gray-600 leading-relaxed text-lg">
            HIMSI hadir untuk membangun lingkungan yang edukatif, inklusif,
            dan kolaboratif melalui berbagai kegiatan serta pengembangan
            potensi mahasiswa.
          </p>

          <a
            href="/tentang/sejarah"
            className="inline-flex items-center mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
          >
            Kenali HIMSI Lebih Lanjut
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
}