import useUserStrore from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStrore();

  const regex = /signin|signup|forgotpassword/gi;

  if (regex.test(to.path) && userStore.isLoggedIn) {
    return "/dashboard";
  }
});
