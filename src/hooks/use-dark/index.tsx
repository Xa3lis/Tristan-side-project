import { useEffect, useState } from 'react'

export function useDarkSide() {
  const [theme, setTheme] = useState(localStorage.theme)
  const colorTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', colorTheme)
    localStorage.setItem('theme', theme)
  }, [theme, colorTheme])

  return { colorTheme, setTheme }
}
