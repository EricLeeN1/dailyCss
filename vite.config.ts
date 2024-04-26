import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      dts: 'src/auto-imports.d.ts',
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        // custom
        {
          // "@vueuse/core": [
          //   // named imports
          //   "useMouse", // import { useMouse } from '@vueuse/core',
          //   "useTimestamp",
          //   "useFullscreen",
          //   // alias
          //   ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
          // ],
          // axios: [
          //   // default imports
          //   ["default", "axios"], // import { default as axios } from 'axios',
          // ],
          // "[package-name]": [
          //   "[import-names]",
          //   // alias
          //   ["[from]", "[alias]"],
          // ],
        }
      ],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/index.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
