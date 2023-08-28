import { Appointment } from "~/types/APIResponse";
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

  function upcomingAppointments(date?: Date) {
    return useFetch<{
      message: string;
      data: Appointment[];
    }>("/appointments", {
      method: "GET",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      query: {
        date: date ? date.toISOString() : new Date().toISOString(),
      },
    });
  }

  function appointmentRequests() {
    return useFetch<{
      message: string;
      data: Appointment[];
    }>("/appointments/requests", {
      method: "GET",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
    });
  }

  return { createAppointment, upcomingAppointments, appointmentRequests };
};
