import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Permite conexiones externas
    port: 5173,
    allowedHosts: [
      '2b74-190-60-57-106.ngrok-free.app',
      '.ngrok-free.app',  // Permite todos los subdominios de ngrok
      'localhost'
    ]
  }
})