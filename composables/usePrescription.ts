import useUserStore from "~/stores/userStore";
import { Prescription } from "~/types/APIResponse";

export const usePrescription = () => {
  const { authToken } = useUserStore();
  const { baseURL } = useRuntimeConfig().public;

  function createPrescription(
    prescription: {
      medication: string;
      dosage: string;
      instructions: string;
    }[],
    appointmentId: string
  ) {
    return useFetch("/prescription", {
      method: "POST",
      headers: {
        "X-Auth-Token": authToken as string,
      },
      body: {
        prescription,
        appointmentId,
      },
      baseURL,
    });
  }

  function getPrescription() {
    return useFetch<{
      message: string;
      data: Prescription[];
    }>("/prescription", {
      method: "GET",
      headers: {
        "X-Auth-Token": authToken as string,
      },
      baseURL,
    });
  }

  return { createPrescription, getPrescription };
};
