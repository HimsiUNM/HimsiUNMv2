"use client"

import { Sidebar } from "@/components/admin/sidebar"
import { Topbar } from "@/components/admin/topbar"
import { useKMS } from "@/components/admin/kms-content"

export default function RekapPemasukanPage() {
  const { payments } = useKMS()

  const totalPemasukan = payments.reduce((sum, p) => sum + p.nominal, 0)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Rekap Pemasukan</h1>
              <p className="text-muted-foreground mt-2">Laporan pemasukan total dari anggota</p>
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-8">
              <p className="text-green-700 text-sm font-semibold">TOTAL PEMASUKAN</p>
              <p className="text-4xl font-bold text-green-900 mt-3">Rp {totalPemasukan.toLocaleString("id-ID")}</p>
              <p className="text-green-700 text-sm mt-3">{payments.length} transaksi pemasukan</p>
            </div>

            {/* Breakdown */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Detail Pemasukan</h2>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 gap-4 bg-muted p-4 font-semibold text-foreground">
                  <div>Tanggal</div>
                  <div>Nama Pembayar</div>
                  <div>Metode</div>
                  <div className="text-right">Nominal</div>
                  <div className="text-right">Persentase</div>
                </div>
                <div className="divide-y divide-border">
                  {payments.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">Belum ada data pemasukan</div>
                  ) : (
                    payments.map((payment) => {
                      const percentage = ((payment.nominal / totalPemasukan) * 100).toFixed(1)
                      return (
                        <div key={payment.id} className="grid grid-cols-5 gap-4 p-4 hover:bg-muted">
                          <div className="text-foreground">{payment.tanggal}</div>
                          <div className="text-foreground font-medium">{payment.nama}</div>
                          <div className="text-muted-foreground text-sm">{payment.metode}</div>
                          <div className="text-right font-semibold text-green-600">
                            Rp {payment.nominal.toLocaleString("id-ID")}
                          </div>
                          <div className="text-right text-muted-foreground">{percentage}%</div>
                        </div>
                      )
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
