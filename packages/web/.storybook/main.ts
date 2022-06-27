const path = require('path')
const { loadConfigFromFile, mergeConfig } = require('vite')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    const loaded = await loadConfigFromFile(
      { command: 'build', mode: 'development' },
      path.resolve(__dirname, '../vitest.config.ts'),
    )

    return mergeConfig(config, {
      ...loaded?.config,
      // manually specify plugins to avoid conflict
      plugins: [],
    })
  },
}
