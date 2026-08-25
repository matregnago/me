import { Card, CardContent } from "@/components/ui/card"
import type { Education } from "@/lib/types"
import {
  BookOpenText,
  Calendar,
  GraduationCap,
  NotebookText,
  University,
} from "lucide-react"

interface EducationEntryProps {
  education: Education
}

const getEducationIcon = (degree: string) => {
  const className = "size-12 rounded-xl border p-2.5 bg-card text-foreground"
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
        <div className="flex w-full flex-row justify-between">
          <div className="flex flex-row gap-3">
            {getEducationIcon(education.degree)}
            <div>
              <h1 className="text-base font-heading text-foreground font-medium">
                {education.degree} in {education.field}
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <University className="size-4" />
                  {education.school}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {education.startDate} — {education.endDate}
                </span>
              </div>
              <p className="mt-3">{education.description}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
