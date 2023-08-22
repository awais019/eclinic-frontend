import { Review } from "~/types/APIResponse";
import useUserStore from "~/stores/userStore";

export const useReviews = () => {
  const { baseURL } = useRuntimeConfig().public;
  const userStore = useUserStore();
  function getReviews(id: string) {
    return useFetch<{
      message: string;
      data: Review[];
    }>(`/doctors/${id}/reviews`, {
      method: "GET",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
    });
  }

  return { getReviews };
};
