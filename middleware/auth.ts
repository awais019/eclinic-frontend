import useUserStrore from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStrore();

  const regex = /signin|signup|forgotpassword/gi;

  if (regex.test(to.path) && userStore.isLoggedIn) {
    return "/dashboard";
  }

  if (to.name == "doctors-id" && to.params.id && !userStore.isLoggedIn) {
    return `/signin?redirect=${to.path}`;
  }
});
