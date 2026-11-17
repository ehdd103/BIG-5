import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // GitHub Pages 서브디렉토리 경로 호환을 위한 상대 경로 설정
  plugins: [
    react(),
    tailwindcss(),
  ],
})
