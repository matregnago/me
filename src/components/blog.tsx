import type { BlogMetadata } from "@/lib/types";
import { Link } from "@tanstack/react-router";

interface BlogEntryProps {
  slug: string;
  metadata: BlogMetadata;
}

export const BlogEntry = ({ slug, metadata }: BlogEntryProps) => {
  const { title, date, summary, tags } = metadata;
  return (
    <Link to={`/blog/${slug}`} className="border p-4">

      <div className="flex flex-row w-full justify-between">
      <p>{title}</p>
      <p>{date}</p>

      </div>

      <ul className="flex flex-row gap-1">

        {tags.map(tag => <li className="border text-xs">{tag}</li>)}
      </ul>
      <p>{summary}</p>
    </Link>
  )
}
