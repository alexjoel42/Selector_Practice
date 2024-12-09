// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Selector_Practice', // Matches your GitHub repository name
  build: {
    outDir: 'dist', // Standard output directory for Vite builds
  },
});