import '../src/styles/global.scss'
import { Navbar } from '../src/components/Navbar'
import { ThemeProvider } from '../src/contexts/ThemeContext'
import { Footer } from '../src/components/Footer'
import { MobileMenuProvider } from '../src/contexts/MobileMenuContext'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <MobileMenuProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </MobileMenuProvider>
    </ThemeProvider>
  )
  
}

export default MyApp