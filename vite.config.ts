/// <reference types="vitest" />

import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Icons({ compiler: 'jsx', jsx: 'react' })],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '&': '/test',
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
})
