import Moon from 'components/Icons/Moon'
import Sun from 'components/Icons/Sun'
import useDarkMode from 'hooks/useDarkMode'

export default function BiStateButton() {
  const { isDark, toggleTheme } = useDarkMode()

  return (
    <button
      onClick={toggleTheme}
      className="relative w-11 h-6 mt-4 ml-9 sm:ml-16 flex items-center bg-slate-800 dark:bg-slate-400 rounded-xl px-1 cursor-pointer"
    >
      <Sun className="absolute left-1  w-4 h-4 fill-current text-slate-300 dark:text-slate-800" />
      <Moon className="absolute right-1 w-4 h-4 fill-current text-slate-300 dark:text-slate-800" />
      <div
        className={`bg-orange-300 dark:bg-orange-600 transition dark:hover:bg-dm-orange hover:bg-orange-400 z-10 rounded-full h-4/6 w-4 cursor-pointer ${
          isDark ? 'translate-x-5' : ''
        }`}
      ></div>
    </button>
  )
}
