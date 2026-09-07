"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Input Pembayaran</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Nama</label>
            <Input placeholder="Enter name" />
          </div>

          {/* NIM/ID */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">NIM / ID</label>
            <Input placeholder="Enter NIM or ID" />
          </div>

          {/* Nominal */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Nominal</label>
            <Input placeholder="Rp" />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Status Pembayaran</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paid">Sudah Bayar</SelectItem>
                <SelectItem value="unpaid">Belum Bayar</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Simpan</Button>
        </div>
      </div>
    </div>
  )
}
