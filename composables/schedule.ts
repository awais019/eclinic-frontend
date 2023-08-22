export const useSchedule = () => {
  const { baseURL } = useRuntimeConfig().public;

  function getTwoWeeks(doctorId: string) {
    return useFetch<{
      message: string;
      data: { date: string; day: string; disable: boolean }[];
    }>(`doctors/${doctorId}/schedule`, {
      baseURL,
    });
  }

  function getTimeSlots(doctorId: string, date: Date, day: string) {
    return useFetch<{ start: string; end: string; disable: boolean }[]>(
      `doctors/${doctorId}/timeSlots`,
      {
        method: "POST",
        baseURL,
        body: { date, day },
      }
    );
  }

  return { getTwoWeeks, getTimeSlots };
};
