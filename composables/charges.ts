import { Charge } from "~/types/users";
import useUserStore from "~/stores/userStore";

export const useCharges = () => {
  const { baseURL } = useRuntimeConfig().public;
  const userStore = useUserStore();

  function setCharges(charges: Charge[]) {
    return useFetch("/doctors/charges", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: charges,
    });
  }

  function getCharges() {
    return useFetch<{
      data: Charge[];
      message: string;
    }>("/doctors/charges", {
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
    });
  }

  function updateCharges(charges: Charge[]) {
    return useFetch("/doctors/charges", {
      method: "PUT",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: charges,
    });
  }

  return { setCharges, getCharges, updateCharges };
};
