import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useRandomQuote from 'hooks/useRandomQuote'
import { routes } from 'utilities/constants.js'

export default function useAllQuotes() {
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { isReload } = useRandomQuote()
  const router = useRouter()
  const { id } = router.query

  const getAllQuotes = (id) => {
    fetch(routes.QTE_AUTHOR + id)
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

  return { quotes, isLoading }
}
