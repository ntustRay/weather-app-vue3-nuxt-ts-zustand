// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03', // check compatibility for this nuxt version until this date
  devtools: { enabled: true }, // enable nuxt devtools
  modules: ['@nuxtjs/tailwindcss'], // include the tailwindcss module
  css: ['~/assets/css/main.css'], // import global css file
})
