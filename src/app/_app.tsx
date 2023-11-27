// pages/_app.js

import { AppProps } from 'next/app'
import { ContextProvider } from '~/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
