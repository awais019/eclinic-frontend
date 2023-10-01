import useUserStrore from "~/stores/userStore";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStrore();
  const { getConversation } = useMessage();

  if (!userStore.isLoggedIn) {
    return `/signin?redirect=${to.path}`;
  }
  const id = to.params.id;
  const { data, error } = await getConversation(id as string);
  console.log(data.value);
});
