import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/apps/qr-generator/',
  plugins: [react()],
  resolve: {
    alias: {
      '@css': path.resolve(import.meta.dirname, 'src/assets/css'),
      '@workbench': fileURLToPath(new URL('./src/workbench', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url),
      ),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});
