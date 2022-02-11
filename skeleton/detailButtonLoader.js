export const detailButtonLoader = () => {
  const responsiveSizes = 'w-40 sm:w-44 md:w-56'

  return (
    <div
      className={`flex flex-col animate-pulse space-y-2 p-1 sm:p-2 h-auto ${responsiveSizes}`}
    >
      <div className="dark:bg-slate-600 flex bg-slate-300 rounded-md w-5/6 h-4 sm:h-5"></div>
      <div className="dark:bg-slate-600 flex bg-slate-300 rounded-md w-2/6 h-3"></div>
    </div>
  )
}
