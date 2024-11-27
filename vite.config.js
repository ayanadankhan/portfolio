import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // This must match your GitHub repository name
  build: {
    outDir: 'dist', // Ensures build files go to the 'dist' folder
  },
});
