export default function Quote({ children }) {
  const responsiveSizes =
    'text-md w-4/6 sm:text-lg sm:w-3/4 md:text-xl md:w-4/6 lg:text-2xl lg:w-2/4'

  return (
    <div
      className={`dark:text-slate-400 dark:border-dm-yellow border-l-8 border-yellow-200 pl-10 font-normal ${responsiveSizes}`}
    >
      <blockquote>{children}</blockquote>
    </div>
  )
}
