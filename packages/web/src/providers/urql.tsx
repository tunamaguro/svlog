import { createClient, Provider } from 'urql'

const client = createClient({
  url: 'http://localhost:8080/v1/graphql',
})

export const UrqlProvider = ({ children }: { children: JSX.Element }) => (
  <Provider value={client}>{children}</Provider>
)

const mockClient = createClient({
  url: 'http://localhost:8080/v1/graphql',
  suspense: true,
  requestPolicy: 'network-only',
})

export const MockProvider = ({ children }: { children: JSX.Element }) => (
  <Provider value={mockClient}>{children}</Provider>
)
