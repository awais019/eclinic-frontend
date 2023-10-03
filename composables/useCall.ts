import useUserStore from "~/stores/userStore";

export const useCall = () => {
  const { authToken } = useUserStore();
  const { baseURL } = useRuntimeConfig().public;

  function createCallRoom(userId: string) {
    return useFetch(`/calls/${userId}`, {
      method: "POST",
      headers: {
        "X-Auth-Token": authToken as string,
      },
      baseURL,
    });
  }

  return {
    createCallRoom,
  };
};
