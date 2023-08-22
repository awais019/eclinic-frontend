import useUserStore from "~/stores/userStore";

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

  return { getTwoWeeks, getTimeSlots };
};
