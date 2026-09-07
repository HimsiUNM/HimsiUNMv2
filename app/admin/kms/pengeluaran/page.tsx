"use client"

import { Sidebar } from "@/components/admin/sidebar"
import { Topbar } from "@/components/admin/topbar"
import { KMSExpenseForm } from "@/components/admin/kms-expense-form"
import { useKMS } from "@/components/admin/kms-content"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PengeluaranPage() {
  const { expenses, deleteExpense, addExpense } = useKMS()

  const handleExpenseSubmit = (expense: any) => {
    addExpense(expense)
    alert("Pengeluaran berhasil ditambahkan!")
  }

  const totalPengeluaran = expenses.reduce((sum, e) => sum + e.nominal, 0)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Kelola Pengeluaran</h1>
              <p className="text-muted-foreground mt-2">Input data pengeluaran kas</p>
            </div>

            {/* Form Input */}
            <div className="max-w-2xl">
              <KMSExpenseForm onExpenseSubmit={handleExpenseSubmit} />
            </div>

            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* Summary */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Pengeluaran</p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    Rp {totalPengeluaran.toLocaleString("id-ID")}
                  </p>
                </div>
                <div className="text-5xl text-muted-foreground">{expenses.length}</div>
              </div>
            </div>

            {/* List Pengeluaran */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Daftar Pengeluaran</h2>
              <div className="space-y-3">
                {expenses.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">Belum ada data pengeluaran</div>
                ) : (
                  expenses.map((expense) => (
                    <div key={expense.id} className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{expense.nama}</p>
                          <p className="text-sm text-muted-foreground">{expense.keterangan}</p>
                          <p className="text-xs text-muted-foreground mt-1">{expense.tanggal}</p>
                        </div>
                        <div className="text-right mr-4">
                          <p className="font-bold text-lg text-red-600">
                            -Rp {expense.nominal.toLocaleString("id-ID")}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteExpense(expense.id)}
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
