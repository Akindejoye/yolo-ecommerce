import { ProductContextProvider } from '../context/ProductContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ProductContextProvider>
      <Component {...pageProps} />
    </ProductContextProvider>
  )
}

export default MyApp
