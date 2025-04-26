import { Github } from "lucide-react"
import Link from "next/link"

interface GitHubRepoLinkProps {
  href: string
  title: string
  description: string
  variant: "intrapreneur" | "entrepreneur"
}

export function GitHubRepoLink({ href, title, description, variant }: GitHubRepoLinkProps) {
  const gradientClasses = {
    intrapreneur: "from-orange-700 via-amber-700 to-red-700 dark:from-orange-700 dark:via-amber-700 dark:to-red-700",
    entrepreneur: "from-stone-800 via-zinc-800 to-slate-800 dark:from-stone-800 dark:via-zinc-800 dark:to-slate-800",
  }

  const textColorClasses = {
    intrapreneur: "text-white",
    entrepreneur: "text-white",
  }

  const hoverGlowClasses = {
    intrapreneur: "hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] dark:hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
    entrepreneur: "hover:shadow-[0_0_20px_rgba(148,163,184,0.4)] dark:hover:shadow-[0_0_20px_rgba(148,163,184,0.3)]",
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        mt-8 sm:mt-12 block w-full mx-auto
        bg-gradient-to-r ${gradientClasses[variant]}
        p-6 sm:p-8 rounded-xl
        transition-all duration-300
        transform hover:scale-105
        ${hoverGlowClasses[variant]}
        group
      `}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="bg-white p-3 rounded-full">
          <Github className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
        </div>
        <div className="text-center sm:text-left">
          <h3 className={`text-xl sm:text-2xl font-bold ${textColorClasses[variant]} mb-2 group-hover:underline`}>
            {title}
          </h3>
          <p className={`${textColorClasses[variant]} opacity-90`}>{description}</p>
        </div>
      </div>
    </Link>
  )
}
