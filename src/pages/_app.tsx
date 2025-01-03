import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <script
        defer
        data-domain="debug.health"
        src="https://plausible.ppresume.com/js/script.js"
      ></script>
      <Component {...pageProps} />
    </>
  )
}
