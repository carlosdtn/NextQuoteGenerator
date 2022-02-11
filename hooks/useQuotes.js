import { useEffect, useState } from 'react'
import useRandomQuote from 'hooks/useRandomQuote'

export default function useQuotes() {
  const [quote, setQuote] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { isReload } = useRandomQuote()

  useEffect(() => {
    makeRandomRequest()
  }, [isReload])

  const makeRandomRequest = () => {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setQuote(data.data[0])
      })
  }

  return { quote, isLoading }
}
