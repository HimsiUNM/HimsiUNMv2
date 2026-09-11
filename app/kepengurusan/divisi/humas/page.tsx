"use client"

import { useState } from "react"
import {
  Crown,
  Megaphone,
  MessageCircle,
  Handshake,
  Mic,
  Globe2,
  Instagram,
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react"

interface HumasMember {
  code: string
  role: string
  name: string
  tanggalLahir: string
  angkatan: string
  instagram: string
  photo: string
  quote: string
  focus: string[]
  icon: LucideIcon
}

// Palet "kliping koran": putih kekuningan, tinta hitam pekat, aksen merah press.
const TONE = {
  paper: "#EDE9E0",
  card: "#F8F6EF",
  cardHole: "#DAD5C7",
  ink: "#1A1A18",
  inkMuted: "#6B6862",
  rule: "#A8A392",
  accent: "#A62525",
  accentSoft: "rgba(166, 37, 37, 0.10)",
}

const HUMAS: HumasMember[] = [
  {
    code: "HMS/01",
    role: "Ketua divisi",
    name: "Karlos Nanriano S",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "karlosns_",
    photo: "",
    quote: "Memimpin arah komunikasi dan hubungan organisasi dengan pihak luar.",
    focus: ["Pengambilan keputusan", "Relasi eksternal", "Koordinasi lintas divisi"],
    icon: Crown,
  },
  {
    code: "HMS/02",
    role: "Wakil ketua",
    name: "M. Bagas Yudi P",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "mbgsyup",
    photo: "",
    quote: "Mendukung ketua dan mengawal kampanye komunikasi serta promosi kegiatan.",
    focus: ["Kampanye komunikasi", "Pengawasan promosi", "Backup ketua"],
    icon: Megaphone,
  },
  {
    code: "HMS/03",
    role: "Sekretaris",
    name: "Muhammad Ghiass Assabiq",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "mhdghiass",
    photo: "",
    quote: "Menjaga korespondensi, notulensi, dan dokumentasi resmi divisi.",
    focus: ["Notulensi rapat", "Korespondensi", "Arsip kegiatan"],
    icon: MessageCircle,
  },
  {
    code: "HMS/04",
    role: "Bendahara",
    name: "Naziah Halwah R",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "naziahalwaa",
    photo: "",
    quote: "Mengelola kas divisi serta menjalin kerja sama dengan sponsor dan mitra.",
    focus: ["Pengelolaan kas", "Kerja sama sponsor", "Laporan keuangan"],
    icon: Handshake,
  },
  {
    code: "HMS/05",
    role: "Staff humas",
    name: "Ashqal Ilham Syafatullah",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "ashqalilham",
    photo: "",
    quote: "Menjadi juru bicara dan penghubung media dalam berbagai kegiatan.",
    focus: ["Relasi media", "MC & juru bicara", "Undangan & kerja sama"],
    icon: Mic,
  },
  {
    code: "HMS/06",
    role: "Staff humas",
    name: "Satria Shobbah Falah",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "shbbhflh_",
    photo: "",
    quote: "Menyebarluaskan informasi organisasi ke publik secara luas.",
    focus: ["Penyebaran informasi", "Media sosial", "Jaringan publik"],
    icon: Globe2,
  },
  {
    code: "HMS/07",
    role: "Staff humas",
    name: "Farel Gustavito Rambe Anak Raja",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "farel_gustavito",
    photo: "",
    quote: "Menyebarluaskan informasi organisasi ke publik secara luas.",
    focus: ["Penyebaran informasi", "Media sosial", "Jaringan publik"],
    icon: Globe2,
  },
]

function PhotoSlot({ member }: { member: HumasMember }) {
  const initials = member.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()

  return (
    <div className="relative h-28 w-24 shrink-0 overflow-hidden" style={{ border: `1px solid ${TONE.ink}`, backgroundColor: TONE.cardHole }}>
      {member.photo ? (
        <img src={member.photo} alt={member.name} className="h-full w-full object-cover grayscale" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-2xl" style={{ fontFamily: "'Fraunces', 'Georgia', serif", color: TONE.inkMuted }}>
          {initials}
        </div>
      )}
      <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center" style={{ backgroundColor: TONE.card, borderTop: `1px solid ${TONE.ink}`, borderLeft: `1px solid ${TONE.ink}` }}>
        <member.icon className="h-3.5 w-3.5" style={{ color: TONE.accent }} />
      </div>
    </div>
  )
}

// Strip zigzag ala pinggiran koran yang disobek/digunting
function TornEdge({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className="h-2 w-full"
      style={{
        backgroundImage: `linear-gradient(135deg, ${TONE.paper} 50%, transparent 50%), linear-gradient(-135deg, ${TONE.paper} 50%, transparent 50%)`,
        backgroundSize: "10px 10px",
        backgroundPosition: flip ? "bottom" : "top",
        backgroundRepeat: "repeat-x",
        transform: flip ? "rotate(180deg)" : undefined,
      }}
    />
  )
}

function ClippingCard({ member, isOpen, onToggle }: { member: HumasMember; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="flex flex-col" style={{ backgroundColor: TONE.card, border: `1px solid ${TONE.ink}` }}>
      <TornEdge />

      <div className="flex flex-col p-5">
        {/* Header ala headline koran, dengan garis kolom di bawahnya */}
        <div className="mb-1 flex items-center justify-between border-b-2 pb-2" style={{ borderColor: TONE.ink }}>
          <span className="text-xs" style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", color: TONE.accent }}>
            {member.code}
          </span>
          <span className="text-[10px] uppercase tracking-wide" style={{ color: TONE.inkMuted, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
            Divisi Humas
          </span>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          <div className="h-px" style={{ backgroundColor: `${TONE.rule}88` }} />
          <div className="h-px" style={{ backgroundColor: `${TONE.rule}88` }} />
          <div className="h-px" style={{ backgroundColor: `${TONE.rule}88` }} />
        </div>

        <div className="flex gap-3">
          <PhotoSlot member={member} />
          <div className="flex flex-col justify-center">
            <p className="text-sm" style={{ color: TONE.inkMuted }}>{member.role}</p>
            <h3 className="mt-1 text-xl leading-snug" style={{ fontFamily: "'Fraunces', 'Georgia', serif", fontWeight: 600, color: TONE.ink }}>
              {member.name}
            </h3>
          </div>
        </div>

        {/* Baris info: flex-nowrap supaya badge Instagram tetap sejajar horizontal,
            tidak turun ke bawah walau kartu sempit. Grup tanggal+angkatan yang
            menyusut/truncate duluan kalau ruang kurang. */}
        <div className="mt-4 flex flex-nowrap items-center gap-3 border-t pt-3" style={{ borderColor: `${TONE.rule}` }}>
          <div className="flex min-w-0 flex-1 gap-4 overflow-hidden">
            <div className="min-w-0">
              <p className="whitespace-nowrap text-[11px]" style={{ color: TONE.inkMuted, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
                Tanggal Lahir
              </p>
              <p className="truncate text-sm" style={{ color: TONE.ink }}>{member.tanggalLahir}</p>
            </div>
            <div className="min-w-0">
              <p className="whitespace-nowrap text-[11px]" style={{ color: TONE.inkMuted, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
                Angkatan
              </p>
              <p className="truncate text-sm" style={{ color: TONE.ink }}>{member.angkatan}</p>
            </div>
          </div>
          <a
            href={`https://instagram.com/${member.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-1.5 px-2.5 py-1 text-xs"
            style={{ border: `1px solid ${TONE.accent}`, color: TONE.accent, backgroundColor: TONE.accentSoft, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
          >
            <Instagram className="h-3.5 w-3.5" />
            @{member.instagram}
          </a>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="mt-4 flex items-center justify-between gap-2 pt-3 text-sm"
          style={{ borderTop: `1px dashed ${TONE.rule}`, color: TONE.ink, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
        >
          <span>{isOpen ? "Tutup kliping" : "Baca kliping"}</span>
          {isOpen ? <Minus className="h-4 w-4" style={{ color: TONE.accent }} /> : <Plus className="h-4 w-4" style={{ color: TONE.accent }} />}
        </button>

        <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}>
          <div className="overflow-hidden">
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: TONE.ink, columns: 2, columnGap: "1rem", columnRule: `1px solid ${TONE.rule}` }}
            >
              {member.quote}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.focus.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs"
                  style={{ border: `1px solid ${TONE.accent}`, color: TONE.accent, backgroundColor: TONE.accentSoft, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TornEdge flip />
    </div>
  )
}

export default function DivisiHumasShowcase() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section
      className="w-full px-6 py-16 md:px-12 md:py-24"
      style={{
        backgroundColor: TONE.paper,
        backgroundImage: `linear-gradient(${TONE.rule}22 1px, transparent 1px), linear-gradient(90deg, ${TONE.rule}22 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-4xl md:text-5xl" style={{ fontFamily: "'Fraunces', 'Georgia', serif", fontWeight: 600, color: TONE.ink }}>
          Tim Hubungan Masyarakat
        </h1>
        <p className="text-center mx-auto mt-3 max-w-xl text-base leading-relaxed" style={{ color: TONE.inkMuted }}>
          Divisi Humas menjaga komunikasi organisasi dengan dunia luar. Berikut
          para anggota yang menjalankannya, lengkap dengan kliping tugas masing-masing.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HUMAS.map((member, i) => (
            <ClippingCard key={member.code} member={member} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}