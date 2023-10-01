import useUserStore from "~/stores/userStore";

export const useMessage = () => {
  const { baseURL } = useRuntimeConfig().public;
  const userStore = useUserStore();

  function getConversation(userId: string) {
    return useFetch<{
      message: string;
      data: { conversation: string };
    }>(`/messages/${userId}`, {
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      baseURL,
    });
  }

  return { getConversation };
};
