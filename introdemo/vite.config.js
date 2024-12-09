// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Selector_Practice/', // Set this to match your repo name
  build: {
    outDir: 'build', // Ensure this matches the gh-pages deploy target
  },
});