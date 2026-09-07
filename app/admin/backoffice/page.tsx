"use client"

import { Sidebar } from "@/components/admin/sidebar"
import { Topbar } from "@/components/admin/topbar"
import { StatCard } from "@/components/admin/stat-card"
import { ActivityTable } from "@/components/admin/activity-table"
import { ChartPlaceholder } from "@/components/admin/chart-placeholder"
import { TrendingUp, Users, FileText, DollarSign } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground mt-2">Welcome back to your KMS admin panel</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Users" value="1,234" change="+12%" icon={<Users className="w-5 h-5" />} />
              <StatCard title="Total Content" value="456" change="+8%" icon={<FileText className="w-5 h-5" />} />
              <StatCard
                title="Pembayaran KMS"
                value="Rp 12.5M"
                change="+23%"
                icon={<DollarSign className="w-5 h-5" />}
              />
              <StatCard title="Growth" value="156%" change="+5%" icon={<TrendingUp className="w-5 h-5" />} />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartPlaceholder title="Pertumbuhan Pengguna" />
              <ChartPlaceholder title="Status Pembayaran" />
            </div>

            {/* Activity Table */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Aktivitas Terbaru</h2>
              <ActivityTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
