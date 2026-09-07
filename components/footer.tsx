"use client"

import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Kegiatan", href: "#kegiatan" },
    { label: "Berita", href: "#berita" },
    { label: "Kontak", href: "#kontak" },
  ]

  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden">
                <Image
                  src="/logohimsi2.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="font-bold">HIMSI</p>
                <p className="text-xs text-gray-400">Nusa Mandiri</p>
              </div>
            </div>

            <p className="text-sm text-gray-400">
              Wadah mahasiswa Sistem Informasi untuk berkarya, belajar, dan berkontribusi.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div />
          <div />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} HIMSI Universitas Nusa Mandiri. Semua hak dilindungi.</p>
            <p>Dibuat dengan semangat kebersamaan dan inovasi.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
