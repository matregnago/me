import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import remarkFrontmatter from "remark-frontmatter"
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({ remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkMath], rehypePlugins: [rehypeKatex] }),
    },
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
