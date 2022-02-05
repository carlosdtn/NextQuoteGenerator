import { useEffect, useState, useContext } from 'react'
import ReloadContext from 'context/reloadContext'
import useQuotes from 'hooks/useQuotes'
import { useRouter } from 'next/router'

export default function useAllQuotes() {
  const [quotes, setQuotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { isReload } = useContext(ReloadContext)
  const { quote } = useQuotes()
  const router = useRouter()

  useEffect(() => {
    getAllQuotes()
  }, [isReload, isLoading])
  // ARREGLAR ERROR DE RENDER GAAAAAAAAAAAAAAAAAA

  const getAllQuotes = () => {
    fetch(
      `https://quote-garden.herokuapp.com/api/v3/quotes?author=${router.query.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        console.log(router.query)
        setIsLoading(false)
        setQuotes(data?.data)
        console.log(quote?.quoteAuthor)
      })
  }

  return { quotes, isLoading }
}
