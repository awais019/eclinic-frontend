import { Review } from "~/types/APIResponse";

export const useReviews = () => {
  const { baseURL } = useRuntimeConfig().public;
  function getReviews(id: string) {
    return useFetch<{
      message: string;
      data: Review[];
    }>(`/doctors/${id}/reviews`, {
      method: "GET",
      baseURL,
    });
  }

  return { getReviews };
};
