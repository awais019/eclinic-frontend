import useUserStore from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (userStore.isLoggedIn) {
    return "/dashboard";
  }

  const token = to.query.token as string;
  if (!token) {
    return "/";
  }
});
