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

  async function getDoctors() {
    const { data, error } = await useFetch("/doctors", {
      method: "GET",
      baseURL,
    });

    return { data, error };
  }

  return { registerDoctor, getDoctors };
}
