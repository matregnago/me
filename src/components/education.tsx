import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Education } from "@/lib/types"

interface EducationEntryProps {
  education: Education
}
export function EducationEntry({ education }: EducationEntryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{education.degree} - {education.field}</CardTitle>
        <CardDescription>{education.school} | {education.startDate} - {education.endDate} </CardDescription>
        <CardAction>{education.status}</CardAction>
      </CardHeader>
      <CardContent>
        <p>{education.description}</p>
      </CardContent>
    </Card>
  )
}
