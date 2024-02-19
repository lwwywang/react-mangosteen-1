import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
<<<<<<< HEAD
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    isDev: command === 'serve'
  },
  plugins: [
    Unocss(),
    react(),
    viteMockServe()
  ]
}))
=======

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss(),
    react(),
  ]
})
>>>>>>> 4b5a979a776b5e130f464b0520107a95b725325e
