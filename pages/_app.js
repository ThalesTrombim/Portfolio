import '../src/styles/global.scss'
import { Navbar } from '../src/components/Navbar'
import { ThemeProvider } from '../src/contexts/ThemeContext'
import { Footer } from '../src/components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
  
}

export default MyApp