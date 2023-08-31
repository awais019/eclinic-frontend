import { LazyPageTitle } from ".nuxt/components";
import useUserStrore from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStrore();

  let regex = /signin|signup|forgotpassword/gi;

  if (regex.test(to.path) && userStore.isLoggedIn) {
    return "/dashboard";
  }

  regex = /settings/gi;
  if (regex.test(to.path) && !userStore.isLoggedIn) {
    return `/signin?redirect=${to.path}`;
  }

  if (userStore.isDoctor && userStore.isLoggedIn) {
    return "/dashboard/doctor";
  }
  if (to.name == "doctors-id" && to.params.id && !userStore.isLoggedIn) {
    return `/signin?redirect=${to.path}`;
  }
});
