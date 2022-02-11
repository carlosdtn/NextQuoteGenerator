import { useEffect, useState } from 'react'

export default function useRandomAuthor(isClicked) {
  const [author, setAuthor] = useState(null)
  console.log(isClicked)

  const requestRandomAuthor = () => {
    fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
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
