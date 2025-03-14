import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000, // Define a porta como 3000
    proxy: {
      '/api': 'http://localhost:8080', // Redireciona as chamadas para o back-end
    },
  },
  base: '/Projeto_Sark/'
});
