import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'

export default defineConfig({
  site: 'https://convrt.qa',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    // The Arabic pages (/ar) are served at ar.convrt.qa, so they stay out of
    // convrt.qa's sitemap.
    sitemap({ filter: (page) => !page.includes('/api/') && !/\/ar(\/|$)/.test(new URL(page).pathname) }),
  ],
})
