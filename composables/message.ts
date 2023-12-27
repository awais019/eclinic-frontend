import useUserStore from "~/stores/userStore";
import type { Conversation, Message } from "~/types/APIResponse";

export const useMessage = () => {
  const { baseURL } = useRuntimeConfig().public;
  const userStore = useUserStore();

  function getConversationsList() {
    return useFetch<{
      message: string;
      data: Conversation[];
    }>("/messages/conversations/list", {
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      baseURL,
    });
  }

  function getConversation(userId: string) {
    return useFetch<{
      message: string;
      data: Conversation;
    }>(`/messages/${userId}`, {
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      baseURL,
    });
  }

  function getMessages(conversationId: string) {
    return useFetch<{
      message: string;
      data: Message[];
    }>(`/messages/${conversationId}/messages`, {
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      baseURL,
    });
  }

  return { getConversationsList, getConversation, getMessages };
};
