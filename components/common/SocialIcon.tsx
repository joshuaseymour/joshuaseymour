import { YoutubeIcon, XIcon, TelegramIcon, TikTokIcon, SubstackIcon } from "@/components/common/icons/social-icons"

interface SocialIconProps {
  href: string
  icon: "youtube" | "x" | "telegram" | "tiktok" | "substack"
}

export function SocialIcon({ href, icon }: SocialIconProps) {
  const IconComponent = {
    youtube: YoutubeIcon,
    x: XIcon,
    telegram: TelegramIcon,
    tiktok: TikTokIcon,
    substack: SubstackIcon,
  }[icon]

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-br from-stone-100 to-slate-100 dark:from-stone-800 dark:to-slate-800 
                 p-3 sm:p-4 lg:p-5 rounded-full transition-all duration-300 group
                 hover:from-stone-200 hover:to-slate-200 
                 dark:hover:from-stone-700 dark:hover:to-slate-700"
    >
      <IconComponent
        size={32}
        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform duration-300
                   text-stone-600 dark:text-stone-300"
      />
    </a>
  )
}
