"use client"

import { useState } from "react"
import {
  Crown,
  ShieldCheck,
  Fingerprint,
  Target,
  GraduationCap,
  Handshake,
  Instagram,
  Plus,
  Minus,
} from "lucide-react"

// Palet "kartu anggota": biru dongker muted + krem, kesan formal kayak ID card kantor.
const TONE = {
  paper: "#ECE6D6",
  card: "#F8F4E8",
  cardHole: "#DCD3BC",
  ink: "#1C2B3A",
  inkMuted: "#5C6E7E",
  rule: "#8FA0B3",
  accent: "#1F4E79",
  accentSoft: "rgba(31, 78, 121, 0.10)",
}

const PSDM = [
  {
    code: "PSDM/01",
    role: "Ketua divisi",
    name: "Nama Ketua",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "username",
    photo: "",
    quote: "Memimpin arah pengembangan anggota dan kaderisasi organisasi.",
    focus: ["Pengambilan keputusan", "Kaderisasi", "Koordinasi lintas divisi"],
    icon: Crown,
  },
  {
    code: "PSDM/02",
    role: "Wakil ketua",
    name: "Nama Wakil Ketua",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "username",
    photo: "",
    quote: "Mendukung ketua dan mengawal pelaksanaan program pengembangan.",
    focus: ["Eksekusi program", "Pengawasan progres", "Backup ketua"],
    icon: ShieldCheck,
  },
  {
    code: "PSDM/03",
    role: "Sekretaris",
    name: "Nama Sekretaris",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "username",
    photo: "",
    quote: "Menjaga arsip identitas, data keanggotaan, dan komunikasi resmi divisi.",
    focus: ["Arsip keanggotaan", "Surat & dokumen", "Notulensi rapat"],
    icon: Fingerprint,
  },
  {
    code: "PSDM/04",
    role: "Bendahara",
    name: "Nama Bendahara",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "username",
    photo: "",
    quote: "Mengelola kas serta memastikan pencapaian target anggaran divisi.",
    focus: ["Pengelolaan kas", "Target anggaran", "Laporan keuangan"],
    icon: Target,
  },
  {
    code: "PSDM/05",
    role: "Staff psdm",
    name: "Nama Staff 1",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "username",
    photo: "",
    quote: "Merancang dan menjalankan pelatihan untuk pengembangan anggota.",
    focus: ["Pelatihan anggota", "Modul pengembangan", "Evaluasi kompetensi"],
    icon: GraduationCap,
  },
  {
    code: "PSDM/06",
    role: "Staff psdm",
    name: "Nama Staff 2",
    tanggalLahir: "Tanggal Lahir",
    angkatan: "Angkatan",
    instagram: "username",
    photo: "",
    quote: "Menjaga keakraban dan hubungan antaranggota di dalam organisasi.",
    focus: ["Keakraban tim", "Kegiatan internal", "Pendampingan anggota"],
    icon: Handshake,
  },
]

function PhotoSlot({ member }: { member: (typeof PSDM)[0] }) {
  const initials = member.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()

  return (
    <div
      className="relative h-28 w-24 shrink-0 overflow-hidden rounded-sm"
      style={{ border: `1px solid ${TONE.rule}`, backgroundColor: TONE.cardHole }}
    >
      {member.photo ? (
        <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center text-2xl"
          style={{ fontFamily: "'Fraunces', 'Georgia', serif", color: TONE.inkMuted }}
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

function BadgeCard({ member, isOpen, onToggle }: { member: (typeof PSDM)[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-md" style={{ backgroundColor: TONE.card, border: `1px solid ${TONE.rule}` }}>
      {/* Tali gantungan */}
      <div className="flex justify-center pt-2">
        <div className="h-4 w-8 rounded-full" style={{ border: `2px solid ${TONE.rule}`, borderBottom: "none", borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }} />
      </div>

      {/* Header ala ID card */}
      <div className="flex items-center justify-between px-5 pb-2 pt-1" style={{ borderBottom: `2px solid ${TONE.accent}` }}>
        <span className="text-xs" style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", color: TONE.accent }}>
          {member.code}
        </span>
        <span className="text-xs" style={{ color: TONE.inkMuted, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}>
          PSDM
        </span>
      </div>

      <div className="flex flex-col p-5 pt-4">
        <div className="flex gap-3">
          <PhotoSlot member={member} />
          <div className="flex flex-col justify-center">
            <p className="text-sm" style={{ color: TONE.inkMuted }}>{member.role}</p>
            <h3 className="mt-1 text-xl leading-snug" style={{ fontFamily: "'Fraunces', 'Georgia', serif", fontWeight: 600, color: TONE.ink }}>
              {member.name}
            </h3>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 border-t pt-3" style={{ borderColor: `${TONE.rule}66` }}>
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
            className="ml-auto flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-sm"
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
          <span>{isOpen ? "Tutup profil" : "Lihat profil"}</span>
          {isOpen ? <Minus className="h-4 w-4" style={{ color: TONE.accent }} /> : <Plus className="h-4 w-4" style={{ color: TONE.accent }} />}
        </button>

        <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}>
          <div className="overflow-hidden">
            <p className="mt-4 text-sm leading-relaxed" style={{ color: TONE.ink }}>{member.quote}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {member.focus.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-xs rounded-sm"
                  style={{ border: `1px solid ${TONE.accent}`, color: TONE.accent, backgroundColor: TONE.accentSoft, fontFamily: "'IBM Plex Mono', ui-monospace, monospace" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Garis magnetic-stripe ala kartu ID/pegawai */}
      <div
        className="h-3 w-full"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${TONE.ink} 0px, ${TONE.ink} 2px, #00000000 2px, #00000000 5px)`,
          backgroundColor: TONE.ink,
          opacity: 0.85,
        }}
      />
    </div>
  )
}

export default function DivisiPsdmShowcase() {
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
          Tim Pengembangan SDM
        </h1>
        <p className="text-center mx-auto mt-3 max-w-xl text-base leading-relaxed" style={{ color: TONE.inkMuted }}>
          Divisi PSDM merawat pertumbuhan anggota lewat pelatihan dan kaderisasi.
          Berikut enam orang yang menjalankannya, lengkap dengan kartu profil masing-masing.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PSDM.map((member, i) => (
            <BadgeCard key={member.code} member={member} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  )
}