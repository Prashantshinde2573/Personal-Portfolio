import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths relative, so the build works on any host or sub-folder
export default defineConfig({
  plugins: [react()],
  base: './',
})
