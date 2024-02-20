import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
<<<<<<< HEAD
=======
import { svgsprites } from './vite_plugins/svgsprites'
>>>>>>> 9987b62 (deploy)

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    isDev: command === 'serve'
  },
  plugins: [
    Unocss(),
    react(),
<<<<<<< HEAD
    viteMockServe()
=======
    viteMockServe(),
    svgsprites()
>>>>>>> 9987b62 (deploy)
  ]
}))
