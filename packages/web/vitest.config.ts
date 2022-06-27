/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPath from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPath()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/vitest.setup.ts',
  },
})
