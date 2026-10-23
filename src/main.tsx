import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import {
  createRootRoute,
  createRoute,
  createRouter,
  // redirect,
  RouterProvider,
} from "@tanstack/react-router"
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  validateSearch: (search) => ({
    t: typeof search.t === "string" ? search.t : undefined,
  }),
  component: App,
})
// const blogRedirectRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "blog",
//   beforeLoad: () => {
//     throw redirect({
//       to: "/",
//       replace: true,
//       search: { t: "blog" },
//     })
//   },
// })
//
// const blogRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "blog/$post",
//   component: () => <h1>Blog!</h1>,
// })

const routeTree = rootRoute.addChildren([
  indexRoute,
  // blogRoute,
  // blogRedirectRoute,
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
