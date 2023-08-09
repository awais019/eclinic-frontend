<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import useDoctorsStore from "~/stores/doctors";

  const doctorsStore = useDoctorsStore();

  const { page, totalPages } = storeToRefs(doctorsStore);

  const isFirstPage = computed(() => page.value === 0);
  const isLastPage = computed(() => page.value === totalPages.value - 1);
</script>

<template>
  <div class="max-w-fit ml-auto mb-12 flex gap-12">
    <button
      :disabled="isFirstPage"
      :class="{ 'opacity-25 cursor-not-allowed': isFirstPage }"
      @click="doctorsStore.backPage"
    >
      <IconsBackarrow />
    </button>
    <button
      :disabled="isLastPage"
      :class="{ 'opacity-25 cursor-not-allowed': isLastPage }"
      @click="doctorsStore.nextPage"
    >
      <IconsNextarrow />
    </button>
  </div>
</template>

<style scoped></style>
