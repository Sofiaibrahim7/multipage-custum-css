import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        publicPage: resolve(__dirname, 'src/pages/public/public.html'),
        adminPage: resolve(__dirname, 'src/pages/admin/admin.html'),
      }
    }
  }
});
