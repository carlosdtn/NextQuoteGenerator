import { useEffect, useState, useContext } from 'react'
import ReloadContext from 'context/reloadContext'

export default function useQuotes() {
  const [quote, setQuote] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { isReload } = useContext(ReloadContext)

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
