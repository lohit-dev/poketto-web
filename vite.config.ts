import tailwindcss from '@tailwindcss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    // tailwindcss must come before svelte so it processes CSS first
    tailwindcss(),
    svelte(),
  ],
})
