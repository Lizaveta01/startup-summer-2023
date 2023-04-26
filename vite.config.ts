import react from '@vitejs/plugin-react';
import * as path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': `${path.resolve(__dirname, './src/components')}`,
      '@app': `${path.resolve(__dirname, './src/app')}`,
      '@pages': `${path.resolve(__dirname, './src/pages')}`,
      '@assets': `${path.resolve(__dirname, './src/assets')}`,
      '@utils': `${path.resolve(__dirname, './src/utils')}`,
    },
  },
});
