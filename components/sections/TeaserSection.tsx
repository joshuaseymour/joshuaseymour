import Link from "next/link"

export function TeaserSection() {
  return (
    <section className="text-center py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-stone-800 dark:text-stone-200">
          Go Further, Faster, Forever
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-stone-700 dark:text-stone-300 max-w-4xl mx-auto">
          I offer access to solutions, systems, services, software, and support for{" "}
          <Link
            href="https://www.joinascenders.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-500 dark:hover:text-stone-400"
          >
            Ascenders
          </Link>
          ,{" "}
          <Link
            href="https://www.joinneothinkers.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-500 dark:hover:text-stone-400"
          >
            Neothinkers
          </Link>
          ,{" "}
          <Link
            href="https://www.joinimmortals.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-500 dark:hover:text-stone-400"
          >
            Immortals
          </Link>
          , and{" "}
          <Link
            href="https://www.supercivilization.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-stone-500 dark:hover:text-stone-400"
          >
            Superachievers
          </Link>
          .
        </p>
        <div className="flex justify-center">
          <Link
            href="https://github.com/joshuaseymour"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              bg-gradient-to-r from-stone-100 to-slate-100 
              dark:from-stone-800 dark:to-slate-800
              text-lg sm:text-xl md:text-2xl
              font-bold
              py-3 px-6 sm:py-4 sm:px-8
              rounded-lg
              shadow-lg hover:shadow-xl
              transition-all duration-300
              transform hover:scale-105
              relative
              overflow-hidden
            "
          >
            <span className="relative z-10 text-stone-800 dark:text-stone-200">Be more. Do more. Have more.</span>
            <span className="absolute inset-0 bg-gradient-to-r from-stone-200 to-slate-200 dark:from-stone-700 dark:to-slate-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>
      </div>
    </section>
  )
}
