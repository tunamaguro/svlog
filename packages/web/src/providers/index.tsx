import { ThemeProvider } from './theme'
import { UrqlProvider } from './urql'

export const Provider = ({ children }: { children: JSX.Element }) => (
  <UrqlProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UrqlProvider>
)
