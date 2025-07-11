// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/global.css"],

  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        cssPath: "~/assets/css/tailwind.css",
      },
    ],
    "@formkit/nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
  ],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      socketBaseUrl: process.env.SOCKET_BASE_URL,
    },
  },

  plugins: ["~/plugins/toaster.client"],

  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },

  compatibilityDate: "2025-04-21",
});