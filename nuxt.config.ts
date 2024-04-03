// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],
  css: [
    '@/assets/style/tailwind.scss',
    '@/assets/style/index.scss',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
})
