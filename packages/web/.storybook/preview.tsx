import { DecoratorFn } from '@storybook/react'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import { initialize, mswDecorator } from 'msw-storybook-addon'
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

initialize()

export const decorators = [mswDecorator, withProvider]

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: { ...customViewports, ...MINIMAL_VIEWPORTS },
    defaultViewport: 'desktop',
  },
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
