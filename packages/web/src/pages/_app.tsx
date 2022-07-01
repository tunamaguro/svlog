import '../styles/globals.css'

import type { AppProps } from 'next/app'

// なぜかimportがうまくできない。よくわからない
// eslint-disable-next-line import/no-unresolved
import { Provider } from '@/providers'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <Component {...pageProps} />
  </Provider>
)

export default MyApp
