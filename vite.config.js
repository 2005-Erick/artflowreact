import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  
  base: '/ArtFlow/', 

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        legal: resolve(__dirname, 'legal.html'),
       
      },
    },
  },
})