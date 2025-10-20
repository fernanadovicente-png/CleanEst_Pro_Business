import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Corrigido para GitHub Pages (evita o ecrã branco)
export default defineConfig({
  plugins: [react()],
  base: '/Net_Pro_2/', // <-- muda aqui se o teu repositório tiver outro nome
});
