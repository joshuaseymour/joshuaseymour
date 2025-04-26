import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
// Import the GitHubRepoLink component at the top of the file
import { GitHubRepoLink } from "@/components/common/GitHubRepoLink"

const joinCards = [
  {
    title: "Join Ascenders",
    description: "Let's Level Up Your Life and Business with Ascension and Ascenders",
    href: "https://www.joinascenders.com/",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/join%20ascenders%20favicon-Ci77CPcJgD1nPx0pSXL9DClAJaWpKI.svg",
    gradientClass: "bg-gradient-to-br from-neutral-100 to-orange-100 dark:from-neutral-900 dark:to-orange-900",
    hoverTextClass: "group-hover:text-orange-700 dark:group-hover:text-orange-300",
    textClass: "text-neutral-900 dark:text-neutral-100",
    descriptionClass:
      "text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-800 dark:group-hover:text-neutral-200",
    glowClass: "hover:shadow-[0_0_15px_rgba(251,146,60,0.5)] dark:hover:shadow-[0_0_15px_rgba(251,146,60,0.3)]",
  },
  {
    title: "Join Neothinkers",
    description: "Let's Become Smarter and Live Longer with Neothink and Neothinkers",
    href: "https://www.joinneothinkers.com/",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon-join-neothinkers-5a79H3lESR992dP7CmLEPstr9enkQp.svg",
    gradientClass: "bg-gradient-to-tr from-zinc-100 to-amber-100 dark:from-zinc-900 dark:to-amber-900",
    hoverTextClass: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
    textClass: "text-zinc-900 dark:text-zinc-100",
    descriptionClass: "text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-800 dark:group-hover:text-zinc-200",
    glowClass: "hover:shadow-[0_0_15px_rgba(251,191,36,0.5)] dark:hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]",
  },
  {
    title: "Join Immortals",
    description: "Let's Build the Foundation of Forever with Immortalis and Immortals",
    href: "https://www.joinimmortals.com/",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/join%20immortalis%20favicon-Fvb87KwtUwB4wzxjWyl4GG4o38M56K.svg",
    gradientClass: "bg-gradient-to-bl from-gray-100 to-red-100 dark:from-gray-900 dark:to-red-900",
    hoverTextClass: "group-hover:text-red-700 dark:group-hover:text-red-300",
    textClass: "text-gray-900 dark:text-gray-100",
    descriptionClass: "text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200",
    glowClass: "hover:shadow-[0_0_15px_rgba(248,113,113,0.5)] dark:hover:shadow-[0_0_15px_rgba(248,113,113,0.3)]",
  },
]

// Update the return statement to include the GitHubRepoLink below the grid
export function JoinSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {joinCards.map((card, index) => (
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
          href="https://github.com/neothink-dao/neothink.io"
          title="Neothink DAO"
          description="My Intrapreneurial Project for Ascenders, Neothinkers, Immortals"
          variant="intrapreneur"
        />
      </div>
    </section>
  )
}
