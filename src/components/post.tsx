import type { MDXContent } from "mdx/types"
import "katex/dist/katex.min.css"
import { Link } from "@tanstack/react-router"
import { ModeToggle } from "./theme-toggle"

interface PostProps {
  Content: MDXContent
}

const Nav = () => {
  return (
    <nav className="mb-8 flex flex-row justify-between border-b pb-4">
      <div className="flex flex-row gap-4">
        <p className="text-base font-bold">Matheus Tregnago</p>
        <Link to="/" search={{ t: undefined }}>
          home
        </Link>
        <a target="_blank" href="https://github.com/matregnago">
          github
        </a>
      </div>
      <ModeToggle />
    </nav>
  )
}

export const Post = ({ Content }: PostProps) => {
  return (
    <main className="post relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-12 sm:px-4 sm:py-16">
      <Nav />
      <Content />
    </main>
  )
}
