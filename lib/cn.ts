// Helper kecil untuk menggabungkan className secara kondisional.
// Jika project sudah punya `cn` di `@/lib/utils` (umum di setup shadcn/ui),
// HAPUS file ini dan ganti semua `import { cn } from "@/lib/cn"` menjadi
// `import { cn } from "@/lib/utils"` di komponen-komponen organisasi.
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}