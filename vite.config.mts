import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/apps/qr-generator/',
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true
  }
});
