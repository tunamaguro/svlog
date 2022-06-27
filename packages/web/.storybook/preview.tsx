import { DecoratorFn } from '@storybook/react'

import { Provider } from '../src/providers'

const withProvider: DecoratorFn = (Story) => (
  <Provider>
    <Story />
  </Provider>
)

export const decorators = [withProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
