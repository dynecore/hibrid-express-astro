import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  srcDir: './astro/src',
  output: 'server', // Genera salida para Node.js
  adapter: node({
    mode: 'middleware' // Define que Astro actuará como middleware
  }),
});
