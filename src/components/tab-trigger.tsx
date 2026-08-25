import type { LucideIcon } from "lucide-react"
import { TabsTrigger } from "./ui/tabs"
interface CustomTabsTriggerProps {
  label: string
  value: string
  icon: LucideIcon
}
export const CustomTabsTrigger = ({
  icon: Icon,
  label,
  value,
}: CustomTabsTriggerProps) => {
  return (
    <TabsTrigger value={value}>
      <div className="flex flex-row items-center gap-1.5">
        <Icon className="size-4" />
        <p>{label}</p>
      </div>
    </TabsTrigger>
  )
}
