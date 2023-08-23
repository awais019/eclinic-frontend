import useUserStore from "~/stores/userStore";

export const useAppointment = () => {
  const { baseURL } = useRuntimeConfig().public;
  const userStore = useUserStore();

  function createAppointment(
    doctorId: string,
    patient_name: string,
    date: Date,
    time: string,
    appointment_type: string,
    message: string
  ) {
    return useFetch<{
      message: string;
      data: { paymentLink: string };
    }>("/appointments/create", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: {
        doctorId,
        patient_name,
        date,
        time,
        appointment_type,
        message,
      },
    });
  }

  return { createAppointment };
};
