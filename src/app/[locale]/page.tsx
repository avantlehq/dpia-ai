import { Header } from '../../components/marketing/header'
import { Hero } from '../../components/marketing/hero'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  )
}