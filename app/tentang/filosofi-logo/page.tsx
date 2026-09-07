import {
  Component,
  FileText,
  Circle,
  Cpu,
  Settings,
  BarChart3,
  Cloud,
  Handshake,
  Hexagon,
  GitBranch,
  Sparkles,
  LucideIcon,
} from "lucide-react";

type ElementItem = {
  icon: LucideIcon;
  title: string;
  meaning: string;
  description: string;
};

const elements: ElementItem[] = [
  {
    icon: Component,
    title: "Inisial SI",
    meaning: "Identitas Utama Himpunan",
    description:
      "Menjadi fokus utama yang menegaskan identitas himpunan. Desainnya terintegrasi dengan sirkuit, menunjukkan pendekatan modern dan digital dari mahasiswa Sistem Informasi.",
  },
  {
    icon: FileText,
    title: "Tulisan Himpunan & Universitas",
    meaning: "Identitas Resmi & Afiliasi Kampus",
    description:
      'Tulisan "Himpunan Mahasiswa Sistem Informasi" dan "Universitas Nusa Mandiri" menegaskan bahwa HIMSI adalah organisasi kemahasiswaan formal, representasi resmi mahasiswa SI di kampus.',
  },
  {
    icon: Circle,
    title: "Lingkaran",
    meaning: "Kesatuan & Siklus Berkelanjutan",
    description:
      "Bentuk lingkaran yang mengelilingi inisial melambangkan kesatuan dan komunitas mahasiswa SI, sekaligus mewakili siklus pengembangan sistem dan inovasi yang terus berlanjut.",
  },
  {
    icon: Cpu,
    title: "MicroChip",
    meaning: "Komponen Inti & Pemrosesan Intelektual",
    description:
      "Mewakili otak atau pusat pemrosesan sistem komputer. Melambangkan kecerdasan, inovasi, dan pemahaman mendalam tentang perangkat keras serta logika komputasi.",
  },
  {
    icon: Settings,
    title: "Gear (Roda Gigi)",
    meaning: "Mekanisme, Proses, dan Efisiensi",
    description:
      "Mewakili mekanisme dan proses operasional yang berjalan dalam suatu sistem, menekankan pentingnya merancang sistem yang efisien dan andal.",
  },
  {
    icon: BarChart3,
    title: "Barchart",
    meaning: "Analisis dan Keputusan Bisnis",
    description:
      "Grafik yang mencerminkan analisis informasi akurat untuk peningkatan kinerja bisnis serta menyoroti peran SI dalam pengambilan keputusan strategis.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    meaning: "Infrastruktur Modern dan Aksesibilitas",
    description:
      "Menunjukkan bahwa himpunan selalu up-to-date dan memahami solusi infrastruktur teknologi modern yang fleksibel serta skalabel.",
  },
  {
    icon: Handshake,
    title: "Handshake (Jabat Tangan)",
    meaning: "Kolaborasi, Kemitraan, dan Bisnis",
    description:
      "Melambangkan kerja sama dan kemitraan, menegaskan peran SI sebagai penghubung krusial antara teknologi dengan kebutuhan pengguna, bisnis, dan masyarakat.",
  },
  {
    icon: Hexagon,
    title: "Honeycomb (Heksagonal)",
    meaning: "Struktur Data dan Kekuatan Organisasi",
    description:
      "Bentuk heksagonal mencerminkan struktur data yang kuat, efisien, terorganisir, serta kemampuan mengelola data kompleks dalam kolaborasi bisnis.",
  },
  {
    icon: GitBranch,
    title: "Garis Sirkuit",
    meaning: "Aliran Data dan Logika Sistem",
    description:
      "Garis yang membentuk inisial SI melambangkan alur data yang terstruktur dan logika pemrograman, menunjukkan bahwa mahasiswa SI adalah perancang sistem yang efisien.",
  },
  {
    icon: Sparkles,
    title: "Titik-titik Cahaya (Node)",
    meaning: "Data, Komunikasi, dan Potensi",
    description:
      "Titik bersinar di sepanjang sirkuit melambangkan paket data yang bergerak cepat, node jaringan, serta ide dan potensi cemerlang anggota himpunan.",
  },
];

export default function FilosofiLogoPage() {
  return (
    <main className="bg-white min-h-screen py-16 md:py-24 text-[#0D335D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header / Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-black">
            Filosofi Logo Himpunan
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Setiap garis, warna, dan elemen pada logo Himpunan Mahasiswa Sistem Informasi (HIMSI) Universitas Nusa Mandiri dirancang untuk merepresentasikan inovasi, profesionalisme, serta semangat kolaborasi digital.
          </p>
        </div>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
            Palet Warna Utama
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Navy */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-[#0D335D] border border-gray-200 mb-4 shadow-inner"></div>
              <span className="text-xs font-mono text-[#0D335D]">#0D335D</span>
              <h3 className="text-xl font-bold mt-1 mb-2 text-black">Biru Navy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Stabilitas, kepercayaan, dan profesionalisme. Warna dasar dominan yang memberi kesan otoritas, kredibilitas, dan keseriusan organisasi.
              </p>
            </div>

            {/* Cyan */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-[#0BFFFF] mb-4 shadow-[0_0_15px_rgba(11,255,255,0.35)]"></div>
              <span className="text-xs font-mono text-[#0D335D]">#0BFFFF</span>
              <h3 className="text-xl font-bold mt-1 mb-2 text-black">Cyan Elektrik</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Inovasi, digitalisasi, dan energi futuristik. Aksen dan glow pada garis sirkuit, merepresentasikan arus data, konektivitas, serta semangat progresif himpunan.
              </p>
            </div>

            {/* White */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-300 mb-4"></div>
              <span className="text-xs font-mono text-[#0D335D]">#FFFFFF</span>
              <h3 className="text-xl font-bold mt-1 mb-2 text-black">Putih Bersih</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kejelasan, efisiensi, dan kemurnian informasi. Kontras tinggi untuk teks utama agar nama himpunan mudah terbaca dan sistem terasa rapi.
              </p>
            </div>

          </div>
        </section>

        {/* Elements Grid Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-black">
            Elemen & Makna Logo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {elements.map(({ icon: Icon, title, meaning, description }) => (
              <div
                key={title}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-8"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0D335D] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#0BFFFF]" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  <strong className="text-[#0D335D]">Makna:</strong> {meaning}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}