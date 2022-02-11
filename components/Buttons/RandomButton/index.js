import Load from 'components/Icons/Load'
import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import useRandomQuote from 'hooks/useRandomQuote'
import useRandomAuthor from 'hooks/useRandomAuthor'

export default function RandomButton({ children }) {
  const { isReload, setIsReload } = useRandomQuote()
  const [isClicked, setIsClicked] = useState(false)
  const { author } = useRandomAuthor(isClicked)
  console.log(author)

  const route = useRouter()

  const reloadQuote = () => {
    if (route.pathname.includes(`/authors`)) {
      Router.push(`/authors/${author}`)
      setIsClicked(!isClicked)
    } else {
      setIsReload(!isReload)
    }
  }

  return (
    <button
      onClick={reloadQuote}
      className="group flex mt-4 mr-9 sm:mr-16 items-center space-x-1"
    >
      <span className="dark:group-hover:text-dm-yellow dark:group-active:text-dm-orange group-hover:text-amber-400 group-active:text-red-600 text-gray-500 transition duration-300">
        {children}
      </span>
      <Load className="dark:group-hover:text-dm-yellow dark:group-active:text-dm-orange w-5 h-5 fill-current text-gray-500 group-hover:text-amber-400 group-active:text-red-600 transition duration-300 group-hover:rotate-180" />
    </button>
  )
}
