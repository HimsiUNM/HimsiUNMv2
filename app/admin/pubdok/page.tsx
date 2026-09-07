"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContentTable } from "@/components/admin/content-table"
import { ContentModal } from "@/components/admin/content-modal"
import { Plus } from "lucide-react"

export default function PubDokPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">PubDok - Content Management</h1>
          <p className="text-muted-foreground mt-2">Kelola konten dan publikasi Anda di sini</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          Add Content
        </Button>
      </div>

      {/* Content Table */}
      <ContentTable />

      {/* Modal */}
      <ContentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
