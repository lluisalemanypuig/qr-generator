import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/apps/qr-generator/',
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
