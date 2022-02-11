import Quote from 'components/Quote'
import useAllQuotes from 'hooks/useAllQuotes'
import { useRouter } from 'next/router'
import BackArrow from 'components/Icons/BackArrow'
import { authorNameLoader } from 'skeleton/authorNameLoader'
import { quoteLoader } from 'skeleton/quoteLoader'

export default function Authors() {
  const { quotes, isLoading } = useAllQuotes()
  const router = useRouter()

  const redirectHome = () => {
    router.push('/')
  }

  return (
    <main className="overflow-auto scrollbar-thumb scrollbar-track scrollbar-track-piece dark:scrollbar-track-piece-dmode h-[85%] flex flex-col justify-start items-center m-10">
      <div className="w-full sm:w-3/4 flex justify-center">
        <div className="flex flex-row w-full sm:w-3/4 lg:w-2/4 justify-center sm:justify-start mb-8 sm:mb-16">
          <button
            onClick={redirectHome}
            className="flex justify-start items-start pt-0 sm:pt-1"
          >
            <BackArrow className="fill-current transition duration-200 text-slate-400 dark:hover:text-dm-yellow hover:text-amber-400 hover:-translate-x-2" />
          </button>
          {isLoading ? (
            <div className="w-3/4">{authorNameLoader()}</div>
          ) : (
            <h1 className="dark:text-slate-400 w-3/4 text-base sm:text-xl font-semibold pl-2">
              {`${quotes[0]?.quoteAuthor} (${
                quotes.length > 1
                  ? `${quotes?.length} citas`
                  : `${quotes?.length} cita`
              })`}
            </h1>
          )}
        </div>
      </div>
      {isLoading
        ? Array.from({ length: 6 }, (x, i) => i).map((n) => (
            <div
              key={n}
              className="flex w-full sm:w-3/4 justify-center mb-10 sm:mb-16"
            >
              {quoteLoader()}
            </div>
          ))
        : quotes.map((item) => (
            <div
              key={item?._id}
              className="w-full sm:w-3/4 flex justify-center mb-10 sm:mb-16"
            >
              <Quote>{`"${item?.quoteText}"`}</Quote>
            </div>
          ))}
    </main>
  )
}
