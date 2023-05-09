import { useState, useEffect } from 'react'

//themes
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import LightTheme from './styles/themes/light'
import DarkTheme from './styles/themes/dark'

//components
import Header from './components/Header'

//Pages
import Home from './pages/Home'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkTheme(darkModeQuery.matches)
  }, [])

  return (
    <ThemeProvider theme={!darkTheme ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <Header darkmode={darkTheme} setDarkMode={setDarkTheme} />
      <Home />
    </ThemeProvider>
  )
}

export default App
