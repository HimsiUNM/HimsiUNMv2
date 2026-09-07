import { Card } from "@/components/ui/card"

interface ChartPlaceholderProps {
  title: string
}

export function ChartPlaceholder({ title }: ChartPlaceholderProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Chart will be rendered here</p>
      </div>
    </Card>
  )
}
