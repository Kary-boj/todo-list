import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js', // Ensure this is pointing to the PostCSS config
  },
});
