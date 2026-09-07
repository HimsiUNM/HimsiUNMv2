import { Card } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: ReactNode
}

export function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
          <p className="text-xs text-green-600 mt-2">{change} dari bulan lalu</p>
        </div>
        <div className="p-3 bg-primary/10 rounded-lg text-primary">{icon}</div>
      </div>
    </Card>
  )
}
