"use client"

import { useState } from "react"
import {
  Crown,
  Megaphone,
  Palette,
  CircleDollarSign,
  Lightbulb,
  ShoppingBag,
  Instagram,
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react"

interface BikrafMember {
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

// Palet "nota usaha": kertas krem pucat, tinta stempel merah bata.
const TONE = {
  paper: "#F1EAD9",
  card: "#FBF7EC",
  cardHole: "#E9DEC4",
  ink: "#2B221A",
  inkMuted: "#7A6C58",
  rule: "#C9B98E",
  accent: "#B0472C",
  accentSoft: "rgba(176, 71, 44, 0.12)",
}

const BIKRAF: BikrafMember[] = [
  {
    code: "BKF/01",
    role: "Ketua divisi",
    name: "Ayu Febriyanti",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "pisces_girl_27",
    photo: "",
    quote:
      "Memimpin arah bisnis dan ekonomi kreatif divisi, dari ide sampai eksekusi.",
    focus: ["Pengambilan keputusan", "Strategi usaha", "Koordinasi tim"],
    icon: Crown,
  },
  {
    code: "BKF/02",
    role: "Wakil ketua",
    name: "Nuraeni",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "aeenll",
    photo: "",
    quote: "Mendukung ketua dan mengawal kampanye promosi serta eksekusi penjualan.",
    focus: ["Kampanye promosi", "Pengawasan penjualan", "Backup ketua"],
    icon: Megaphone,
  },
  {
    code: "BKF/03",
    role: "Bendahara",
    name: "Athirah",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "thrumieee",
    photo: "",
    quote: "Mengelola dan melaporkan seluruh arus kas serta anggaran divisi.",
    focus: ["Pengelolaan kas", "Laporan keuangan", "Kalkulasi harga jual"],
    icon: CircleDollarSign,
  },
  {
    code: "BKF/04",
    role: "Marketing",
    name: "Syva",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "syvaalviana",
    photo: "",
    quote: "Menjaga dokumentasi, identitas visual, dan komunikasi resmi divisi.",
    focus: ["Notulensi rapat", "Identitas visual", "Arsip kegiatan"],
    icon: Palette,
  },
  {
    code: "BKF/05",
    role: "Staff bikraf",
    name: "Sisilia",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "ssiliarmdhanii_",
    photo: "",
    quote: "Mengembangkan ide produk dan peluang usaha baru bagi divisi.",
    focus: ["Riset produk", "Ide usaha", "Pengembangan konsep"],
    icon: Lightbulb,
  },
  {
    code: "BKF/06",
    role: "Staff bikraf",
    name: "Diana",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "diannaasf",
    photo: "",
    quote: "Menjalankan operasional penjualan dan menjaga hubungan dengan pembeli.",
    focus: ["Operasional jualan", "Layanan pembeli", "Promosi produk"],
    icon: ShoppingBag,
  },
  {
    code: "BKF/07",
    role: "Staff bikraf",
    name: "Ovivah",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "ovivahdwltfa",
    photo: "",
    quote: "Menjalankan operasional penjualan dan menjaga hubungan dengan pembeli.",
    focus: ["Operasional jualan", "Layanan pembeli", "Promosi produk"],
    icon: ShoppingBag,
  },
]

function PhotoSlot({ member }: { member: BikrafMember }) {
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <div
      className="relative h-28 w-24 shrink-0 overflow-hidden"
      style={{ border: `1px solid ${TONE.rule}`, backgroundColor: TONE.cardHole }}
    >
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-2xl"
          style={{
            fontFamily: "'Fraunces', 'Georgia', serif",
            color: TONE.inkMuted,
          }}
        >
          {initials}
        </div>
      )}
      <div
        className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center"
        style={{ backgroundColor: TONE.card, borderTop: `1px solid ${TONE.rule}`, borderLeft: `1px solid ${TONE.rule}` }}
      >
        <member.icon className="h-3.5 w-3.5" style={{ color: TONE.accent }} />
      </div>
    </div>
  )
}

function ReceiptCard({ member, isOpen, onToggle }: { member: BikrafMember; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="relative flex flex-col" style={{ backgroundColor: TONE.card, border: `1px solid ${TONE.rule}` }}>
      {/* Gerigi sobekan atas ala kertas nota (garis putus-putus perforasi) */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 6px 0px, ${TONE.paper} 4px, transparent 4.5px)`,
          backgroundSize: "12px 8px",
          backgroundPosition: "top",
        }}
      />

      <div className="flex flex-col p-5">
        <div className="mb-3 flex items-center justify-between">
          <span
            className="text-xs"
            style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", color: TONE.accent }}
          >
            No. {member.code}
          </span>
          <span
            className="px-2 py-0.5 text-[10px]"
            style={{
              border: `1.5px solid ${TONE.accent}`,
              color: TONE.accent,
              transform: "rotate(-6deg)",
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              letterSpacing: "0.05em",
            }}
          >
            LUNAS
          </span>
        </div>

        <div className="flex gap-3">
          <PhotoSlot member={member} />
          <div className="flex flex-col justify-center">
            <p className="text-sm" style={{ color: TONE.inkMuted }}>{member.role}</p>
            <h3
              className="mt-1 text-xl leading-snug"
              style={{ fontFamily: "'Fraunces', 'Georgia', serif", fontWeight: 600, color: TONE.ink }}
            >
              {member.name}
            </h3>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-dashed pt-3" style={{ borderColor: TONE.rule }}>
          <div>
            <p className="text-[11px]" style={{ color: TONE.inkMuted, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
              Tanggal Lahir
            </p>
            <p className="text-sm" style={{ color: TONE.ink }}>{member.tanggalLahir}</p>
          </div>
          <div>
            <p className="text-[11px]" style={{ color: TONE.inkMuted, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
              Angkatan
            </p>
            <p className="text-sm" style={{ color: TONE.ink }}>{member.angkatan}</p>
          </div>
          <a
            href={`https://instagram.com/${member.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="ml-auto flex items-center gap-1.5 px-2.5 py-1 text-xs"
            style={{
              border: `1px solid ${TONE.accent}`,
              color: TONE.accent,
              backgroundColor: TONE.accentSoft,
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
            }}
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
          <span>{isOpen ? "Tutup nota" : "Rincian tugas"}</span>
          {isOpen ? <Minus className="h-4 w-4" style={{ color: TONE.accent }} /> : <Plus className="h-4 w-4" style={{ color: TONE.accent }} />}
        </button>

        <div
          className="grid transition-all duration-300 ease-out"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
        >
          <div className="overflow-hidden">
            <p className="mt-4 text-sm leading-relaxed" style={{ color: TONE.ink }}>{member.quote}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.focus.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs"
                  style={{
                    border: `1px solid ${TONE.accent}`,
                    color: TONE.accent,
                    backgroundColor: TONE.accentSoft,
                    fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gerigi sobekan bawah */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage: `radial-gradient(circle at 6px 8px, ${TONE.paper} 4px, transparent 4.5px)`,
          backgroundSize: "12px 8px",
          backgroundPosition: "bottom",
        }}
      />
    </div>
  )
}

export default function DivisiBikrafShowcase() {
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
        <h1
          className="text-center text-4xl md:text-5xl"
          style={{ fontFamily: "'Fraunces', 'Georgia', serif", fontWeight: 600, color: TONE.ink }}
        >
          Tim Bisnis & Ekonomi Kreatif
        </h1>
        <p className="text-center mx-auto mt-3 max-w-xl text-base leading-relaxed" style={{ color: TONE.inkMuted }}>
          Divisi Bikraf menjalankan roda usaha dan ide kreatif organisasi. Berikut
          para anggota yang mengelolanya, lengkap dengan rincian tugas masing-masing.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BIKRAF.map((member, i) => (
            <ReceiptCard key={member.code} member={member} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}