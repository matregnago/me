import { Card, CardContent } from "@/components/ui/card"
import type { Research } from "@/lib/types"
import { ExternalLink, FileText } from "lucide-react"

interface ResearchEntryProps {
  research: Research
}

export const ResearchEntry = ({ research }: ResearchEntryProps) => {
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

            <p className="mt-1 text-sm italic text-muted-foreground">
              {research.event}, 2026
            </p>

            <div className="mt-3">
              <a
                href={research.pdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
              >
                <FileText className="size-4" />
                PDF
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
