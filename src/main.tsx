import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
  RouterProvider,
} from "@tanstack/react-router"
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { getBlogPosts } from "./lib/utils.ts"
import { Post } from "./components/post.tsx"

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: (search) => ({
    t: typeof search.t === "string" ? search.t : undefined,
  }),
  component: App,
})

const blogRedirectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "blog",
  beforeLoad: () => {
    throw redirect({
      to: "/",
      replace: true,
      search: { t: "blog" },
    })
  },
})

const posts = getBlogPosts();
const postsRoutes = posts.map(([slug, module]) => {
  return createRoute({
    getParentRoute: () => rootRoute,
    path: `blog/${slug}`,
    component: () => <Post Content={module.default} />,
  })
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  blogRedirectRoute,
  ...postsRoutes,
])

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
