import '../src/styles/global.scss'
import { Navbar } from '../src/components/Navbar'
import { ThemeProvider } from '../src/contexts/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
  
}

export default MyApp