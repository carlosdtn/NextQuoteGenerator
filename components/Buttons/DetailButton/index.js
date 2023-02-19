import Arrow from 'components/Icons/Arrow'
import { useRouter } from 'next/router'

export default function DetailButton({ children, purpose, disabled }) {
  const router = useRouter()

  const redirectAllQuotes = () => {
    router.push(`/authors/${children}`)
  }

  return (
    <button
      onClick={redirectAllQuotes}
      className="dark:hover:bg-dm-blue group flex flex-row justify-between transition-colors duration-500 hover:bg-zinc-700 text-left px-4 py-6 rounded-sm w-4/6 sm:w-3/4 md:w-3/6 lg:w-2/6"
      disabled={disabled}
    >
      <div className="flex flex-col">
        <span className="dark:text-slate-400 group-hover:text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
          {children}
        </span>
        <span className="dark:text-slate-400 group-hover:text-white text-xs sm:text-sm">
          {purpose}
        </span>
      </div>
      <div className="h-full flex items-center pr-2">
        <Arrow className="hidden fill-current group-hover:flex group-hover:text-white" />
      </div>
    </button>
  )
}
