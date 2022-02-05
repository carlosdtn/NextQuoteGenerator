import Arrow from 'components/Icons/Arrow'

export default function DetailButton({ children, purpose }) {
  return (
    <button className="group flex flex-row justify-between w-2/6 transition-colors duration-500 hover:bg-zinc-700 text-left px-4 py-6 rounded-sm">
      <div className="flex flex-col">
        <span className="group-hover:text-white font-semibold text-xl">
          {children}
        </span>
        <span className="group-hover:text-white text-sm">{purpose}</span>
      </div>
      <div className="h-full flex items-center pr-2">
        <Arrow className="hidden fill-current group-hover:flex group-hover:text-white" />
      </div>
    </button>
  )
}
