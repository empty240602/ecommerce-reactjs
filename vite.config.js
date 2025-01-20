import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': path.resolve(__dirname, 'src'),
            // eslint-disable-next-line no-undef
            '@components': path.resolve(__dirname, 'src/components'),
            // eslint-disable-next-line no-undef
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            // eslint-disable-next-line no-undef
            '@icons': path.resolve(__dirname, 'src/assets/icons')
        }
    }
});
