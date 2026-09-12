"use client"

import { useState } from "react"
import {
  Crown,
  ShieldCheck,
  NotebookPen,
  Wallet,
  FlaskConical,
  ClipboardList,
  Instagram,
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react"

interface LitbangMember {
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

// Palet "buku catatan riset": kertas hangat, tinta gelap, satu aksen ochre.
const TONE = {
  paper: "#ECE7D6",
  card: "#F7F3E6",
  cardHole: "#DCD5BE",
  ink: "#242B20",
  inkMuted: "#6C7264",
  rule: "#9AA396",
  accent: "#B9841B",
  accentSoft: "rgba(185, 132, 27, 0.13)",
}

const MONO = "'IBM Plex Mono', ui-monospace, monospace"
const SERIF = "'Fraunces', 'Georgia', serif"

// Ganti `photo` dengan URL foto masing-masing orang kalau sudah ada.
// Kalau `photo` kosong, kartu otomatis menampilkan slot foto berisi inisial.
const LITBANG: LitbangMember[] = [
  {
    code: "LTB/01",
    role: "Ketua divisi",
    name: "Rizqi Fauzi",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "rizqifau__",
    photo: "",
    quote:
      "Memimpin arah riset, strategi, dan koordinasi seluruh program kerja divisi.",
    focus: ["Pengambilan keputusan", "Koordinasi lintas divisi", "Strategi riset"],
    icon: Crown,
  },
  {
    code: "LTB/02",
    role: "Wakil ketua",
    name: "Zaaxy Aidil Pikri",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "zxxy.in",
    photo: "",
    quote: "Mendukung ketua dan turun tangan langsung mengawal eksekusi program.",
    focus: ["Eksekusi program", "Pengawasan progres", "Backup ketua"],
    icon: ShieldCheck,
  },
  {
    code: "LTB/03",
    role: "Sekretaris",
    name: "Mariq Akbar Prayitno",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "mariq_akbr",
    photo: "",
    quote: "Menjaga alur administrasi, dokumentasi, dan komunikasi resmi divisi.",
    focus: ["Notulensi rapat", "Surat & dokumen", "Arsip kegiatan"],
    icon: NotebookPen,
  },
  {
    code: "LTB/04",
    role: "Bendahara",
    name: "Sabrina Kartika",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "iluvcat9",
    photo: "",
    quote: "Mengelola dan melaporkan seluruh arus kas serta anggaran divisi.",
    focus: ["Pengelolaan kas", "Laporan keuangan", "Anggaran kegiatan"],
    icon: Wallet,
  },
  {
    code: "LTB/05",
    role: "Staff litbang",
    name: "Khoirul Mustaqim",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "k_4kim",
    photo: "",
    quote: "Membantu menjalankan riset, uji coba, dan dokumentasi hasil kerja divisi.",
    focus: ["Uji coba program", "Dokumentasi hasil", "Kolaborasi tim"],
    icon: FlaskConical,
  },
  {
    code: "LTB/06",
    role: "Staff litbang",
    name: "Kurnia Rizqi Cipta Saputra",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "kurniarizqi_cs",
    photo: "",
    quote: "Membantu menjalankan riset, uji coba, dan dokumentasi hasil kerja divisi.",
    focus: ["Uji coba program", "Dokumentasi hasil", "Kolaborasi tim"],
    icon: ClipboardList,
  },
]

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

function PhotoSlot({ member }: { member: LitbangMember }) {
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
          style={{ fontFamily: SERIF, color: TONE.inkMuted }}
        >
          {getInitials(member.name)}
        </div>
      )}
      <div
        className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center"
        style={{ backgroundColor: TONE.card, borderTop: `1px solid ${TONE.rule}`, borderLeft: `1px solid ${TONE.rule}` }}
      >
        <member.icon className="h-3.5 w-3.5" style={{ color: TONE.accent }} aria-hidden="true" />
      </div>
    </div>
  )
}

function LedgerCard({ member, isOpen, onToggle }: { member: LitbangMember; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="flex flex-col overflow-hidden transition-colors duration-200"
      style={{ backgroundColor: TONE.card, border: `1px solid ${isOpen ? TONE.accent : TONE.rule}` }}
    >
      {/* Kolom lubang pembatas dipindah ke ATAS ala buku catatan spiral/top-bound */}
      <div
        className="flex h-8 w-full shrink-0 flex-row items-center justify-evenly px-4"
        style={{ borderBottom: `1px dashed ${TONE.rule}` }}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((h) => (
          <span
            key={h}
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: TONE.cardHole, boxShadow: "inset 0 1px 2px rgba(0,0,0,0.25)" }}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col p-5 relative">
        <div className="mb-4 flex gap-4">
          <PhotoSlot member={member} />
          <div className="flex flex-col justify-center">
            <span className="text-xs" style={{ fontFamily: MONO, color: TONE.accent }}>
              {member.code}
            </span>
            <p className="mt-1 text-sm" style={{ color: TONE.inkMuted }}>
              {member.role}
            </p>
            <h3 className="mt-1 text-xl leading-snug" style={{ fontFamily: SERIF, fontWeight: 600, color: TONE.ink }}>
              {member.name}
            </h3>
          </div>
        </div>

        {/* flex-row (nowrap default) + grup tanggal/angkatan diberi min-w-0 & flex-1
            supaya dia yang menyusut/truncate duluan, bukan mendorong badge
            Instagram sampai overflow keluar kartu. */}
        <div className="flex flex-row flex-nowrap items-center gap-2 border-t pt-3" style={{ borderColor: `${TONE.rule}55` }}>
          <div className="flex min-w-0 flex-1 gap-4 overflow-hidden">
            <div className="min-w-0">
              <p className="whitespace-nowrap text-[11px]" style={{ color: TONE.inkMuted, fontFamily: MONO }}>
                Tanggal Lahir
              </p>
              <p className="text-sm truncate" style={{ color: TONE.ink }}>{member.tanggalLahir}</p>
            </div>
            <div className="min-w-0">
              <p className="whitespace-nowrap text-[11px]" style={{ color: TONE.inkMuted, fontFamily: MONO }}>
                Angkatan
              </p>
              <p className="text-sm truncate" style={{ color: TONE.ink }}>{member.angkatan}</p>
            </div>
          </div>

          <a
            href={`https://instagram.com/${member.instagram}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`Instagram ${member.name}`}
            className="ml-auto flex shrink-0 items-center gap-1.5 px-2.5 py-1 text-xs transition-colors hover:opacity-80"
            style={{ border: `1px solid ${TONE.accent}`, color: TONE.accent, backgroundColor: TONE.accentSoft, fontFamily: MONO }}
          >
            <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
            @{member.instagram}
          </a>
        </div>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="mt-4 flex w-full items-center justify-between gap-2 pt-3 text-sm transition-colors"
          style={{ borderTop: `1px dashed ${TONE.rule}`, color: TONE.ink, fontFamily: MONO }}
        >
          <span>{isOpen ? "Tutup berkas" : "Buka berkas"}</span>
          {isOpen ? (
            <Minus className="h-4 w-4" style={{ color: TONE.accent }} aria-hidden="true" />
          ) : (
            <Plus className="h-4 w-4" style={{ color: TONE.accent }} aria-hidden="true" />
          )}
        </button>

        <div
          className="grid transition-all duration-300 ease-out"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
        >
          <div className="overflow-hidden">
            <p className="mt-4 text-sm leading-relaxed" style={{ color: TONE.ink }}>
              {member.quote}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.focus.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs"
                  style={{ border: `1px solid ${TONE.accent}`, color: TONE.accent, backgroundColor: TONE.accentSoft, fontFamily: MONO }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DivisiLitbangShowcase() {
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
          style={{ fontFamily: SERIF, fontWeight: 600, color: TONE.ink }}
        >
          Tim Riset & Pengembangan
        </h1>
        <p className="text-center mx-auto mt-3 max-w-xl text-base leading-relaxed" style={{ color: TONE.inkMuted }}>
          Divisi Litbang menjaga arah riset dan eksekusi program kerja. Berikut
          para anggota yang menjalankannya, lengkap dengan berkas tugas masing-masing.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LITBANG.map((member, i) => (
            <LedgerCard
              key={member.code}
              member={member}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}