import type { Patient } from "~/types/users";

export function usePatient() {
  async function registerPatient(newPatient: Patient) {
    const { data, error } = await useFetch("/patients/register/", {
      method: "POST",
      body: {
        ...newPatient,
      },
      baseURL: useRuntimeConfig().public.baseURL,
    });

    return { data, error };
  }
  return { registerPatient };
}
