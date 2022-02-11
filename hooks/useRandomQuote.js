import { useContext } from 'react'
import ReloadContext from 'context/reloadContext'

export default function useRandomQuote() {
  const reloadStates = useContext(ReloadContext)

  return { ...reloadStates }
}
