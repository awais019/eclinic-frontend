export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = to.query.token as string;
  if (token) {
    const { data, error } = await useAuth().verifyEmail(token);
    if (data.value) {
      return "/signin";
    }
    if (error.value) {
      return `/error/verifyemail/?token=${token}`;
    }
  }
});
