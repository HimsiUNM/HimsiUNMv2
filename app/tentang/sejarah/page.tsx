export default function SejarahPage() {
  return (
    <main className="bg-background py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header / Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Sejarah HIMSI
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Berdiri sejak 29 Juni 2019, HIMSI hadir sebagai wadah mahasiswa Sistem Informasi untuk berkembang, berkolaborasi, dan berkarya. Berawal dari STMIK Nusa Mandiri hingga menjadi bagian dari Universitas Nusa Mandiri, HIMSI terus melanjutkan perjalanan dan menjaga semangat organisasi dari generasi ke generasi.
          </p>
        </div>

        {/* Sejarah Lengkap */}
        <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            Latar Belakang & Perjalanan
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri merupakan organisasi mahasiswa yang lahir sebagai wadah bagi mahasiswa Program Studi Sistem Informasi untuk mengembangkan potensi, membangun solidaritas, serta berkontribusi dalam lingkungan akademik dan kemahasiswaan.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            HIMSI telah berdiri sejak 29 Juni 2019, pada masa institusi masih berada di bawah Sekolah Tinggi Manajemen Informatika dan Komputer (STMIK) Nusa Mandiri. Seiring dengan perkembangan dan perubahan kelembagaan menjadi Universitas Nusa Mandiri, HIMSI tetap melanjutkan eksistensinya sebagai organisasi mahasiswa Sistem Informasi di lingkungan Universitas Nusa Mandiri.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Sejak awal berdirinya hingga saat ini, HIMSI terus berkembang melalui berbagai kegiatan akademik, pengembangan teknologi, pengabdian, serta kegiatan kemahasiswaan. Dengan semangat kebersamaan, inovasi, dan pengembangan kompetensi, HIMSI berkomitmen menjadi wadah bagi mahasiswa Sistem Informasi untuk bertumbuh, berkarya, dan memberikan kontribusi positif bagi almamater maupun masyarakat.
          </p>
        </section>

        {/* Timeline Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Timeline HIMSI
          </h2>
          
          <div className="space-y-6">
            {/* 2019 — Awal Berdiri */}
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-gray-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                2019 — Awal Berdiri
              </h3>
              <p className="text-gray-600 leading-relaxed">
                HIMSI didirikan pada 29 Juni 2019 sebagai wadah mahasiswa Sistem Informasi di lingkungan STMIK Nusa Mandiri.
              </p>
            </section>

            {/* Transformasi Institusi */}
            <section className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border-l-4 border-gray-900">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Transformasi Institusi
              </h3>
              <p className="text-gray-600 leading-relaxed">
                STMIK Nusa Mandiri berkembang menjadi Universitas Nusa Mandiri. HIMSI tetap melanjutkan eksistensinya sebagai organisasi mahasiswa Sistem Informasi.
              </p>
            </section>

            {/* Hari Ini */}
            <section className="bg-primary rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                Hari Ini
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                HIMSI terus berkembang sebagai wadah mahasiswa untuk meningkatkan kompetensi, membangun relasi, berinovasi, dan berkontribusi bagi kampus serta masyarakat.
              </p>
            </section>
          </div>
        </div>

      </div>
    </main>
  );
}