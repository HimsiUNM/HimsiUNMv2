"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PaymentEntry {
  id: number
  nama: string
  nominal: number
  metode: string
  tanggal: string
}

interface KMSPaymentFormProps {
  onPaymentSubmit: (payment: Omit<PaymentEntry, "id">) => void
}

export function KMSPaymentForm({ onPaymentSubmit }: KMSPaymentFormProps) {
  const [nama, setNama] = useState("")
  const [nominal, setNominal] = useState("")
  const [metode, setMetode] = useState("")
  const [tanggal, setTanggal] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nama || !nominal || !metode || !tanggal) {
      alert("Semua field harus diisi!")
      return
    }

    onPaymentSubmit({
      nama,
      nominal: Number.parseFloat(nominal),
      metode,
      tanggal,
    })

    setNama("")
    setNominal("")
    setMetode("")
    setTanggal("")
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">Input Pembayaran</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nama">Nama Pembayar</Label>
            <Input
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama pembayar"
            />
          </div>

          <div>
            <Label htmlFor="nominal">Nominal Bayar</Label>
            <Input
              id="nominal"
              type="number"
              value={nominal}
              onChange={(e) => setNominal(e.target.value)}
              placeholder="Masukkan nominal"
            />
          </div>

          <div>
            <Label htmlFor="metode">Metode Bayar</Label>
            <Select value={metode} onValueChange={setMetode}>
              <SelectTrigger id="metode">
                <SelectValue placeholder="Pilih metode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Tunai">Tunai</SelectItem>
                <SelectItem value="Transfer Bank">Transfer Bank</SelectItem>
                <SelectItem value="E-Wallet">E-Wallet</SelectItem>
                <SelectItem value="Cheque">Cheque</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="tanggal">Tanggal Bayar</Label>
            <Input id="tanggal" type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Submit Pembayaran
        </Button>
      </form>
    </Card>
  )
}
