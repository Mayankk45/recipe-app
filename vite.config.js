import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fallback: resolve(__dirname, 'index.html')  // this creates 404.html
      }
    }
  },
  base: '/recipe-app/',
})
