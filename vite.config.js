import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Make sure this matches your GitHub repository name
  build: {
    outDir: 'dist',
  },
});