import useUserStore from "~/stores/userStore";

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
  return { createPrescription };
};
