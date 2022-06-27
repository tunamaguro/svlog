import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { Provider } from '../providers'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
