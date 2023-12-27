import type { Appointment } from "~/types/APIResponse";
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

  function upcomingDoctorAppointments(date?: Date) {
    return useFetch<{
      message: string;
      data: Appointment[];
    }>("/appointments/doctor", {
      method: "GET",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      query: {
        date: date ? date.toISOString() : "",
      },
    });
  }

  function upcomingPatientAppointments(date?: Date) {
    return useFetch<{
      message: string;
      data: Appointment[];
    }>("/appointments/patient", {
      method: "GET",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      query: {
        date: date ? date.toISOString() : "",
      },
    });
  }

  function updatePayment(id: string) {
    return useFetch<{
      message: string;
      data: {
        date: string;
        time: string;
        doctor: string;
        type: string;
      };
    }>(`/appointments/${id}`, {
      method: "PUT",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
    });
  }

  function completedAppointments() {
    return useFetch<{
      message: string;
      data: Appointment[];
    }>("/appointments/completed", {
      method: "GET",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
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

  function acceptAppointment(appointmentId: string) {
    return useFetch<{
      message: string;
      data: null;
    }>("/appointments/requests/accept", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: {
        appointmentId,
      },
    });
  }

  function rejectAppointment(appointmentId: string) {
    return useFetch<{
      message: string;
      data: null;
    }>("/appointments/requests/reject", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: {
        appointmentId,
      },
    });
  }

  function cancelAppointment(appointmentId: string) {
    return useFetch<{
      message: string;
      data: null;
    }>("/appointments/cancel", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: {
        appointmentId,
      },
    });
  }

  return {
    createAppointment,
    upcomingDoctorAppointments,
    upcomingPatientAppointments,
    updatePayment,
    completedAppointments,
    appointmentRequests,
    acceptAppointment,
    rejectAppointment,
    cancelAppointment,
  };
};
