import path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    },
  },
  plugins: [
    vue(),

    // documentation : https://github.com/hannoeru/vite-plugin-pages
    Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
      routeStyle: 'nuxt',
      routeBlockLang: 'yaml'
    }),

    // documentation : https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: 'src/layouts'
    })

  ]
})
