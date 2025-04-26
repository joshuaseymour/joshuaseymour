import { ContactIcon } from "@/components/common/ContactIcon"

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 lg:py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-800 dark:text-stone-200 mb-8 sm:mb-12 lg:mb-16 text-center">
        Let's Connect!
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">
        <ContactIcon href="https://form.typeform.com/to/cWe6qLhm" icon="gmail" text="Email with me" />
        <ContactIcon href="https://wa.me/18084632547" icon="whatsapp" text="Chat with me" />
        <ContactIcon href="https://calendly.com/joshuajseymour" icon="calendly" text="Meet with me" />
      </div>
    </footer>
  )
}
