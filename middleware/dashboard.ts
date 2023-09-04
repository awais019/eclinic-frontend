import useUserStore from "~/stores/userStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore();

  if (!userStore.isLoggedIn) {
    return `/signin?redirect=${to.path}`;
  } else if (userStore.isPatient && to.path !== "/dashboard/patient") {
    return "/dashboard/patient";
  } else if (
    userStore.isDoctor &&
    to.path !== "/dashboard/doctor" &&
    to.path !== "/dashboard/doctor/appointments" &&
    to.path !== "/dashboard/doctor/availability" &&
    to.path !== "/dashboard/doctor/payments" &&
    to.path !== "/dashboard/doctor/settings" &&
    to.path !== "/dashboard/doctor/settings/personalinfo" &&
    to.path !== "/dashboard/doctor/settings/hospitalinfo" &&
    to.path !== "/dashboard/doctor/settings/phone" &&
    to.path !== "/dashboard/doctor/settings/password" &&
    to.path !== "/dashboard/doctor/settings/email" &&
    to.path !== "/dashboard/doctor/ratings"
  ) {
    return "/dashboard/doctor";
  }
});
