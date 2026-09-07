"use client"

import { Sidebar } from "@/components/admin/sidebar"
import { TopBar } from "@/components/admin/topbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, Download, Eye } from "lucide-react"
import { useState } from "react"

interface Pendaftaran {
  id: string
  nama: string
  email: string
  noTelepon: string
  tglDaftar: string
}

const dummyPendaftaran: Pendaftaran[] = [
  {
    id: "1",
    nama: "Ahmad Rahman",
    email: "ahmad@example.com",
    noTelepon: "08123456789",
    tglDaftar: "2025-01-15",
  },
  {
    id: "2",
    nama: "Siti Nurhaliza",
    email: "siti@example.com",
    noTelepon: "08198765432",
    tglDaftar: "2025-01-14",
  },
  {
    id: "3",
    nama: "Budi Santoso",
    email: "budi@example.com",
    noTelepon: "08134567890",
    tglDaftar: "2025-01-13",
  },
  {
    id: "4",
    nama: "Rina Wijaya",
    email: "rina@example.com",
    noTelepon: "08156789012",
    tglDaftar: "2025-01-12",
  },
  {
    id: "5",
    nama: "Dwi Hermawan",
    email: "dwi@example.com",
    noTelepon: "08167890123",
    tglDaftar: "2025-01-11",
  },
]

export default function PendaftaranPage() {
  const [registrations, setRegistrations] = useState(dummyPendaftaran)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleDelete = (id: string) => {
    setRegistrations(registrations.filter((r) => r.id !== id))
  }

  const handleApprove = (id: string) => {
    setRegistrations(registrations.map((r) => (r.id === id ? { ...r, status: "approved" } : r)))
  }

  const handleReject = (id: string) => {
    setRegistrations(registrations.map((r) => (r.id === id ? { ...r, status: "rejected" } : r)))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Pendaftaran</h1>
                <p className="text-muted-foreground mt-2">Kelola semua pendaftaran pengguna baru</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">{registrations.length}</div>
                    <div className="text-sm text-muted-foreground">Total Pendaftaran</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Table */}
            <Card>
              <CardHeader>
                <CardTitle>Daftar Pendaftaran</CardTitle>
                <CardDescription>Total {registrations.length} pendaftaran terdaftar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Nama</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Telepon</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Tgl Daftar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {registrations.map((reg) => (
                        <tr key={reg.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="py-3 px-4 text-foreground">{reg.nama}</td>
                          <td className="py-3 px-4 text-muted-foreground">{reg.email}</td>
                          <td className="py-3 px-4 text-muted-foreground">{reg.noTelepon}</td>
                          <td className="py-3 px-4 text-muted-foreground">{reg.tglDaftar}</td>
                          <td className="py-3 px-4">
                            
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <Button size="sm" variant="ghost" onClick={() => handleDelete(reg.id)}>
                                <Trash2 className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="ghost" onClick={() => setSelectedId(reg.id)}>
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}
