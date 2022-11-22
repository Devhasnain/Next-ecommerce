import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { CartItems } from '../Store/CartItems';
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})


function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartItems>
        <div className={roboto.className} >
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </CartItems>
    </>
  )
}

export default MyApp
