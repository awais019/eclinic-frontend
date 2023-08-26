import useUserStore from "~/stores/userStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = to.query.token as string;
  const userStore = useUserStore();

  if (token) {
    const { data, error } = await useAuth().verifyEmail(token);

    if (data.value && userStore.user) {
      userStore.user.email = data.value.data as string;
    }

    if (data.value) {
      return "/signin";
    }
    if (error.value) {
      return `/error/verifyemail/?token=${token}`;
    }
  }
});
