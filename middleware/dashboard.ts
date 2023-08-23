import useUserStore from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();
  if (!userStore.isLoggedIn) {
    return `/signin?redirect=/${to.path}`;
  } else if (userStore.isPatient && to.path !== "/dashboard/patient") {
    return "/dashboard/patient";
  } else if (!userStore.isPatient && to.path !== "/dashboard/doctor") {
    return "/dashboard/doctor";
  }
});
