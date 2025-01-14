import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    base: 'https://online-radio-l3ioftg6j-johnbarros-projects.vercel.app/'
  },
  build: {
    outDir: 'build', // Vercel serves the `build` directory
    rollupOptions: {
      input: './src/main.jsx', // Ensure the correct input file
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Proxy API requests during development
        changeOrigin: true,
      },
    },
  },
});
