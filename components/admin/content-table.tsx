"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react"

const contentData = [
  { id: 1, title: "Panduan Penggunaan Aplikasi", category: "Tutorial", date: "2024-01-15", status: "Published" },
  { id: 2, title: "Berita Update Sistem", category: "News", date: "2024-01-14", status: "Published" },
  { id: 3, title: "FAQ Pembayaran KMS", category: "Help", date: "2024-01-13", status: "Draft" },
  { id: 4, title: "Kebijakan Privasi", category: "Policy", date: "2024-01-12", status: "Published" },
  { id: 5, title: "Panduan Verifikasi Akun", category: "Tutorial", date: "2024-01-11", status: "Published" },
  { id: 6, title: "Maintenance Schedule", category: "Announcement", date: "2024-01-10", status: "Draft" },
]

export function ContentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(contentData.length / itemsPerPage)

  const startIdx = (currentPage - 1) * itemsPerPage
  const displayData = contentData.slice(startIdx, startIdx + itemsPerPage)

  return (
    <div className="space-y-4">
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-muted-foreground">{item.date}</TableCell>
                <TableCell>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === "Published" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1 text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </div>
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
