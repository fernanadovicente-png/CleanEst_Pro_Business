import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ CORRIGE O ERRO DO ECRÃ BRANCO NO GITHUB PAGES
export default defineConfig({
  plugins: [react()],
  base: '/CleanEst_Pro_Business/', // ⚠️ Nome do repositório no GitHub
})
