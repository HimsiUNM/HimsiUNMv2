"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const paymentData = [
  { id: 1, name: "Ahmad Wijaya", nim: "2021001", nominal: "Rp 500.000", date: "2024-01-15", status: "Sudah Bayar" },
  { id: 2, name: "Budi Santoso", nim: "2021002", nominal: "Rp 500.000", date: "2024-01-14", status: "Sudah Bayar" },
  { id: 3, name: "Citra Dewi", nim: "2021003", nominal: "-", date: "-", status: "Belum Bayar" },
  { id: 4, name: "Dian Pratama", nim: "2021004", nominal: "Rp 500.000", date: "2024-01-12", status: "Sudah Bayar" },
  { id: 5, name: "Eka Putri", nim: "2021005", nominal: "-", date: "-", status: "Belum Bayar" },
]

export function PaymentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(paymentData.length / itemsPerPage)

  const startIdx = (currentPage - 1) * itemsPerPage
  const displayData = paymentData.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="space-y-4">
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama</TableHead>
              <TableHead>NIM</TableHead>
              <TableHead>Nominal</TableHead>
              <TableHead>Tanggal Bayar</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.nim}</TableCell>
                <TableCell>{item.nominal}</TableCell>
                <TableCell className="text-muted-foreground">{item.date}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Sudah Bayar" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
