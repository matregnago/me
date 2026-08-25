import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "./ui/button"
import type { Project } from "@/lib/types"
import { Code, ExternalLink } from "lucide-react"
import { skills } from "@/lib/constants"

interface ProjectEntryProps {
  project: Project
}
export function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <Card className="bg-transparent">
      <CardHeader>
        <CardTitle className="text-foreground">{project.name}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <img
          className="h-70 w-full shrink-0 rounded-md object-cover"
          src={project.img}
        />
        <p className="text-justify">{project.description}</p>

        {project.stack && (
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => {
              const skill = skills.get(tech)
              return (
                skill && (
                  <div
                    key={tech}
                    className="flex items-center gap-1 rounded-full border border-border bg-muted/50 px-2 py-0.5"
                  >
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                    <span className="text-xs">{skill.name}</span>
                  </div>
                )
              )
            })}
          </div>
        )}
        <div className="flex gap-2">
          <a
            href={project.source}
            target="_blank"
            className={buttonVariants({ size: "sm" })}
          >
            <Code />
            Source code
          </a>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              className={buttonVariants({ size: "sm" })}
            >
              <ExternalLink />
              Website
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
