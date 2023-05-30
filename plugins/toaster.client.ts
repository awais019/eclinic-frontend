import Toast, { PluginOptions, POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const options: PluginOptions = {
  timeout: 2500,
  icon: false,
  closeButton: false,
  hideProgressBar: true,
  position: POSITION.TOP_CENTER,
  transition: "Vue-Toastification__fade",
};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, options);
});
