import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚙️ Corrige o erro do ecrã branco no GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/Net_Pro_2/', // 👈 Nome do teu repositório no GitHub
})
