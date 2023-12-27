import useUserStore from "~/stores/userStore";
import type { Schedule } from "~/types/users";

export const useSchedule = () => {
  const { baseURL } = useRuntimeConfig().public;

  const userStore = useUserStore();

  function getTwoWeeks(doctorId: string) {
    return useFetch<{
      message: string;
      data: { date: string; day: string; disable: boolean }[];
    }>(`doctors/${doctorId}/schedule`, {
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
    });
  }

  function getTimeSlots(doctorId: string, date: Date, day: string) {
    return useFetch<{ start: string; end: string; disable: boolean }[]>(
      `doctors/${doctorId}/timeSlots`,
      {
        method: "POST",
        baseURL,
        body: { date, day },
        headers: {
          "X-Auth-Token": userStore.authToken as string,
        },
      }
    );
  }

  function setSchedule(schedule: Schedule[]) {
    return useFetch("doctors/schedule", {
      method: "POST",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: schedule,
    });
  }

  function updateSchedule(schedule: Schedule[]) {
    return useFetch("doctors/schedule", {
      method: "PUT",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
      body: schedule,
    });
  }

  function getSchedule() {
    return useFetch<{ message: string; data: Schedule[] }>("doctors/schedule", {
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
    });
  }

  return {
    getTwoWeeks,
    getTimeSlots,
    setSchedule,
    updateSchedule,
    getSchedule,
  };
};
