export const quoteLoader = () => {
  return (
    <div className="flex flex-col animate-pulse space-y-4 p-2 bg-gray-50 border-l-8 border-yellow-200 pl-10 w-2/4 h-auto">
      <div className="flex flex-row space-x-2">
        <div className="flex bg-slate-300 rounded-md w-1/6 h-5"></div>
        <div className="flex bg-slate-300 rounded-md w-3/6 h-5"></div>
        <div className="flex bg-slate-300 rounded-md w-2/6 h-5"></div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="flex bg-slate-300 rounded-md w-2/6 h-5"></div>
        <div className="flex bg-slate-300 rounded-md w-3/6 h-5"></div>
        <div className="flex bg-slate-300 rounded-md w-1/6 h-5"></div>
      </div>
      <div className="flex flex-row space-x-2">
        <div className="flex bg-slate-300 rounded-md w-3/6 h-5"></div>
        <div className="flex bg-slate-300 rounded-md w-1/6 h-5"></div>
      </div>
    </div>
  )
}
