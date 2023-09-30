import print from "vue3-print-nb";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(print as any);
});
