"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PaymentTable } from "@/components/admin/payment-table"
import { PaymentModal } from "@/components/admin/payment-modal"
import { Plus } from "lucide-react"

export default function BendaharaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Bendahara - Manajemen Pembayaran KMS</h1>
          <p className="text-muted-foreground mt-2">Kelola dan catat pembayaran KMS mahasiswa/anggota</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Input Pembayaran
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Total Terkumpul</p>
          <p className="text-2xl font-bold text-foreground mt-2">Rp 45.2M</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Sudah Bayar</p>
          <p className="text-2xl font-bold text-foreground mt-2">145 orang</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Belum Bayar</p>
          <p className="text-2xl font-bold text-destructive mt-2">23 orang</p>
        </div>
      </div>

      {/* Payment Table */}
      <PaymentTable />

      {/* Modal */}
      <PaymentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
