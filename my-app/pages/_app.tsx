import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Context from '../components/Context'
import RouteComponent from '../components/RouteComponent'

function MyApp({ Component, pageProps, router }: AppProps) {
  return(
    <Context>
      <RouteComponent router={router}>
        <Component {...pageProps} />
      </RouteComponent>
    </Context>
  ) 
}

export default MyApp
