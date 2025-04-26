import Image from "next/image"
import { SocialIcon } from "@/components/common/SocialIcon"

export function Hero() {
  return (
    <section className="text-center mb-16 sm:mb-20 lg:mb-24">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mb-8 sm:mb-10 lg:mb-12 animate-float">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/joshua%20seymour%20profile%20photo-wYhAVDb9oPVnz2dCKn9VXXdaHmAX8x.png"
          alt="Joshua Seymour"
          width={288}
          height={288}
          className="rounded-full shadow-2xl object-cover border-4 border-stone-200 dark:border-stone-600 w-full h-full"
        />
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 text-stone-800 dark:text-stone-200 leading-tight glow-text">
        Joshua Seymour
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-700 dark:text-stone-300 mb-4 sm:mb-8 lg:mb-12 leading-snug max-w-3xl mx-auto">
        Adiós Anticivilization! Aloha Supercivilization!
      </p>
      <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 mb-8 sm:mb-12 lg:mb-16">
        <SocialIcon href="https://www.youtube.com/@joshuaseymour" icon="youtube" />
        <SocialIcon href="https://tiktok.com/@joshuajseymour" icon="tiktok" />
        <SocialIcon href="https://substack.com/@joshuaseymour" icon="substack" />
        <SocialIcon href="https://x.com/joshuaseymour" icon="x" />
        <SocialIcon href="https://t.me/joshuaseymour" icon="telegram" />
      </div>
    </section>
  )
}
