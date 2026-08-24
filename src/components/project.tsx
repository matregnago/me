import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import type { Project } from "@/lib/types"

interface ProjectEntryProps {
  project: Project
}
export function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
        <CardAction>{project.status}</CardAction>
      </CardHeader>
      <CardContent>
        <img src={project.img} />
        <p>{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button>Source code</Button>
      </CardFooter>
    </Card>
  )
}
