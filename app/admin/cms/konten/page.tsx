"use client"

import { Sidebar } from "@/components/admin/sidebar"
import { Topbar } from "@/components/admin/topbar"
import { CMSList } from "@/components/admin/cms-list"

export default function KontenPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">CMS - Konten</h1>
              <p className="text-muted-foreground mt-2">Kelola konten publikasi Anda dengan lengkap</p>
            </div>

            {/* CMS List */}
            <CMSList />
          </div>
        </main>
      </div>
    </div>
  )
}
