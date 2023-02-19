import { useEffect, useState } from 'react'
import { routes } from 'utilities/constants.js'

export default function useRandomAuthor(isClicked) {
  const [author, setAuthor] = useState(null)

  const requestRandomAuthor = () => {
    fetch(routes.QTE_RANDOM)
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.data[0].quoteAuthor)
      })
  }

  useEffect(() => {
    requestRandomAuthor()
  }, [isClicked])

  return { author }
}
