import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const activityData = [
  { id: 1, user: "John Doe", action: "Created content", timestamp: "2 hours ago", status: "Success" },
  { id: 2, user: "Jane Smith", action: "Uploaded image", timestamp: "4 hours ago", status: "Success" },
  { id: 3, user: "Admin User", action: "Updated settings", timestamp: "1 day ago", status: "Success" },
  { id: 4, user: "Bob Wilson", action: "Payment received", timestamp: "2 days ago", status: "Success" },
  { id: 5, user: "Alice Brown", action: "Content deleted", timestamp: "3 days ago", status: "Warning" },
]

export function ActivityTable() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activityData.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-medium">{row.user}</TableCell>
              <TableCell>{row.action}</TableCell>
              <TableCell className="text-muted-foreground">{row.timestamp}</TableCell>
              <TableCell>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    row.status === "Success" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
