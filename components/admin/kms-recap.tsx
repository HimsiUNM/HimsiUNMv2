"use client"

import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PaymentEntry {
  id: number
  nama: string
  nominal: number
  metode: string
  tanggal: string
}

interface ExpenseEntry {
  id: number
  nama: string
  nominal: number
  keterangan: string
  tanggal: string
}

interface KMSRecapProps {
  payments: PaymentEntry[]
  expenses: ExpenseEntry[]
}

export function KMSRecap({ payments, expenses }: KMSRecapProps) {
  const totalPemasukan = payments.reduce((sum, p) => sum + p.nominal, 0)
  const totalPengeluaran = expenses.reduce((sum, e) => sum + e.nominal, 0)
  const saldoKas = totalPemasukan - totalPengeluaran

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Total Pemasukan</p>
          <p className="text-2xl font-bold text-green-600 mt-2">{formatCurrency(totalPemasukan)}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Total Pengeluaran</p>
          <p className="text-2xl font-bold text-red-600 mt-2">{formatCurrency(totalPengeluaran)}</p>
        </Card>
        <Card className="p-6">
          <p className="text-sm text-muted-foreground">Saldo Kas</p>
          <p className={`text-2xl font-bold mt-2 ${saldoKas >= 0 ? "text-blue-600" : "text-red-600"}`}>
            {formatCurrency(saldoKas)}
          </p>
        </Card>
      </div>

      {/* Tabs for Pemasukan and Pengeluaran */}
      <Tabs defaultValue="pemasukan" className="w-full">
        <TabsList>
          <TabsTrigger value="pemasukan">Pemasukan</TabsTrigger>
          <TabsTrigger value="pengeluaran">Pengeluaran</TabsTrigger>
        </TabsList>

        <TabsContent value="pemasukan" className="space-y-4">
          <Card>
            {payments.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Pembayar</TableHead>
                    <TableHead>Nominal</TableHead>
                    <TableHead>Metode</TableHead>
                    <TableHead>Tanggal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.nama}</TableCell>
                      <TableCell className="text-green-600 font-semibold">{formatCurrency(payment.nominal)}</TableCell>
                      <TableCell>{payment.metode}</TableCell>
                      <TableCell className="text-muted-foreground">{payment.tanggal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="p-6 text-center text-muted-foreground">Belum ada data pemasukan</div>
            )}
          </Card>
        </TabsContent>

        <TabsContent value="pengeluaran" className="space-y-4">
          <Card>
            {expenses.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Pengeluaran</TableHead>
                    <TableHead>Nominal</TableHead>
                    <TableHead>Keterangan</TableHead>
                    <TableHead>Tanggal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {expenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell className="font-medium">{expense.nama}</TableCell>
                      <TableCell className="text-red-600 font-semibold">{formatCurrency(expense.nominal)}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{expense.keterangan}</TableCell>
                      <TableCell className="text-muted-foreground">{expense.tanggal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="p-6 text-center text-muted-foreground">Belum ada data pengeluaran</div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
