import { useNavigate, useSearch } from "@tanstack/react-router"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { MainTabs } from "./components/main-tabs"

export default function App() {
  const { t } = useSearch({ from: "/" })
  const navigate = useNavigate()

  navigate({
    to: "/",
    search: { t: undefined },
    replace: true,
  })

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-12 sm:px-4 sm:py-16">
      <Header />
      <MainTabs selectedTab={t} />
      <Footer />
    </main>
  )
}
