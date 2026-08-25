import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import type { Project } from "@/lib/types"
import { StatusBadge } from "./status-badge"

interface ProjectEntryProps {
  project: Project
}
export function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
        <CardAction>
          <StatusBadge status={project.status} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <img src={project.img} />
        <p className="text-justify my-3">{project.description}</p>
        <Button>Source code</Button>
      </CardContent>
    </Card>
  )
}
