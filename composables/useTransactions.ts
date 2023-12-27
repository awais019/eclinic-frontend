import useUserStore from "~/stores/userStore";
import type { Transaction } from "~/types/APIResponse";

export const useTransactions = () => {
  const { authToken } = useUserStore();
  const { baseURL } = useRuntimeConfig().public;

  function getDoctorTransactions() {
    return useFetch<{
      message: string;
      data: Transaction[];
    }>("/transactions/doctor", {
      headers: {
        "X-Auth-Token": authToken as string,
      },
      baseURL,
    });
  }

  function getPatientTransactions() {
    return useFetch<{
      message: string;
      data: Transaction[];
    }>("/transactions/patient", {
      headers: {
        "X-Auth-Token": authToken as string,
      },
      baseURL,
    });
  }

  return { getDoctorTransactions, getPatientTransactions };
};
