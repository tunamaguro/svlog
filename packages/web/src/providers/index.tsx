import { ThemeProvider } from './theme'

export const Provider = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider>{children}</ThemeProvider>
)
