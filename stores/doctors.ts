import { Doctor } from "~/types/APIResponse";

export default defineStore("doctors", () => {
  const doctors = ref<Doctor[]>([]);

  const { getDoctors } = useDoctor();

  async function fetchDoctors(
    { query, specialization } = { query: "", specialization: "" }
  ) {
    console.log(query, specialization);

    const { data, error } = await getDoctors({ query, specialization });
    if (data.value) {
      doctors.value = data.value.data.doctors;
    }
  }

  return {
    doctors: computed(() => doctors.value),
    getDoctors: fetchDoctors,
  };
});
