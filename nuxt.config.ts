// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
