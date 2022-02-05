import Load from 'components/Icons/Load'

export default function RandomButton({ children, reloadStates }) {
  const { isReload, setIsReload } = reloadStates

  const ReloadQuote = () => {
    setIsReload(!isReload)
  }

  return (
    <button
      onClick={ReloadQuote}
      className="group flex mt-4 mr-16 items-center space-x-1"
    >
      <span className="group-hover:text-amber-400 group-active:text-red-600 text-gray-500 transition duration-300">
        {children}
      </span>
      <Load className="w-5 h-5 fill-current text-gray-500 group-hover:text-amber-400 group-active:text-red-600 transition duration-300 group-hover:rotate-180" />
    </button>
  )
}
