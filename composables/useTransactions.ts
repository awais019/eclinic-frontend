import useUserStore from "~/stores/userStore";
import { Transaction } from "~/types/APIResponse";

export const useTransactions = () => {
  const { authToken } = useUserStore();
  const { baseURL } = useRuntimeConfig().public;

  function getTransactions() {
    return useFetch<{
      message: string;
      data: Transaction[];
    }>("/transactions", {
      headers: {
        "X-Auth-Token": authToken as string,
      },
      baseURL,
    });
  }

  return { getTransactions };
};
