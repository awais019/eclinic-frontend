import useUserStrore from "~/stores/userStore";
import useMessagesStore from "~/stores/messages";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStrore();
  const { getConversation, getConversationsList, getMessages } =
    useMessagesStore();

  if (!userStore.isLoggedIn) {
    return `/signin?redirect=${to.path}`;
  }
  const id = to.params.id;
  if (id) {
    await getConversation(id as string);
    await getMessages();
  }
  await getConversationsList();
});
