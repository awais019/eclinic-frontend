import useUserStore from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (
    to.path == "/profilesetup" &&
    (userStore.profileSetUp || !userStore.isLoggedIn)
  ) {
    return "/";
  }

  if (
    userStore.isLoggedIn &&
    userStore.isDoctor &&
    !userStore.profileSetUp &&
    to.path != "/" &&
    to.path != "/profilesetup"
  ) {
    return "/profilesetup";
  }
});
