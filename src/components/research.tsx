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
        <div className="flex w-full flex-row gap-4">
          <img
            className="h-32 w-40 shrink-0 rounded-md object-cover"
            src={research.image}
            alt={research.title}
          />

          <div className="flex flex-1 flex-col">
            <h1 className="font-heading text-base font-medium text-foreground">
              {research.title}
            </h1>

            <div className="mt-1 flex flex-wrap gap-x-1 text-sm text-muted-foreground">
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

            <p className="mt-1 text-sm text-muted-foreground italic">
              {research.event}, {research.year}
            </p>

            <div className="mt-3 flex items-center gap-2">
              <Button variant="outline" size="sm" className="inline-flex" onClick={() => setIsAbsOpen(!isAbsOpen)}>
                <Summary className="size-4" />
                ABS
              </Button>

              <a
                href={research.pdf}
                target="_blank"
                rel="noreferrer"
                className={"inline-flex items-center gap-1.5 text-sm hover:text-foreground hover:underline"}
              >
                <FileText className="size-4" />
                PDF({research.lang})
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>
        {isAbsOpen && <p className="leading-relaxed mt-5 text-sm text-justify">{research.abs}</p>}
      </CardContent>
    </Card>
  )
}
