export function useDoctor() {
  async function registerDoctor(newDoctor: FormData) {
    const { data, error } = await useFetch("/doctors/register", {
      method: "POST",
      body: newDoctor,
      baseURL: useRuntimeConfig().public.baseURL,
    });

    return { data, error };
  }

  return { registerDoctor };
}
