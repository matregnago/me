// Credits to: https://github.com/Hiviexd/portfolio/blob/6727bc77b91615277b2685d793c229142bdb50db/src/components/experience/experience-entry.tsx

import type { Experience } from "@/lib/types";
import { Building, MapPin } from "lucide-react";

interface ExperienceEntryProps {
    experience: Experience;
    isLast: boolean;
};

export function ExperienceEntry({ experience, isLast }: ExperienceEntryProps) {
    return (
        <div className="relative pl-8 pb-8 last:pb-0">
            {/* Timeline line */}
            {!isLast && <div className="absolute left-2.75 top-7 bottom-0 w-px bg-border transition-colors" />}

            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 size-6 rounded-full border-2 border-border bg-background flex items-center justify-center transition-colors">
                <div className="size-2 rounded-full bg-foreground transition-colors" />
            </div>

            <div className="space-y-3">
                {/* Header */}
                <div>
                    <h3 className="font-medium text-base text-foreground">{experience.role}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                            <Building className="size-4" />
                            {experience.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <MapPin className="size-4"/>
                            {experience.location}
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground transition-colors">
                            {experience.type}
                        </span>
                        <span className="text-xs text-muted-foreground/70">
                            {experience.startDate} — {experience.endDate}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">{experience.description}</p>

                {/* Responsibilities */}
                <ul className="space-y-1.5 text-sm">
                    {experience.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="mt-2 size-1 rounded-full bg-muted-foreground/50 shrink-0" />
                            <span className="text-muted-foreground">{resp}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                {experience.stack && (
                    <div className="flex flex-wrap gap-1.5">
                        {experience.stack.map((tech) => (
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
            </div>
        </div>
    );
}
