<script setup lang="ts">
  import type { Prescription } from "~/types/APIResponse";

  const breadCrumbs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Prescriptions",
      path: "/dashboard/patient/prescriptions",
      current: true,
    },
  ];

  const { getPrescription } = usePrescription();

  const prescriptions = ref<Prescription[]>([]);
  const currentPrescription = ref<Prescription | null>(null);

  const { data } = await getPrescription();

  if (data.value && data.value.data) {
    prescriptions.value = data.value.data;
    currentPrescription.value = prescriptions.value[0];
  }

  function updateCurrentPrescription(presId: string) {
    currentPrescription.value =
      prescriptions.value.find((pres) => pres.id === presId) || null;
  }
</script>

<template>
  <PageTitle title="Access Prescriptions" :bread-crumbs="breadCrumbs" />
  <main class="app-container">
    <h1
      class="text-h3-b relative max-w-fit after:absolute after:bottom-0 after:left-0 after:right-1/3 after:bg-primary-blue-ribbon after:h-0.5 after:content-['']"
    >
      Recent Prescription
    </h1>
    <p v-show="prescriptions.length == 0" class="pt-8 text-neutral-dusty-gray">
      No prescriptions available
    </p>
    <section v-if="prescriptions.length > 0">
      <PatientPrescription
        v-if="currentPrescription"
        :prescription="currentPrescription"
      />
      <PatientAllPrescriptions
        :prescriptions="prescriptions"
        @update-current-prescription="updateCurrentPrescription"
      />
    </section>
  </main>
</template>

<style scoped></style>
