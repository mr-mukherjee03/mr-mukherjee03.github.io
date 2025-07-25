import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mr-mukherjee03.github.io/', // ← your GitHub repo name here
   css:{
    modules:{
      localsConvention:"camelCase",
    },
  },
});

