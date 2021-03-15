// import 'nextra-theme-docs/style.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../utils/gtag'
import '../styles/tailwind.css'
import '../styles/globals.css'
import '../styles/night-owl.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.trackPageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return <Component {...pageProps} />
}

export default MyApp
