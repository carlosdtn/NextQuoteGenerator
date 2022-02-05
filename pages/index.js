import Quote from 'components/Quote'
import DetailButton from 'components/Buttons/DetailButton'
import useQuotes from 'hooks/useQuotes'
import { quoteLoader } from 'skeleton/quoteLoader'
import { detailButtonLoader } from 'skeleton/detailButtonLoader'

export default function Home() {
  const { quote, isLoading } = useQuotes()

  return (
    <main className="h-full flex flex-col justify-center">
      <div className="flex justify-center">
        {isLoading ? quoteLoader() : <Quote>{`"${quote?.quoteText}"`}</Quote>}
      </div>
      <div className="flex justify-center mt-16">
        <DetailButton purpose={quote?.quoteGenre}>
          {isLoading ? detailButtonLoader() : quote?.quoteAuthor}
        </DetailButton>
      </div>
    </main>
  )
}
