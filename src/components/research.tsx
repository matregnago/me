import { Card, CardContent } from "@/components/ui/card"
import type { Research } from "@/lib/types"
import { ExternalLink, FileText, Summary } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react"

interface ResearchEntryProps {
  research: Research
}

export const ResearchEntry = ({ research }: ResearchEntryProps) => {
  const [isAbsOpen, setIsAbsOpen] = useState(false)
  return (
    <Card className="bg-transparent">
      <CardContent>
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <img
            className="aspect-video w-full rounded-md object-cover sm:h-32 sm:w-40 sm:shrink-0"
            src={research.image}
            alt={research.title}
          />

          <div className="flex min-w-0 flex-1 flex-col">
            <h1 className="font-heading text-sm font-medium leading-snug text-foreground sm:text-base">
              {research.title}
            </h1>

            <div className="mt-1.5 flex flex-wrap gap-x-1 gap-y-0.5 text-sm text-muted-foreground">
              {research.authors.map((author, index) => (
                <span key={author.name}>
                  <a
                    href={author.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground hover:underline"
                  >
                    {author.name}
                  </a>
                  {index < research.authors.length - 1 && ","}
                </span>
              ))}
            </div>

            <p className="mt-1 text-sm leading-snug text-muted-foreground italic">
              {research.event}, {research.year}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-2">
              <Button
                variant="outline"
                size="sm"
                className="inline-flex"
                onClick={() => setIsAbsOpen(!isAbsOpen)}
              >
                <Summary className="size-4" />
                ABS
              </Button>

              <a
                href={research.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm hover:text-foreground hover:underline"
              >
                <FileText className="size-4" />
                PDF({research.lang})
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>
        {isAbsOpen && (
          <p className="mt-4 text-left text-sm leading-relaxed sm:mt-5 sm:text-justify">
            {research.abs}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
