import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortFolio-2024-/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx']
  }
});