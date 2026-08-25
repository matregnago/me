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
      <CardContent className="space-y-3">
        <img src={project.img} />
        <p className="text-justify">{project.description}</p>

        {project.stack && (
            <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex items-center gap-1 rounded-full border border-border bg-muted/50 px-2 py-0.5"
                    >
                        <span className="size-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
                        <span className="text-xs">{tech.name}</span>
                    </div>
                ))}
            </div>
        )}

        <Button>Source code</Button>
      </CardContent>
    </Card>
  )
}
