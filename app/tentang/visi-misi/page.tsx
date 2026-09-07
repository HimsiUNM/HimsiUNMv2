import { Telescope, Compass } from "lucide-react";

export default function VisiMisiPage() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visi & Misi
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Landasan dan arah organisasi Himpunan Mahasiswa Sistem Informasi
            dalam menjalankan peran serta program kerja organisasi.
          </p>
        </div>

        {/* Visi */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-10">
          <div className="flex items-start gap-5">

            <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
              <Telescope size={28} className="text-primary-foreground" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">
                Visi
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Mewujudkan HIMSI sebagai rumah kolaborasi yang inklusif,
                edukatif, dan berkelanjutan bagi mahasiswa Sistem Informasi.
              </p>
            </div>

          </div>
        </div>

        {/* Misi */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">

          <div className="flex items-start gap-5 mb-8">

            <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
              <Compass size={28} className="text-primary-foreground" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Misi
              </h2>

              <p className="text-gray-600 mt-2">
                Langkah strategis HIMSI dalam mewujudkan visi organisasi.
              </p>
            </div>

          </div>

          <div className="space-y-6">

            <div className="flex gap-4">
              <span className="text-primary font-bold text-lg">01</span>
              <p className="text-gray-600 leading-relaxed">
                Membangun budaya organisasi yang kondusif melalui komunikasi
                terbuka dan kegiatan penguatan kebersamaan.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-primary font-bold text-lg">02</span>
              <p className="text-gray-600 leading-relaxed">
                Mengembangkan HIMSI sebagai wadah pengembangan keilmuan
                melalui program edukatif dan kolaboratif.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-primary font-bold text-lg">03</span>
              <p className="text-gray-600 leading-relaxed">
                Mewujudkan organisasi yang inklusif dan partisipatif bagi
                seluruh mahasiswa.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-primary font-bold text-lg">04</span>
              <p className="text-gray-600 leading-relaxed">
                Meningkatkan tata kelola organisasi yang profesional melalui
                sistem kerja dan SOP yang berkelanjutan.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-primary font-bold text-lg">05</span>
              <p className="text-gray-600 leading-relaxed">
                Menguatkan kaderisasi dan pengembangan sumber daya manusia
                secara berkesinambungan.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-primary font-bold text-lg">06</span>
              <p className="text-gray-600 leading-relaxed">
                Mengoptimalkan hubungan kelembagaan dengan Program Studi dan
                pihak universitas.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}