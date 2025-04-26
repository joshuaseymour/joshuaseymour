import { GmailIcon, WhatsAppIcon, CalendlyIcon } from "@/components/common/icons/footer-icons"

interface ContactIconProps {
  href: string
  icon: "gmail" | "whatsapp" | "calendly"
  text: string
}

export function ContactIcon({ href, icon, text }: ContactIconProps) {
  const IconComponent = {
    gmail: GmailIcon,
    whatsapp: WhatsAppIcon,
    calendly: CalendlyIcon,
  }[icon]

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-4 group">
      <div
        className="bg-gradient-to-br from-stone-100 to-slate-100 dark:from-stone-800 dark:to-slate-800 
                      p-4 sm:p-5 lg:p-6 rounded-full transition-all duration-300 shadow-lg group-hover:shadow-2xl 
                      hover:from-stone-200 hover:to-slate-200 
                      dark:hover:from-stone-700 dark:hover:to-slate-700"
      >
        <IconComponent
          size={36}
          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-stone-600 dark:text-stone-300 
                     group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span
        className="text-stone-800 dark:text-stone-200 text-lg sm:text-xl md:text-2xl lg:text-3xl 
                     font-semibold group-hover:underline text-center"
      >
        {text}
      </span>
    </a>
  )
}
