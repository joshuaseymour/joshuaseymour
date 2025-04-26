import { Hero } from "@/components/sections/Hero"
import { TeaserSection } from "@/components/sections/TeaserSection"
import { JoinSection } from "@/components/sections/JoinSection"
import { SuperSection } from "@/components/sections/SuperSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-stone-100 via-stone-200 to-slate-200 dark:from-stone-900 dark:via-stone-800 dark:to-slate-800">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Hero />
        <TeaserSection />
        <JoinSection />
        <SuperSection />
        <Footer />
      </main>
    </div>
  )
}
