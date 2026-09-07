"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Titik kecil di setiap persimpangan garis — kesan "blueprint" bagan resmi. */
function JointDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("h-1.5 w-1.5 shrink-0 rounded-full bg-border", className)}
    />
  );
}

/**
 * Garis vertikal pendek yang menghubungkan satu node ke node/branch di
 * bawahnya, diakhiri joint dot tempat garis bertemu card berikutnya.
 */
export function StemDown({ heightClass = "h-8" }: { heightClass?: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: "top" }}
        className={`w-px ${heightClass} bg-border`}
        aria-hidden="true"
      />
      <JointDot />
    </div>
  );
}

/**
 * Label kecil yang bertindak sebagai "hub" / titik cabang pada bagan,
 * mis. "BPI" atau "Departemen". Ini BUKAN card jabatan/orang — hanya
 * penanda kelompok, supaya posisi-posisi di bawahnya terlihat sejajar
 * sebagai satu kelompok/tier, bukan bertingkat satu sama lain.
 */
export function TreeHub({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-secondary-foreground shadow-sm"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
        {label}
      </span>
    </motion.div>
  );
}

/**
 * Menyusun beberapa node sebagai children sejajar dari satu parent,
 * lengkap dengan garis horizontal (menghubungkan antar-child), joint dot
 * di setiap persimpangan, dan garis vertikal turun ke tiap card. Murni
 * CSS/flexbox sehingga tetap responsive tanpa perlu mengukur lebar via JS.
 */
export function TreeBranch({ children }: { children: ReactNode[] }) {
  const count = children.length;

  if (count === 1) {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <StemDown heightClass="h-6" />
          {children[0]}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-center">
      {children.map((child, i) => (
        <div
          key={i}
          className="relative flex flex-1 flex-col items-center px-2 sm:px-4"
        >
          {/* garis horizontal penghubung antar-sibling */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px">
            {i > 0 && (
              <span className="absolute left-0 top-0 h-px w-1/2 bg-border" />
            )}
            {i < count - 1 && (
              <span className="absolute right-0 top-0 h-px w-1/2 bg-border" />
            )}
          </div>
          {/* joint dot di persimpangan garis horizontal & vertikal */}
          <span
            className="absolute top-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-border"
            aria-hidden="true"
          />
          <StemDown heightClass="h-6" />
          {child}
        </div>
      ))}
    </div>
  );
}

/**
 * Versi vertikal untuk mobile: setiap node ditampilkan sebagai satu
 * kolom, dihubungkan garis vertikal lurus + joint dot, tanpa mencoba
 * memuat banyak kolom dalam satu baris sempit.
 */
export function VerticalStack({ children }: { children: ReactNode[] }) {
  return (
    <div className="flex flex-col items-center">
      {children.map((child, i) => (
        <div key={i} className="flex flex-col items-center">
          {i > 0 && <StemDown heightClass="h-6" />}
          {child}
        </div>
      ))}
    </div>
  );
}