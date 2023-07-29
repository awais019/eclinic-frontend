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
    },
  },
  nitro: {
    devProxy: {
      "/images": {
        target: process.env.IMAGES_URL,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        prependPath: true,
        changeOrigin: true,
      },
    },
  },
  plugins: ["~/plugins/toaster.client"],
});
