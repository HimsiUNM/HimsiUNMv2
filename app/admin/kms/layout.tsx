import type React from "react"
import { KMSProvider } from "@/components/admin/kms-content"

export default function KMSLayout({ children }: { children: React.ReactNode }) {
  return <KMSProvider>{children}</KMSProvider>
}
