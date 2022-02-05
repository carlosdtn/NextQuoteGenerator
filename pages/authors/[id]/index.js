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
    <main className="overflow-auto h-[85%] flex flex-col justify-start items-center m-10">
      <div className="w-3/4 flex justify-center">
        <div className="flex flex-row w-2/4">
          <button
            onClick={redirectHome}
            className="flex justify-start items-start pt-1"
          >
            <BackArrow className="fill-current transition duration-200 hover:text-amber-400 hover:-translate-x-2" />
          </button>
          {isLoading ? (
            authorNameLoader()
          ) : (
            <h1 className="w-2/4 text-xl font-semibold mb-16 pl-2">
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
        ? [1, 1, 1, 1, 1, 1].map((n) => (
            <div key={n} className="flex w-3/4 justify-center mb-16">
              {quoteLoader()}
            </div>
          ))
        : quotes.map((item) => (
            <div key={item?._id} className="w-3/4 flex justify-center mb-16">
              <Quote>{`"${item?.quoteText}"`}</Quote>
            </div>
          ))}
    </main>
  )
}
