export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = to.query.token as string;
  if (token) {
    const { data, error } = await useAuth().verifyEmail(token);
    if (data.value) {
      return "/";
    }
    if (error.value) {
      return "/login";
    }
  }
});
