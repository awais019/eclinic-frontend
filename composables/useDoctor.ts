import { DoctorsResponse } from "~/types/APIResponse";

export function useDoctor() {
  const { baseURL } = useRuntimeConfig().public;
  async function registerDoctor(newDoctor: FormData) {
    const { data, error } = await useFetch("/doctors/register", {
      method: "POST",
      body: newDoctor,
      baseURL,
    });

    return { data, error };
  }

  async function getDoctors(
    { query, specialization } = { query: "", specialization: "" }
  ) {
    let url = "/doctors";
    if (query) {
      url += `?q=${query}`;
    }
    if (specialization) {
      url += `?specialization=${specialization}`;
    }
    if (query && specialization) {
      url += `?q=${query}&specialization=${specialization}`;
    }
    return useFetch<DoctorsResponse>(url, {
      method: "GET",
      baseURL,
    });
  }

  async function getSpecializations() {
    const { data, error } = await useFetch<{
      message: string;
      data: {
        specializations: string[];
      };
    }>("/doctors/specializations", {
      method: "GET",
      baseURL,
    });
    return { data, error };
  }

  return { registerDoctor, getDoctors, getSpecializations };
}
