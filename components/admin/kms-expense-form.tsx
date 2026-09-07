"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ExpenseEntry {
  id: number
  nama: string
  nominal: number
  keterangan: string
  tanggal: string
}

interface KMSExpenseFormProps {
  onExpenseSubmit: (expense: Omit<ExpenseEntry, "id">) => void
}

export function KMSExpenseForm({ onExpenseSubmit }: KMSExpenseFormProps) {
  const [nama, setNama] = useState("")
  const [nominal, setNominal] = useState("")
  const [keterangan, setKeterangan] = useState("")
  const [tanggal, setTanggal] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nama || !nominal || !keterangan || !tanggal) {
      alert("Semua field harus diisi!")
      return
    }

    onExpenseSubmit({
      nama,
      nominal: Number.parseFloat(nominal),
      keterangan,
      tanggal,
    })

    setNama("")
    setNominal("")
    setKeterangan("")
    setTanggal("")
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Input Pengeluaran</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nama">Nama Pengeluaran</Label>
            <Input
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Contoh: Utility, Supplies, dll"
            />
          </div>

          <div>
            <Label htmlFor="nominal">Nominal Pengeluaran</Label>
            <Input
              id="nominal"
              type="number"
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              placeholder="Masukkan nominal"
            />
          </div>

          <div className="md:col-span-2">
            <Label htmlFor="keterangan">Keterangan</Label>
            <Textarea
              id="keterangan"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              placeholder="Masukkan keterangan pengeluaran"
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="tanggal">Tanggal Pengeluaran</Label>
            <Input id="tanggal" type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Submit Pengeluaran
        </Button>
      </form>
    </Card>
  )
}
