"use client";

import { motion } from "framer-motion";

export function PageHeader() {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="inline-flex items-center gap-2"
      >
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
        className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
      >
        Struktur Organisasi
      </motion.h1>

      {/* aksen garis kecil — signature element halaman ini */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
        className="mx-auto mt-4 h-px w-16 bg-primary"
        aria-hidden="true"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
        className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base"
      >
        Mengenal struktur kepengurusan HIMSI dan susunan pengurus yang
        menjalankan setiap program kerja organisasi.
      </motion.p>
    </div>
  );
}