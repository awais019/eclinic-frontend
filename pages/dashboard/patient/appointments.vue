<script setup lang="ts">
  const breadCrumbs = ref([
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Appointments", path: "/dashboard/patient/appointments" },
  ]);
</script>

<template>
  <PageTitle :bread-crumbs="breadCrumbs" title="Appointments" />
  <div class="app-container">Appointment</div>
</template>

<style scoped></style>
