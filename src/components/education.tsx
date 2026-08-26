import { Card, CardContent } from "@/components/ui/card"
import type { Education } from "@/lib/types"
import {
  BookOpenText,
  GraduationCap,
  NotebookText,
  University,
} from "lucide-react"

interface EducationEntryProps {
  education: Education
}

const getEducationIcon = (degree: string) => {
  const className =
    "size-10 shrink-0 rounded-lg border bg-card p-2 text-foreground sm:size-12 sm:rounded-xl sm:p-2.5"
  if (degree.toLowerCase().includes("master"))
    return <BookOpenText className={className} />
  if (degree.toLowerCase().includes("bachelor"))
    return <GraduationCap className={className} />
  return <NotebookText className={className} />
}

export const EducationEntry = ({ education }: EducationEntryProps) => {
  return (
    <Card className="bg-transparent">
      <CardContent>
        <div className="flex w-full items-start gap-2.5 sm:gap-3">
          {getEducationIcon(education.degree)}
          <div className="min-w-0 flex-1">
            <h1 className="font-heading text-sm font-medium leading-snug text-foreground sm:text-base">
              {education.degree} in {education.field}
            </h1>
            <div className="mt-1.5 flex flex-col items-start gap-1 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
              <span className="flex min-w-0 items-start gap-1.5">
                <University className="mt-0.5 size-4 shrink-0" />
                <span>{education.school}</span>
              </span>
              <span className="text-xs text-muted-foreground">
                {education.startDate} — {education.endDate}
              </span>
            </div>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed">
              {education.description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
