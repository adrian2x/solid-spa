import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin(), tailwindcss()],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
