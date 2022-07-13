import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'http://localhost:8080/v1/graphql',
})

export const UrqlProvider = ({ children }: { children: JSX.Element }) => (
  <Provider value={client}>{children}</Provider>
)
