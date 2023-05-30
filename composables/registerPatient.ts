import { Patient } from "~/types/users";

export const useRegisterPatient = async (newPatient: Patient) => {
  console.log(newPatient);

  const { data, error } = await useFetch("/patients/register/", {
    method: "POST",
    body: {
      ...newPatient,
    },
    baseURL: useRuntimeConfig().public.baseURL,
  });

  return { data, error };
};
