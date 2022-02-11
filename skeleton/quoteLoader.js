export const quoteLoader = () => {
  const responsiveSizes = 'w-4/6 sm:w-3/4 md:w-4/6 lg:w-2/4'
  const fieldHeight = 'h-3 sm:h-4 lg:h-5'
  return (
    <div
      className={`dark:bg-dm-skeleton flex flex-col animate-pulse space-y-3 sm:space-y-4 p-2 bg-gray-50 border-l-8 dark:border-dm-yellow border-yellow-200 pl-10 h-auto ${responsiveSizes}`}
    >
      <div className="flex flex-row space-x-1 sm:space-x-2">
        <div
          className={`dark:bg-slate-600 flex bg-slate-300 rounded-md w-1/6 ${fieldHeight}`}
        ></div>
        <div
          className={`dark:bg-slate-600 flex bg-slate-300 rounded-md w-3/6 ${fieldHeight}`}
        ></div>
        <div
          className={`dark:bg-slate-600 flex bg-slate-300 rounded-md w-2/6 ${fieldHeight}`}
        ></div>
      </div>
      <div className="flex flex-row space-x-1 sm:space-x-2">
        <div
          className={`dark:bg-slate-600 flex bg-slate-300 rounded-md w-2/6 ${fieldHeight}`}
        ></div>
        <div
          className={`dark:bg-slate-600 flex bg-slate-300 rounded-md w-3/6 ${fieldHeight}`}
        ></div>
        <div
          className={`dark:bg-slate-600 flex bg-slate-300 rounded-md w-1/6 ${fieldHeight}`}
        ></div>
      </div>
      <div className="flex flex-row space-x-1 sm:space-x-2">
        <div
          className={`dark:bg-slate-600 flex bg-slate-300 rounded-md w-3/6 ${fieldHeight}`}
        ></div>
        <div
          className={`dark:bg-slate-600 flex bg-slate-300 rounded-md w-1/6 ${fieldHeight}`}
        ></div>
      </div>
    </div>
  )
}
