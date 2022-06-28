import { DecoratorFn } from '@storybook/react'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import * as NextImage from 'next/image'

import { Provider } from '../src/providers'

// NextImageをstorybookで使用可能に
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

const withProvider: DecoratorFn = (Story) => (
  <Provider>
    <Story />
  </Provider>
)

export const decorators = [withProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: MINIMAL_VIEWPORTS,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
