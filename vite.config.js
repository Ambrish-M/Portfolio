import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),          // ✅ required for JSX support
    tailwindcss(),    // optional, only if you're using this plugin specifically
  ],
});
