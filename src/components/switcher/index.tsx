import { useState } from 'react'
import { useDarkSide } from '@/hooks/use-dark'
import MdiWeatherSunny from '~icons/mdi/weather-sunny'
import MdiMoonAndStars from '~icons/mdi/moon-and-stars'

export function Switcher() {
  const { colorTheme, setTheme } = useDarkSide()
  const [darkSide, setDarkSide] = useState(colorTheme === 'light')

  const toggleDarkMode = () => {
    setTheme(colorTheme)
    setDarkSide(!darkSide)
  }

  return (
    <label className="swap swap-rotate">
      <input checked={darkSide} onChange={toggleDarkMode} type="checkbox" className="theme-controller" value="synthwave" />
      <MdiWeatherSunny className="swap-on fill-current w-10 h-10" />
      <MdiMoonAndStars className="swap-off fill-current w-10 h-10" />
    </label>
  )
}
