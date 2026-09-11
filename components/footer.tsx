"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Mail, MapPin } from "lucide-react"

const TENTANG_LINKS = [
  { label: "Sejarah HIMSI", href: "/tentang/sejarah" },
  { label: "Visi & Misi", href: "/tentang/visi-misi" },
  { label: "Filosofi Logo", href: "/tentang/filosofi-logo" },
]

const KEPENGURUSAN_LINKS = [
  { label: "Struktur Organisasi", href: "/kepengurusan/struktur-organisasi" },
  { label: "Divisi & Departemen", href: "/kepengurusan/divisi" },
  { label: "Bikraf", href: "/kepengurusan/divisi/bikraf" },
  { label: "PSDM", href: "/kepengurusan/divisi/psdm" },
  { label: "Humas", href: "/kepengurusan/divisi/humas" },
  { label: "Pubdok", href: "/kepengurusan/divisi/pubdok" },
  { label: "Litbang", href: "/kepengurusan/divisi/litbang" },
]

const LAYANAN_INFO_LINKS = [
  { label: "Kotak Aspirasi", href: "/layanan/aspirasi" },
  { label: "Pusat Bantuan (Advokasi)", href: "https://www.nusamandiri.ac.id/" },
  { label: "Berita", href: "/informasi/berita" },
  { label: "Pengumuman", href: "/informasi/pengumuman" },
  { label: "Kegiatan", href: "/informasi/kegiatan" },
  { label: "HIMSI Store", href: "https://www.instagram.com/bikraf.co/" },
]

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.77V2h-3.45v13.67a2.84 2.84 0 1 1-2.84-2.84c.3 0 .59.05.86.13V9.45a6.3 6.3 0 1 0 5.43 6.22V8.33a8.2 8.2 0 0 0 4.77 1.52V6.69z" />
  </svg>
)

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/himsi.nusamandiri/",
    icon: <Instagram size={20} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@HIMSInusamandiri",
    icon: <Youtube size={20} />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@himsinusamandiriunm",
    icon: <TikTokIcon />,
  },
]

const LINK_CLASS = "text-sm text-gray-400 hover:text-primary transition-colors"
const SOCIAL_BTN_CLASS =
  "w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground hover:shadow-lg transition-shadow"

const isExternal = (href: string) => href.startsWith("http")

function FooterLinkList({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              {...(isExternal(link.href)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={LINK_CLASS}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden">
                <Image
                  src="/logohimsi2.png"
                  alt="Logo HIMSI Nusa Mandiri"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold">HIMSI</p>
                <p className="text-xs text-gray-400">Nusa Mandiri</p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 mb-4">
              Wadah mahasiswa Sistem Informasi untuk berkarya, belajar, dan berkontribusi.
            </p>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={SOCIAL_BTN_CLASS}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <FooterLinkList title="Tentang Kami" links={TENTANG_LINKS} />

          <FooterLinkList title="Kepengurusan" links={KEPENGURUSAN_LINKS} />

          <FooterLinkList title="Layanan & Informasi" links={LAYANAN_INFO_LINKS} />

          <div id="kontak">
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gray-500" />
                <span>Universitas Nusa Mandiri, Jakarta</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Mail size={16} className="mt-0.5 shrink-0 text-gray-500" />
                <a href="mailto:himsi@nusamandiri.ac.id" className="hover:text-primary transition-colors">
                  himsi@nusamandiri.ac.id
                </a>
              </li>
            </ul>

            <Link
              href="/pendaftaran"
              className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:shadow-lg hover:brightness-110 transition-all"
            >
              Gabung Sekarang
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row gap-2 justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} HIMSI Universitas Nusa Mandiri. Semua hak dilindungi.</p>
            <p>Dibuat dengan semangat kebersamaan dan inovasi.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}