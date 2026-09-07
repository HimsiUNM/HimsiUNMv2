"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CMSContent {
  id: number
  title: string
  category: string
  description: string
  body: string
  status: "Published" | "Draft"
  date: string
}

interface CMSCrudModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (content: CMSContent) => void
  editingContent?: CMSContent
}

export function CMSCrudModal({ isOpen, onClose, onSave, editingContent }: CMSCrudModalProps) {
  const [title, setTitle] = useState(editingContent?.title || "")
  const [category, setCategory] = useState(editingContent?.category || "")
  const [description, setDescription] = useState(editingContent?.description || "")
  const [body, setBody] = useState(editingContent?.body || "")
  const [status, setStatus] = useState<"Published" | "Draft">(editingContent?.status || "Draft")

  const handleSave = () => {
    const newContent: CMSContent = {
      id: editingContent?.id || Date.now(),
      title,
      category,
      description,
      body,
      status,
      date: editingContent?.date || new Date().toISOString().split("T")[0],
    }
    onSave(newContent)
    handleClose()
  }

  const handleClose = () => {
    setTitle("")
    setCategory("")
    setDescription("")
    setBody("")
    setStatus("Draft")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{editingContent ? "Edit Konten" : "Tambah Konten Baru"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Judul</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan judul" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Kategori</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tutorial">Tutorial</SelectItem>
                  <SelectItem value="News">News</SelectItem>
                  <SelectItem value="Help">Help</SelectItem>
                  <SelectItem value="Policy">Policy</SelectItem>
                  <SelectItem value="Announcement">Announcement</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={(value) => setStatus(value as "Published" | "Draft")}>
                <SelectTrigger id="status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Draft">Draft</SelectItem>
                  <SelectItem value="Published">Published</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Masukkan deskripsi singkat"
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="body">Konten</Label>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Masukkan konten lengkap"
              rows={5}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Batal
          </Button>
          <Button onClick={handleSave}>{editingContent ? "Update" : "Tambah"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
