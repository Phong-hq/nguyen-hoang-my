// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', "@pinia/nuxt", "@ant-design-vue/nuxt"],
  css: [
    '@/assets/style/tailwind.scss',
    '@/assets/style/index.scss',
  ],
  // plugins: [
  //   '~/plugins/antd-ui.js'
  // ],
  postcss: {
    plugins: {
      tailwindcss: {},
      
    },
  },
  app: {
    head: {
      titleTemplate: '%s',
      title: 'Nguyen Hoang My',
      htmlAttrs: {
        lang: 'en'
      },
     
      link: [
        
        // { rel: 'icon', type: 'image/png', href: '/gocheckin.png' },
        // { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" },
        { rel: 'icon', type: 'image/png', href: "/banner.ico" }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "description" },
        { hid: "og:title", name:"og:title", property: "og:title", content: "Nguyen Hoang My" },
        { hid: "apple-mobile-web-app-title", name: "apple-mobile-web-app-title", content: "Nguyen Hoang My" },
        { hid: "og:site_name", name: "og:site_name", property: "og:site_name", content: "description" },
        { hid: "og:description", name: "og:description", property: "og:description", content: "description" },
        { hid: 'og:image', property: 'og:image', content:  "/banner.jpg" },
      ],
    },
  },
})