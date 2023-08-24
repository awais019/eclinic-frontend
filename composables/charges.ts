import { Charge } from "~/types/users";
import useUserStore from "~/stores/userStore";

export const useCharges = () => {
  const { baseURL } = useRuntimeConfig().public;
  const userStore = useUserStore();

  function setCharges(charges: Charge[]) {
    return useFetch("/doctors/charges/set", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: charges,
    });
  }

  return { setCharges };
};
