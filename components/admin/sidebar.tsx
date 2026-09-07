"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  Users,
  DollarSign,
  Settings,
  ChevronDown,
  TrendingDown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function Sidebar() {
  const pathname = usePathname()
  const [expandedCMS, setExpandedCMS] = useState(pathname.startsWith("/admin/cms"))
  const [expandedKMS, setExpandedKMS] = useState(pathname.startsWith("/admin/kms"))

  const mainItems = [
    { name: "Dashboard", href: "/admin/backoffice", icon: LayoutDashboard },
    { name: "Pendaftaran", href: "/admin/pendaftaran", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  const cmsItems = [{ name: "Konten", href: "/admin/cms/konten", icon: FileText }]

  const kmsItems = [
    { name: "Pembayaran", href: "/admin/kms/pembayaran", icon: DollarSign },
    { name: "Pengeluaran", href: "/admin/kms/pengeluaran", icon: TrendingDown },
    { name: "Rekap Pemasukan", href: "/admin/kms/rekap-pemasukan", icon: TrendingDown },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <h1 className="text-xl font-bold text-sidebar-foreground">KMS Admin</h1>
      </div>
      <nav className="mt-8 space-y-2 px-4">
        {/* Main Menu Items */}
        {mainItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive(item.href)
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}

        {/* CMS Section */}
        <div className="mt-6 pt-6 border-t border-sidebar-border">
          <button
            onClick={() => setExpandedCMS(!expandedCMS)}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-colors text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">CMS</span>
            <ChevronDown className={cn("w-4 h-4 ml-auto transition-transform", expandedCMS && "rotate-180")} />
          </button>
          {expandedCMS && (
            <div className="ml-4 mt-2 space-y-2">
              {cmsItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm",
                      isActive(item.href)
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        {/* KMS Section */}
        <div className="mt-4">
          <button
            onClick={() => setExpandedKMS(!expandedKMS)}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-colors text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <BookOpen className="w-5 h-5" />
            <span className="font-medium">KMS</span>
            <ChevronDown className={cn("w-4 h-4 ml-auto transition-transform", expandedKMS && "rotate-180")} />
          </button>
          {expandedKMS && (
            <div className="ml-4 mt-2 space-y-2">
              {kmsItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors text-sm",
                      isActive(item.href)
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent",
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </nav>
    </aside>
  )
}
