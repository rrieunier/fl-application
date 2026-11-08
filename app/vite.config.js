import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    // relative asset paths: the build works under any GitHub Pages sub-path
    base: './',
    // the theme lives in ../css, shared with the static index.html
    server: {fs: {allow: ['..']}},
});
