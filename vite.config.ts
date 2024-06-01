import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { ViteAliases } from 'vite-aliases';

// https://vitejs.dev/config/
export default defineConfig({
 base: '/',
 plugins: [
  vue(),
  ViteAliases({
   dir: 'src',
   prefix: '@',
  }),
 ],
});
