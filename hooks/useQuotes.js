import { useEffect, useState } from 'react'
import useRandomQuote from 'hooks/useRandomQuote'
import { routes } from 'utilities/constants.js'

export default function useQuotes() {
  const [quote, setQuote] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { isReload } = useRandomQuote()

  useEffect(() => {
    makeRandomRequest()
  }, [isReload])

  const makeRandomRequest = () => {
    fetch(routes.QTE_RANDOM)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setQuote(data.data[0])
        console.log(data)
      })
  }

  return { quote, isLoading }
}
