import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Frontent-for-Ecommerce-/',  
  plugins: [react()],
  server: {
    port: 5174,
    historyApiFallback: true
  }
})
