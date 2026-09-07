"use client"

import { Sidebar } from "@/components/admin/sidebar"
import { Topbar } from "@/components/admin/topbar"
import { KMSPaymentForm } from "@/components/admin/kms-payment-form"
import { useKMS } from "@/components/admin/kms-content"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PembayaranPage() {
  const { payments, deletePayment, addPayment } = useKMS()

  const handlePaymentSubmit = (payment: any) => {
    addPayment(payment)
    alert("Pembayaran berhasil ditambahkan!")
  }

  const totalPembayaran = payments.reduce((sum, p) => sum + p.nominal, 0)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Kelola Pembayaran</h1>
              <p className="text-muted-foreground mt-2">Input data pembayaran dari anggota</p>
            </div>

            {/* Form Input */}
            <div className="max-w-2xl">
              <KMSPaymentForm onPaymentSubmit={handlePaymentSubmit} />
            </div>

            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* Summary */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Pembayaran</p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    Rp {totalPembayaran.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="text-5xl text-muted-foreground">{payments.length}</div>
              </div>
            </div>

            {/* List Pembayaran */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Daftar Pembayaran</h2>
              <div className="space-y-3">
                {payments.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">Belum ada data pembayaran</div>
                ) : (
                  payments.map((payment) => (
                    <div key={payment.id} className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{payment.nama}</p>
                          <p className="text-sm text-muted-foreground">
                            {payment.metode} • {payment.tanggal}
                          </p>
                        </div>
                        <div className="text-right mr-4">
                          <p className="font-bold text-lg text-green-600">
                            Rp {payment.nominal.toLocaleString("id-ID")}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deletePayment(payment.id)}
                          className="text-red-500 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
