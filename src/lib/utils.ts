import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { BlogMDXModule } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBlogPosts() {
  const mdxFiles = import.meta.glob<BlogMDXModule>("@/blog/*.mdx", { eager: true })
  const posts = Object.entries(mdxFiles).map(
    ([path, module]): [string, BlogMDXModule] => {
      const slug = path.replace("src/blog/", "").replace(/\.mdx$/, "")

      return [slug, module]
    }
  )
  return posts
}
