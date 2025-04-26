import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { GitHubRepoLink } from "@/components/common/GitHubRepoLink"

const superCards = [
  {
    title: "Supercivilization",
    description: "Avolve from Degen into Regen as a Superachiever with Superacheivers",
    href: "https://www.supercivilization.xyz/",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20supercivilization-WzZnFWmF3hnCsdtOVKvpxdLtbrcsTX.svg",
    gradientClass: "bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800",
    hoverTextClass: "group-hover:text-zinc-700 dark:group-hover:text-zinc-300",
    textClass: "text-zinc-900 dark:text-zinc-100",
    descriptionClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-800 dark:group-hover:text-zinc-200",
    glowClass: "hover:shadow-[0_0_15px_rgba(161,161,170,0.5)] dark:hover:shadow-[0_0_15px_rgba(161,161,170,0.3)]",
  },
  {
    title: "Superachiever",
    description: "Further Create Your Success Puzzle Faster via Superachiever Playbook",
    href: "https://www.superachiever.xyz/",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20superachiever-XjcsZcMgdwBYO7hYnWJvoWc8yciG8c.svg",
    gradientClass: "bg-gradient-to-r from-stone-100 to-stone-200 dark:from-stone-900 dark:to-stone-800",
    hoverTextClass: "group-hover:text-stone-700 dark:group-hover:text-stone-300",
    textClass: "text-stone-900 dark:text-stone-100",
    descriptionClass: "text-stone-700 dark:text-stone-300 group-hover:text-stone-800 dark:group-hover:text-stone-200",
    glowClass: "hover:shadow-[0_0_15px_rgba(168,162,158,0.5)] dark:hover:shadow-[0_0_15px_rgba(168,162,158,0.3)]",
  },
  {
    title: "Superachievers",
    description: "Further Co-Create Our Superpuzzle Faster via Supercivilization Quests",
    href: "https://www.superachievers.xyz/",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon%20superachievers-AM2JEdxv1En2PwUgL3dEHRwgp3ELVs.svg",
    gradientClass: "bg-gradient-to-bl from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800",
    hoverTextClass: "group-hover:text-slate-700 dark:group-hover:text-slate-300",
    textClass: "text-slate-900 dark:text-slate-100",
    descriptionClass: "text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200",
    glowClass: "hover:shadow-[0_0_15px_rgba(148,163,184,0.5)] dark:hover:shadow-[0_0_15px_rgba(148,163,184,0.3)]",
  },
]

export function SuperSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {superCards.map((card, index) => (
            <Link key={index} href={card.href} target="_blank" rel="noopener noreferrer" className="group">
              <Card
                className={`h-full transition-all duration-300 ${card.gradientClass} ${card.glowClass} hover:scale-105`}
              >
                <CardHeader className="flex flex-col items-center justify-center text-center h-full p-6 sm:p-8">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <Image src={card.icon || "/placeholder.svg"} alt={card.title} width={64} height={64} />
                  </div>
                  <CardTitle
                    className={`text-xl sm:text-2xl font-bold ${card.textClass} ${card.hoverTextClass} transition-colors duration-300 mb-3`}
                  >
                    {card.title}
                  </CardTitle>
                  <CardDescription
                    className={`text-base sm:text-sm md:text-base ${card.descriptionClass} transition-colors duration-300`}
                  >
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <GitHubRepoLink
          href="https://github.com/avolve-dao/avolve.io"
          title="Avolve DAO"
          description="My Entrepreneurial Project for Missionaries and Visionaries"
          variant="entrepreneur"
        />
      </div>
    </section>
  )
}
