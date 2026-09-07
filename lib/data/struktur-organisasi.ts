// Static data untuk halaman Struktur Organisasi HIMSI.
// Ganti nilai di bawah ini dengan data pengurus yang sebenarnya.
// Tidak menggunakan database — cukup edit array ini.
//
// `bio`, `email`, dan `instagram` bersifat opsional — kalau kosong,
// baris terkait otomatis tidak ditampilkan di popup detail.

export interface BPIPosition {
  /** Jabatan, mis. "Ketua", "Sekretaris 1" */
  position: string;
  name: string;
  image: string;
  bio?: string;
  email?: string;
  instagram?: string;
}

export interface Department {
  /** Nama departemen, mis. "Bikraf" */
  name: string;
  leader: string;
  image: string;
  description: string;
  bio?: string;
  email?: string;
  instagram?: string;
}

// Enam posisi BPI (Badan Pengurus Inti) — semuanya setara/sejajar,
// TIDAK ada relasi atasan-bawahan di antara mereka.
// Ketua ditandai `prominent: true` hanya untuk penekanan visual (card lebih besar),
// bukan berarti posisi lain berada "di bawah" Ketua secara struktural.
export const bpi: (BPIPosition & { prominent?: boolean })[] = [
  {
    position: "Ketua",
    name: "Nama Ketua",
    image: "/images/pengurus/ketua.jpg",
    prominent: true,
    bio: "Bertanggung jawab atas keseluruhan jalannya organisasi dan koordinasi antar-departemen.",
    email: "ketua@himsi.org",
    instagram: "@namaketua",
  },
  {
    position: "Wakil Ketua",
    name: "Nama Wakil Ketua",
    image: "/images/pengurus/wakil.jpg",
    bio: "Mendampingi Ketua dan mengambil alih koordinasi harian bila diperlukan.",
    email: "wakil@himsi.org",
    instagram: "@namawakilketua",
  },
  {
    position: "Sekretaris 1",
    name: "Nama Sekretaris 1",
    image: "/images/pengurus/sekretaris-1.jpg",
    bio: "Mengelola administrasi dan dokumentasi kegiatan organisasi.",
    email: "sekretaris1@himsi.org",
    instagram: "@namasekretaris1",
  },
  {
    position: "Sekretaris 2",
    name: "Nama Sekretaris 2",
    image: "/images/pengurus/sekretaris-2.jpg",
    bio: "Membantu pengelolaan surat-menyurat dan arsip organisasi.",
    email: "sekretaris2@himsi.org",
    instagram: "@namasekretaris2",
  },
  {
    position: "Bendahara 1",
    name: "Nama Bendahara 1",
    image: "/images/pengurus/bendahara-1.jpg",
    bio: "Mengelola keuangan dan anggaran seluruh program kerja organisasi.",
    email: "bendahara1@himsi.org",
    instagram: "@namabendahara1",
  },
  {
    position: "Bendahara 2",
    name: "Nama Bendahara 2",
    image: "/images/pengurus/bendahara-2.jpg",
    bio: "Membantu pencatatan dan pelaporan keuangan organisasi.",
    email: "bendahara2@himsi.org",
    instagram: "@namabendahara2",
  },
];

// Lima departemen di bawah koordinasi BPI.
export const departments: Department[] = [
  {
    name: "Bikraf",
    leader: "Nama Kepala Departemen",
    image: "/images/pengurus/bikraf.jpg",
    description: "Deskripsi singkat Departemen Bikraf.",
    bio: "Mengelola kegiatan minat, bakat, dan kreativitas anggota HIMSI.",
    email: "bikraf@himsi.org",
    instagram: "@himsi.bikraf",
  },
  {
    name: "PSDM",
    leader: "Nama Kepala Departemen",
    image: "/images/pengurus/psdm.jpg",
    description: "Deskripsi singkat Departemen PSDM.",
    bio: "Fokus pada pengembangan kualitas dan kapasitas anggota HIMSI.",
    email: "psdm@himsi.org",
    instagram: "@himsi.psdm",
  },
  {
    name: "Humas",
    leader: "Nama Kepala Departemen",
    image: "/images/pengurus/humas.jpg",
    description: "Deskripsi singkat Departemen Humas.",
    bio: "Menjalin relasi eksternal dan menangani komunikasi organisasi.",
    email: "humas@himsi.org",
    instagram: "@himsi.humas",
  },
  {
    name: "Pubdok",
    leader: "Nama Kepala Departemen",
    image: "/images/pengurus/pubdok.jpg",
    description: "Deskripsi singkat Departemen Pubdok.",
    bio: "Menangani publikasi, desain, dan dokumentasi setiap kegiatan.",
    email: "pubdok@himsi.org",
    instagram: "@himsi.pubdok",
  },
  {
    name: "Litbang",
    leader: "Nama Kepala Departemen",
    image: "/images/pengurus/litbang.jpg",
    description: "Deskripsi singkat Departemen Litbang.",
    bio: "Melakukan riset dan pengembangan program kerja organisasi.",
    email: "litbang@himsi.org",
    instagram: "@himsi.litbang",
  },
];