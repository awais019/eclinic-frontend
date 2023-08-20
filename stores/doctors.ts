import { Doctor } from "~/types/APIResponse";

export default defineStore("doctors", () => {
  const doctors = ref<Doctor[]>([]);
  const _query = ref("");
  const _specialization = ref("");
  const currentPage = ref(0);
  const totalPages = ref(0);

  const { getDoctors } = useDoctor();

  async function fetchDoctors(
    { query, specialization, page } = { query: "", specialization: "", page: 0 }
  ) {
    _query.value = query;
    _specialization.value = specialization;
    const { data, error } = await getDoctors({ query, specialization, page });
    if (data.value) {
      doctors.value = data.value.data.doctors;
      currentPage.value = data.value.data.page;
      totalPages.value = data.value.data.totalPages;
    }
  }

  async function nextPage() {
    if (currentPage.value < totalPages.value) {
      await fetchDoctors({
        query: _query.value,
        specialization: _specialization.value,
        page: currentPage.value + 1,
      });
    }
  }

  async function backPage() {
    if (currentPage.value > 0) {
      await fetchDoctors({
        query: _query.value,
        specialization: _specialization.value,
        page: currentPage.value - 1,
      });
    }
  }

  return {
    doctors: computed(() => doctors.value),
    page: computed(() => currentPage.value),
    totalPages: computed(() => totalPages.value),
    getDoctors: fetchDoctors,
    nextPage,
    backPage,
  };
});
