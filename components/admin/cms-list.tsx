"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react"
import { CMSCrudModal } from "./cms-crud-model"

interface CMSContent {
  id: number
  title: string
  category: string
  description: string
  body: string
  status: "Published" | "Draft"
  date: string
}

interface CMSListProps {
  initialData?: CMSContent[]
}

export function CMSList({ initialData }: CMSListProps) {
  const [contentList, setContentList] = useState<CMSContent[]>(
    initialData || [
      {
        id: 1,
        title: "Panduan Penggunaan Aplikasi",
        category: "Tutorial",
        description: "Panduan lengkap cara menggunakan aplikasi KMS",
        body: "Isi konten lengkap di sini...",
        date: "2024-01-15",
        status: "Published",
      },
      {
        id: 2,
        title: "Berita Update Sistem",
        category: "News",
        description: "Update sistem terbaru telah dirilis",
        body: "Isi konten lengkap di sini...",
        date: "2024-01-14",
        status: "Published",
      },
      {
        id: 3,
        title: "FAQ Pembayaran KMS",
        category: "Help",
        description: "Jawaban atas pertanyaan umum tentang pembayaran",
        body: "Isi konten lengkap di sini...",
        date: "2024-01-13",
        status: "Draft",
      },
    ],
  )

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingContent, setEditingContent] = useState<CMSContent | undefined>()
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5
  const totalPages = Math.ceil(contentList.length / itemsPerPage)
  const startIdx = (currentPage - 1) * itemsPerPage
  const displayData = contentList.slice(startIdx, startIdx + itemsPerPage)

  const handleAddClick = () => {
    setEditingContent(undefined)
    setIsModalOpen(true)
  }

  const handleEditClick = (content: CMSContent) => {
    setEditingContent(content)
    setIsModalOpen(true)
  }

  const handleSave = (content: CMSContent) => {
    if (editingContent) {
      setContentList(contentList.map((item) => (item.id === content.id ? content : item)))
    } else {
      setContentList([...contentList, content])
    }
  }

  const handleDelete = (id: number) => {
    setContentList(contentList.filter((item) => item.id !== id))
  }

  return (
    <>
      <div className="space-y-4">
        <div className="flex justify-end">
          <Button onClick={handleAddClick}>+ Tambah Konten</Button>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Deskripsi</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{item.description}</TableCell>
                  <TableCell className="text-muted-foreground">{item.date}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "Published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="gap-1" onClick={() => handleEditClick(item)}>
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 text-destructive hover:text-destructive"
                        onClick={() => handleDelete(item.id)}
                      >
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

      <CMSCrudModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        editingContent={editingContent}
      />
    </>
  )
}
