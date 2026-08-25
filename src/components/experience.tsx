// Credits to: https://github.com/Hiviexd/portfolio/blob/6727bc77b91615277b2685d793c229142bdb50db/src/components/experience/experience-entry.tsx

import { skills } from "@/lib/constants"
import type { Experience } from "@/lib/types"
import { Building, MapPin } from "lucide-react"

interface ExperienceEntryProps {
  experience: Experience;
  isLast: boolean;
}

export function ExperienceEntry({ experience, isLast }: ExperienceEntryProps) {
  return (
    <div className="relative pb-8 pl-8 last:pb-0">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-7 bottom-0 left-2.75 w-px bg-border transition-colors" />
      )}

      {/* Timeline dot */}
      <div className="absolute top-1.5 left-0 flex size-6 items-center justify-center rounded-full border-2 border-border bg-background transition-colors">
        <div className="size-2 rounded-full bg-foreground transition-colors" />
      </div>

      <div className="space-y-3">
        {/* Header */}
        <div>
          <h3 className="text-base font-medium text-foreground">
            {experience.role}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Building className="size-4" />
              {experience.company}
            </span>

            <span className="flex items-center gap-1.5">
              <MapPin className="size-4" />
              {experience.location}
            </span>

            <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground transition-colors">
              {experience.type}
            </span>

            <span className="text-xs text-muted-foreground">
              {experience.startDate} — {experience.endDate}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground">
          {experience.description}
        </p>

        {/* Responsibilities */}
        <ul className="space-y-1.5 text-sm">
          {experience.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50" />
              <span className="text-muted-foreground">{resp}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack */}
        {experience.stack && (
          <div className="flex flex-wrap gap-1.5">
            {experience.stack.map((tech) => {
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
      </div>
    </div>
  )
}
