import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { MainTabs } from "./components/main-tabs"

export default function App() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-3xl px-4 py-12 sm:py-16 flex flex-col gap-3">
      <Header />
      <MainTabs />
      <Footer />
    </main>
  )
}
