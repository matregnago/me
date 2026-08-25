import type { Status } from "@/lib/types"
import { Badge } from "./ui/badge"

interface StatusBadgeProps {
  status: Status
}

const colorByStatus = (status: Status): string => {
  switch (status) {
    case "active": return "bg-blue-600"
    case "in-progress": return "bg-amber-600"
    case "completed": return "bg-green-600"
  }
}

const labelByStatus = (status: Status): string => {
  switch (status) {
    case "active": return "Active"
    case "in-progress": return "In Progress"
    case "completed": return "Completed"
  }
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const color = colorByStatus(status);
  const label = labelByStatus(status);
  return <Badge className={color + ""}>{label}</Badge>
}
