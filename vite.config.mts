import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/apps/qr-generator/',
  plugins: [react()],
  resolve: {
    alias: {
      '@css': fileURLToPath(new URL('./src/assets/css', import.meta.url)),
      '@workbench': fileURLToPath(new URL('./src/workbench', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
