import useUserStrore from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStrore();

  if (!userStore.isLoggedIn) {
    return "/login";
  }

  const regex = /signin|signup|forgotpassword/gi;

  if (regex.test(to.path)) {
    return "/dashboard";
  }
});
