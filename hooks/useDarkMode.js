import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    changeTheme()
  }

  const changeTheme = () => {
    if (isDark === true) {
      localStorage.theme = 'light'
      setIsDark(false)
    } else {
      localStorage.theme = 'dark'
      setIsDark(true)
    }
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      changeTheme()
    }
  }, [])

  return { isDark, toggleTheme }
}
