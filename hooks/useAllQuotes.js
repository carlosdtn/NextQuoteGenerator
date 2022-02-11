import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useRandomQuote from 'hooks/useRandomQuote'

export default function useAllQuotes() {
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { isReload } = useRandomQuote()
  const router = useRouter()
  const { id } = router.query

  const getAllQuotes = (id) => {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        setQuotes(data?.data)
      })
  }

  useEffect(() => {
    if (id) {
      getAllQuotes(id)
    }
  }, [isReload, id])
  // ARREGLAR ERROR DE RENDER GAAAAAAAAAAAAAAAAAA

  return { quotes, isLoading }
}
