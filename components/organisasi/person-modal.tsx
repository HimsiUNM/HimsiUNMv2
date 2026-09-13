"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Avatar } from "./avatar";

export interface PersonDetail {
  /** Nama orang, mis. "Nama Ketua" */
  name: string;
  /** Jabatan, mis. "Ketua" atau "Kepala Departemen Bikraf" */
  role: string;
  /** Label grup kecil di atas jabatan, mis. "BPI" atau "Bikraf" */
  group?: string;
  image: string;
  bio?: string;
  instagram?: string;
  instagramUrl?: string;
  /** Angkatan, mis. "2022" */
  angkatan?: string;
  /** Tanggal lahir, mis. "1 Januari 2004" */
  tanggalLahir?: string;
}

interface PersonModalProps {
  person: PersonDetail | null;
  onClose: () => void;
}

interface DetailRowProps {
  label: string;
  value: string;
  href?: string;
}

function DetailRow({ label, value, href }: DetailRowProps) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="truncate text-card-foreground hover:text-primary hover:underline"
        >
          {value}
        </a>
      ) : (
        <span className="truncate text-card-foreground">{value}</span>
      )}
    </div>
  );
}

export function PersonModal({ person, onClose }: PersonModalProps) {
  // Tutup dengan tombol Escape
  useEffect(() => {
    if (!person) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [person, onClose]);

  // Cegah scroll di belakang modal saat terbuka
  useEffect(() => {
    if (!person) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [person]);

  const hasDetails =
    !!person?.angkatan || !!person?.tanggalLahir || !!person?.instagram;

  return (
    <AnimatePresence>
      {person && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="person-modal-title"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="flex flex-col items-center text-center">
              <Avatar src={person.image} alt={person.name} size="lg" accent />

              {person.group && (
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                  {person.group}
                </p>
              )}
              <h2
                id="person-modal-title"
                className="mt-1 text-lg font-bold text-foreground"
              >
                {person.role}
              </h2>
              <p className="mt-0.5 text-sm text-muted-foreground">{person.name}</p>

              {person.bio && (
                <p className="mt-4 text-sm leading-relaxed text-card-foreground">
                  {person.bio}
                </p>
              )}

              {hasDetails && (
                <div className="mt-5 w-full space-y-2 border-t border-border pt-4 text-left text-sm">
                  {person.angkatan && (
                    <DetailRow label="Angkatan" value={person.angkatan} />
                  )}
                  {person.tanggalLahir && (
                    <DetailRow label="Tanggal Lahir" value={person.tanggalLahir} />
                  )}
                  {person.instagram && (
                    <DetailRow
                      label="Instagram"
                      value={person.instagram}
                      href={person.instagramUrl}
                    />
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}