import { DoctorsResponse, Doctor } from "~/types/APIResponse";
import useUserStore from "~/stores/userStore";

export function useDoctor() {
  const { baseURL } = useRuntimeConfig().public;
  const userStore = useUserStore();
  async function registerDoctor(newDoctor: FormData) {
    const { data, error } = await useFetch("/doctors/register", {
      method: "POST",
      body: newDoctor,
      baseURL,
    });

    return { data, error };
  }

  async function getDoctors(
    { query, specialization, page } = { query: "", specialization: "", page: 0 }
  ) {
    const url = new URL("/api/doctors", baseURL);
    if (query) url.searchParams.append("q", query);
    if (specialization)
      url.searchParams.append("specialization", specialization);
    if (page) url.searchParams.append("page", page.toString());

    return useFetch<DoctorsResponse>(url.href, {
      method: "GET",
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

  function getDoctor(id: string) {
    return useFetch<{
      message: string;
      data: Doctor;
    }>(`/doctors/${id}`, {
      method: "GET",
      baseURL,
      headers: {
        "X-Auth-Token": userStore.authToken as string,
      },
    });
  }

  return { registerDoctor, getDoctors, getSpecializations, getDoctor };
}
