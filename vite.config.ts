import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { extractorSvelte } from '@unocss/core'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCss({
      extractors: [extractorSvelte],
      shortcuts: [],
      presets: [
        presetUno(),
        presetIcons(),
      ],
    }),
    svelte(),
  ],
})
