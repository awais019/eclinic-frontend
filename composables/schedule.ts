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

  return { getTwoWeeks };
};
