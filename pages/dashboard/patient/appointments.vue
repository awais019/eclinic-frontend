<script setup lang="ts">
  const breadCrumbs = ref([
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Appointments", path: "/dashboard/patient/appointments" },
  ]);

  const { upcomingPatientAppointments } = useAppointment();

  const { data, error } = await upcomingPatientAppointments();
</script>

<template>
  <PageTitle :bread-crumbs="breadCrumbs" title="Appointments" />
  <div class="app-container">
    {{ data?.data }}
  </div>
</template>

<style scoped></style>
